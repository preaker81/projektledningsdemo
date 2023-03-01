const list = document.getElementById('companyListContainer');

// ARRAYS (ERSÄTTARE FÖR DATABASE)
const companies = [
	['Sigma Technology', 'http://placeimg.com/400/200/tech/grayscale', 'Sigma Technology Cloud är ett IT-konsultbolag som är specialiserade på cloud, digitalisering och design. Dom har funnits i lite mer än ett år och är 45 anställda i bolaget. Efter att ha byggt upp en trygg och stabil plattform vill de fortsätta växa och skapa nya möjligheter för deras konsulter, men även skapa en arbetsplats för framtida talanger som vill ansluta sig till deras nätverk efter utbildningen. Sigma Technology välkomnar därför studenter som vill skriva sin avhandling eller göra praktik hos oss att ansöka till vårt Young Talent program.', 'Cloud, UX, UI, .NET, Java, Frontend Utveckling, programmering, konsult, IT', 'https://www.sigma.se/position/skriv-din-avhandling-eller-gor-praktik-pa-sigma-technology-cloud-malmo-en-20220411/'],

	['Intervaro', 'http://placeimg.com/400/200/tech/grayscale', 'Intervaro AB är en webbyrå som erbjuder tjänster till olika kunder inom webbstrategi, digital design och webbutveckling. Vi levererar lösningar med hög precision och noggrannhet både vad gäller design och teknik. 1. Utbildar sig på yrkeshögskola, högskola eller universitet inom frontendutveckling eller backendutveckling (systemutveckling/cms-utveckling/webbutveckling). 2. Har grundförståelse för webb och digitala projekt genom sin utbildning. 3. Har en praktikperiod på minst 8 veckor (och gärna två praktikperioder efter varandra). 4. Själv ställer krav och bidrar med feedback till vår verksamhet, så att vi också får chans att utvecklas. 5. Intervaro söker dig som är nyfiken, handlingskraftig och med ett äkta intresse för att fortsätta lära. Därtill hoppas vi att du har massor av humor, tycker om att dela med dig av dina idéer och trivs i en föränderlig miljö.', 'digital design, webbutveckling, systemutveckling, projekt, nyfiken, handlingskraftig, lära, idéer.', 'https://career.intervaro.se/jobs/2416967-praktik-eller-lia-for-webbutvecklare-hos-intervaro-hosten-2023'],

	['GESHDO', 'http://placeimg.com/400/200/tech/grayscale', 'GESHDO har under de senaste åren hållit i ett mycket lyckat intern program där vi med spännande projekt och engagerade mentorer lyckats nå fina resultat med flera anställningar som följd. Nu öppnar vi möjligheten att ansöka om praktik för 2023! Vad du kommer göra: 1. Du kommer att få lära dig om cloud (GCP, AWS, Azure). 2. Du kommer också att få lära dig hur det är att jobba som konsult. 3. Du kommer även att jobba med ett riktigt end-to-end projekt med moderna tekniker. 4. Ett exempel på detta kan vara att bygga ett komplett verktyg för administration av events, eller att få vara med och ta fram hur nästa version av vår hemsida skulle kunna se ut och fungera.', 'AWS,GCP, Azure, Konsult, praktik, javascript, UX, .NET, Cloud engineering.', 'https://connect.geshdo.com/jobs/2186009-lia-praktik-internship-for-senvaren-samt-hosten-2023'],

	['Wise IT', 'http://placeimg.com/400/200/tech/grayscale', 'Våra kompetenslösningar hjälper organisationer i Malmö, Lund och Helsingborg att effektivisera affären och ligga i framkant teknologiskt. Då framgångsrik IT rekrytering och konsultmatchning till stor del handlar om att förstå IT och vilka kompetenser som krävs för att säkra er framtida utveckling arbetar vi ständigt med att bygga relationer med IT specialister som är intresserade av att se sig om efter nya utmaningar.', 'IOS, Java, JavaScript, Android, Backend, Frontend, ', 'https://www.wiseit.se/karriar/ '],

	['ATEA', 'http://placeimg.com/400/200/tech/grayscale', 'I Malmö bygger vi Sverige med it genom att ligga i framkant med värdeskapande rådgivning, kvalitativa leveranser och it-lösningar anpassade för kundens behov. Vi vill göra det på ett ansvarsfullt sätt som tar hänsyn till sociala aspekter, vår miljö och framtida generationer. Vi vill även vara det självklara valet både för våra kunder, partners och medarbetare. Hos oss får du vara med att bidra till ett smartare, effektivare och mer hållbart samhälle. Med fokus på utveckling, laganda och personligt ansvar ser vi till att göra skillnad.', 'Nätverkstekniker, Linux, Microsoft, Cloud', 'https://www.atea.se/karriar/lediga-jobb/'],

	['Know IT', 'http://placeimg.com/400/200/tech/grayscale', 'Delar du vår vision om att skapa ett hållbart och mänskligt samhälle genom digitalisering och innovation? Bli vår nya kollega, driv förändring och hjälp våra nordiska kunder att forma framtiden med den senaste tekniken. (Kolla “Graduate eller ny som konsult”)', '.Net, Java och Python till JavaScript, Go och Cloudlösningar. Android, IOS, UX,UI', 'https://www.knowit.se/karriar/ '],

	['Advania', 'http://placeimg.com/400/200/tech/grayscale', 'På Advania levererar vi IT som helhet och på djupet. Vi har några av Sveriges främsta experter och kan hjälpa dig oavsett vad du vill uppnå med hjälp av IT. Här kan du läsa mer om vad Advania kan göra för dig:', 'IT-säkerhet, Cloud, Java, SQL, frontend, Backend', 'https://www.advania.se/karriar'],

	['Great IT', 'http://placeimg.com/400/200/tech/grayscale', 'Vi hjälper er att ta steget in i framtiden! Great IT finns idag både nordiskt och globalt hos våra kunder. Vi erbjuder en högkvalitativ IT-leverans som går utöver expertis och färdigheter. Med stor ödmjukhet och dedikation vågar vi utmana nutiden, för en mer hållbar morgondag.', 'IT Management, Analytics, Cloud, Den digitala byrån (systemutveckling, webb, e-handel, UX, strategi och prestanda), Professional Services, Risk & Security', 'https://greatit.se/'],

	['Consid', 'http://placeimg.com/400/200/tech/grayscale', 'Consid är ett av Sveriges snabbast växande företag och erbjuder helhetslösningar inom IT, affärsutveckling och kommunikation. Vi har samlat landets främsta konsulter för att skapa långsiktigt och hållbart värde för er verksamhet. Tillsammans tar vi fram innovativa lösningar som sätter människan i centrum. Från strategi till mål – från idé till verklighet.', 'Apputveckling, AI, Systemutveckling (.NET, CSS, HTML, JAVA, JS, NODE,REACT), Marknadsföring & kommunikation (Design, Kommunikation, SEM, SEO, UX), Varumärkesutvekling, Interactive (DAM, E-handel, Intranät, Optimizly, PIM, SEM, SEO, Sitecore, Sitevision), CRM, Utbildning, Molntjänster, Applikationsförvaltning, Digital arbetsplats, Digital transformation, Innovation, Inbyggda system, Business Intelligence, Test & kravställning, Internet of Things, Informationssäkerhet.', 'https://consid.se/'],

	['livingIT', 'http://placeimg.com/400/200/tech/grayscale', 'Living IT är ett livsstilsbolag där vi jobbar med det vi älskar samtidigt som vi ger oss tid för allt det andra viktiga i livet. Vi värdesätter fritid och inte övertid – att må bra som människa är en viktig grund för att göra ett bra jobb hos kunden. Våra ledstjärnor är glädje, inspiration och passion! Alla våra konsulter är utvecklare/testare med mångårig erfarenhet. Vi har experter inom bland annat .NET och Java samt flera tekniker inom frontend, men även testledning, automatiserad testning samt devops. För oss är sammanhållning och gemenskap en nyckelfaktor för att trivas på jobbet. Alla bidrar till en trivsam miljö där vi kan växa både yrkesmässigt och som individer. Vi håller därför de olika inriktningarna (utveckling och test) separerade i egna bolag som var för sig inte blir större än en “skolklass”, alltså runt 25-30 personer, så att alla ska kunna känna alla.', '', 'https://www.livingit.se/']
];
// ['company', 'http://placeimg.com/400/200/tech/grayscale', 'beskrivning', 'tags', 'url']

// Skapa ett kort med följande:
// Rubrik 
// Ikon
// Beskrivning
// Tags 
// Länk till hemsidan

for (let i = 0; i < companies.length; i++) {
	createLIACard(companies[i][0], companies[i][1], companies[i][2], companies[i][3], companies[i][4])
}


function createLIACard(title, icon, text, tags, link) {
	const cardDiv = document.createElement('div');
	cardDiv.classList.add('companyCard');

	const h3 = document.createElement('h3');
	h3.classList.add('cardH3');
	h3.innerText = `${title}`;
	cardDiv.append(h3);

	const iconImg = document.createElement('img');
	iconImg.classList.add('cardIcon');
	iconImg.src = `${icon}`;
	cardDiv.append(iconImg);

	const descriptionP = document.createElement('p');
	descriptionP.classList.add('cardDescriptionP');
	descriptionP.innerText = `${text}`;
	cardDiv.append(descriptionP);

	const tagsP = document.createElement('p');
	tagsP.classList.add('cardTags');
	tagsP.innerText = `${tags}`;
	cardDiv.append(tagsP);

	const linkA = document.createElement('a');
	linkA.classList.add('cardLink');
	linkA.target = '_blank';
	linkA.innerText = 'Visit'
	linkA.href = `${link}`;
	cardDiv.append(linkA);

	list.appendChild(cardDiv);
}
// target="_blank"