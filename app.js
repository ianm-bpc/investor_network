const RAW_FIRMS = `
a16z||AB|Venture|San Francisco, CA|Ambient.ai|2|2|
Accel|Gonzalo Mocorrea (Growth)|AB|Venture / Growth|San Francisco, CA|Laravel, Testsigma|2|2|
Accel-KKR|Tom Barnds, George Baughan, Phillip Robertson|IM|Buyout|San Francisco, CA / New York, NY||||
Acrew|||Venture|San Francisco, CA|Moderne|||
Acton Capital|Joseph Hefele|MDE|Venture|Munich, Germany||3|2|
Adam Street Growth|Aidan Pak, Thomas Del Mastro|HD, IM|Growth|Menlo Park, CA||1|1|Yes
Addition|Jack Spiegel|MDE|Venture / Growth|New York, NY||1|3|
Albion|Kib Rahman|MDE|Venture|London, UK||3|3|
Aleph|Tomer Diari|AB|Venture|Tel Aviv, Israel|Securithings|2|2|
Alkeon|Josh Shirazi, Moh Sabhani|AB, HD|Growth|San Francisco, CA||3|1|
Altimeter|Apoorv Agarwal, Clark Tang, Will Sheridan|AB, HD|Venture|San Francisco, CA||3|1|
Alumni Ventures|||Venture||Pano AI|||
Amplo|Sam Garcia|MDE|Venture|Austin, TX||2|2|
Ansa Capital|Allan Jean-Baptiste, Josh Chin|TD, HD, MDE|Venture|New York, NY|Selector, AI Squared|1|1|Yes
Anthos|Jeff Stapleton|MDE|Venture / Growth|Los Angeles, CA|Todyl|1|1|
Apollo Global Management|Will Maynard|IM|Buyout|New York, NY||||
Argentum|Jonathan Winfield|MDE|Growth|New York, NY||2|2|
Arthur Ventures|Jeff Yurecko, Nick Goblisch, Jake Olson|AB, NB, MDE|Venture / Growth|Minneapolis, MN||1|3|Yes
Atlantic Bridge|||Venture / Growth|London, UK||2|2|
AVP|Eric Li, Jessica Hayes, Sajan Patel|MDE|Venture|New York, NY|Selector|1|2|
B Capital|Eric Brooke|IM|Venture / Growth|San Francisco, CA||||
Bain Capital Tech Ops|Zach Berger|MDE|Growth|Boston, MA||1|2|
Bain Capital Ventures|Aditya Modak, Saanya Ohja, Amanda Huang|AB, HD, MDE|Venture|San Francisco, CA||2|1|
Balderton|Sivesh Sukumar|MDE|Venture|London, UK||2|3|
Banneker Partners|Matt MacDonald, Daniel Verburg|MDE|Buyout|Portland, OR||3|3|
Base10|Xander Lee|AB, HD|Venture|San Francisco, CA|Flare Systems, Todyl, Riot|1|1|Yes
Battery Ventures|Nikki Hassan, Bridget Bernardo, Matt Dailey, Jack Crockett|NB, IM|Venture / Growth|San Francisco, CA|Mattermost|1|2|Yes
Berkshire Partners|Jon Nuger, John Nelson, Kelly Bojic|MDE|Buyout|Boston, MA||3|2|
Bessemer|Amit Karp (Senior, Israel), Andrew Ren|AB, MDE|Venture / Growth|San Francisco, CA / New York, NY|Prefect|3|2|
Blackstone Growth|Vishal Amin (Senior), Kevin Chang, Bilal Chaudhry, David Kim, Carolien Nowak|AB, HD|Venture / Growth|San Francisco, CA||2|1|
Blu Ventures|Rajiv Mehta, Josh Miller|MDE, HD|Venture|Washington, DC||3|3|
Blue Cloud|Amy Wang|||||||
Boldstart|Shomik Ghosh, Ernest Addison|AB, MDE|Venture|Miami, FL / San Francisco, CA||3|2|
Bregal Sagemount|Gene Yoon (Senior), Gurmaan Bhatia, Dillon Biddiscombe, Brooke Fuller|AB, HD|Buyout|New York, NY / Palo Alto, CA||2|1|
BVP Forge|Adam Dulsky, Owen Isaacs|NB, MDE|Growth / Buyout|San Francisco, CA / New York, NY||2|1|
Capital One Ventures|Fred Kauber|MDE|Venture|New York, NY||2|2|
CapitalG|Josh Shin, James Luo, Mo Jamaa, Conner Lovely, Melody Li|HD, IM, MDE|Growth|San Francisco, CA||2|1|
Carlyle|Alex Cherry|IM|Buyout|New York, NY||2|2|
Centana Growth|Candler Rich, Liam Mickelsen|AB, HD, IM|Growth|San Francisco, CA|Cayosoft|1|2|
Cerberus Ventures|Aidan Bruno|IM|Venture|San Francisco, CA||2|3|
Cervin Ventures|Daniel Karp|MDE|Venture|San Francisco, CA||2|3|
Cisco Investments|Tony Kim|HD|Venture / Growth|San Francisco, CA|Aviz Networks|||
Citi Ventures|Whole Team, Nick Sands|AB, MDE|Venture / Growth|San Francisco, CA / New York, NY|Wealth.com|2|2|
Coatue|Nina Gerson, Gordon Tsai, Elijah Sutano, Amrit Rau|AB, HD, IM|Venture / Growth|San Francisco, CA / New York, NY||3|2|
Companyon|Andrew Berg|MDE|Venture|New York, NY||2|2|
Cove Hill|Jake Wolf-Sorokin|AB, MDE|Growth / Buyout|Boston, MA||2|1|
Crane Ventures|Anna Cachadina-Abello|IM, MDE|Venture|London, UK||2|3|
Crosspoint|Greg Clark, Vivek Mani|AB|Growth / Buyout|San Francisco, CA||2|1|
CRV|James Green|AB|Venture|San Francisco, CA|Chromatic|3|2|
Dawn Capital|Zoe Qin|MDE|Venture / Growth|London, UK||3|3|
DCA Asset Management|Eli Golden|IM|Buyout|Scottsdale, AZ||||
Dell Technologies Capital|Jack Booley, Nina Lu|HD, MDE|Venture|San Francisco, CA|Skan.ai, Appdome, Akka|2|2|
Delta-v|Connor Heard|HD|Venture|Dallas, TX||1|1|
Dreamit|Drew Hunt|MDE, IM|Venture|Washington, DC|Lineaje|2|2|
DST Global|Anubhav Gupta|MDE|Venture|San Francisco, CA||2|2|
Edison Partners||||||2|3|
EIP|Shawn Cherian, Tansel Ismail|AB|Growth|New York, NY / Miami, FL||2|1|
Elephant|Jack Simmons, Chris DeSouza, Henry Stites|AB, HD, MDE|Venture|Boston, MA||1|1|Yes
Evolution Equity Partners|Giulio Caruso|IM|Venture / Growth|New York, NY||||Yes
Exceptional Capital|Graham Stoddard|MDE|Venture|Miami, FL||3|3|
Expedition Growth|Ollie Thomas, Tom Denford|TD, MDE, NB|Growth|London, UK||2|2|
Fintop|Cooper Winrich|NB|Venture / Growth|Miami, FL||2|1|
FirstMark|Ryan Sullivan|IM|Venture|New York, NY||||
Firstminute|Lorcan Delaney|MDE|Venture|London, UK||2|2|
Five Elms|Austin Gideon, Grace Trahan|TD, NB|Growth|Kansas City, MO|Prismatic|2|2|
Forgepoint|Ernie Bio, Jimmy Park, Rey Kitron|AB, IM, MDE|Venture / Growth|San Francisco, CA|Synadia, Rapidfort|1|2|Yes
Foundation Capital|Leo Lu, Grace Zaro|IM|Venture|San Francisco, CA / New York, NY||||
Fulcrum Equity|Patrick Rowland|MDE|Growth|Atlanta, GA||3|3|
Full In Partners|Justin Lobo|IM|Venture / Growth|New York, NY||||
General Atlantic|Asher Hecht, Vinay Trivedi, Steve Kletscher, Jack Dove, Royce Tiger, Gaby Hamburger, Dylan Milligan|AB, NB, IM, MDE|Growth / Buyout|San Francisco, CA / New York, NY||2|1|
General Catalyst|Ahmed Alveed|IM|Venture / Growth|San Francisco, CA|Buildkite|||
Geodesic|Will Horyn|AB, MDE|Venture|San Francisco, CA||3|1|
Georgian|Steve Leightell, Juri Zguri, Tyler McGrath, Charlie Hughes, Russ Moore, Aidan Potts|AB, NB, IM, MDE|Venture / Growth|Toronto, Canada||1|3|Yes
Glasswing Ventures|Zach Jaffe|MDE, IM|Venture|Boston, MA|Black Kite|2|1|
Golub Growth|Rob Maxfield|MDE|Growth|New York, NY||||
Google Ventures (GV)|||Venture||Wealth.com|||
Gradient Ventures|||Venture||Flutterflow|||
Graphite Ventures|Mackenzie Puklicz|IM|Venture|Toronto, Canada||||
Great Hill|Vinay Ramprasad|MDE|Growth / Buyout|Boston, MA||1|3|
GreatPoint Ventures|Krish Kohli|HD|Venture / Growth|San Francisco, CA||1|1|
Greenfield Ventures|Avery Schwartz, Raz Mangel|AB|Venture|Tel Aviv, Israel||2|2|
Greenoaks|Patrick Backhouse|AB|Growth|San Francisco, CA||3|1|
Greylock|||Venture||Orb|||
GS Growth|Irit Kahan, Wes Garrett, Ben Fife|AB|Growth|Tel Aviv, Israel / San Francisco, CA / New York, NY||1|1|Yes
Guidepost Growth|Travis McGee|MDE|Growth|Boston, MA||2|2|
Headline|||Venture||NetBox|||
HIG Growth|Henry Reynolds, Mac Carso|MDE, NB|Growth|Boston, MA / New York, NY||2|1|
Highland|Michael Lackey|MDE|Venture|Boston, MA||2|1|
Highland Europe|Efosa Ayanru, Sam Brooks, Harry Williams, Eoghan Dorman, David Blyghton|AB, HD|Growth|London, UK||1|1|Yes
Hitachi Ventures|Divya Raghavan|MDE|Venture|San Francisco, CA||2|2|
IBM Ventures|||Venture||NetBox|||
ICONIQ|Shikhar Maheshwari, Murali Joshi|AB, HD|Growth|New York, NY / San Francisco, CA||2|1|
InMotion|Sam Nasrolahi|MDE|Venture|London, UK||3|3|
Innovius Capital|Ethan Smith|NB|Growth|San Francisco, CA|SewerAI, ClearML|1|1|
Inovia Capital|Steven Chung, Taha Mubashir|HD, MDE|Venture / Growth|Toronto, Canada|Flare Systems|1|1|Yes
In-Q-Tel|Mark Strabo, Kyle McNulty|IM|Venture|Washington, DC / San Francisco, CA|Vulncheck|||
Insight|Ved Narayan, Eugenia Lustgarten, Miles Neumann, Connor McCarthy, Julian Marcu|AB, HD, IM, MDE|Venture|New York, NY||1|1|Yes
Integrity Growth|Kasey Grabe|MDE|Growth|Los Angeles, CA||2|2|
Intel Capital|Ally Farmer|MDE|Venture|Austin, TX / San Francisco, CA|Moderne, Runpod|2|2|
IVP|Sabina Von Koskull|IM|Venture|London, UK||||
Jibe Ventures|Dany Hadar|MDE|Venture|London, UK||3|3|
JMI|Preston Horner, Stephen Jones, Anastasiya P., Isaac Scoville|AB, NB|Growth|San Diego, CA / Washington, DC||1|1|Yes
Jump Capital|Miles Scheffler, Aqil Pasha|IM, MDE|Venture|New York, NY / Chicago, IL||2|2|
JVP|||Venture||Appdome|||
K1|Mike Velcich, Christian Grant, Roy Liao|AB|Growth / Buyout|Los Angeles, CA||2|1|
Kennet Partners|Alex Taylor-Harris|MDE|Growth|London, UK||2|3|
KKR Growth|Jessica Allen, Ralph Chrappa|AB, IM|Growth|New York, NY||2|1|
Lakestar|Sri Ayangar|MDE|Venture|London, UK||1|2|
Lead Edge|Harjap Singh, Michael Sutter|HD, MDE|Growth|New York, NY|Akuity|1|1|
Left Lane|Aparajita Chauhan|HD|Growth|New York, NY|Riot|||
Level Equity|James Fearis|AB|Growth|New York, NY||1|2|Yes
Lightspeed|Lina Zhuo, James Ephrati, Sebastian Duesterhoeft, Yoni Cheifetz, Mark Sui (buyouts)|AB, HD, MDE|Venture / Growth / Buyout|New York, NY / San Francisco, CA / Tel Aviv, Israel||3|1|
Long Ridge|Rachel Philbin|HD|Growth|New York, NY||2|2|
Lookout Ventures|Will Rayner|MDE|Venture|Washington, DC|Black Cloak (TDF Ventures)|1|3|
Marathon|Alex Gorgoni|AB|Growth|New York, NY||3|1|
March Capital|Maya Matthews|MDE|Venture|Los Angeles, CA||3|2|
Marlin Equity|Garrett Zogby|IM|Buyout|Los Angeles, CA||3|3|
Mayfield|||Venture|San Francisco, CA|Orb|||
Menlo Ventures|||Venture||Unstructured|||
Meritech|Anthony DeCamillo|AB|Growth|San Francisco, CA||3|2|
Molten Ventures|Nikhil Punwaney|MDE|Venture|London, UK|Binalyze|2|2|
Moment Ventures||||||||
Mozilla Ventures|||Venture||Credo.ai|||
Mucker Capital|Aahad Patel|IM|Venture|New York, NY||||
NEA|Alex Sharata|AB|Venture / Growth|Miami, FL||2|2|
NewSpring|Tarun Sangari|MDE|Growth / Buyout|New York, NY||3|3|
NewView|Cormac Dunn, Ankit Sud, David Divver, Nazanin Soltan|AB, HD, IM, MDE|Venture|San Francisco, CA||2|1|
NextEquity|Rachit Joshi|MDE|Growth|San Francisco, CA||3|3|
Nexus Venture Partners|Aniket Kamthe|IM|Venture / Growth|San Francisco, CA|Nx|||
Norwest|Michael D'Arrigo, Owen Chun|AB, HD, IM|Venture / Growth|San Francisco, CA||2|1|
Notable Ventures|||Venture||Arteria, NetBox|||
Noteus|Yoan Pashov|MDE|Growth|London, UK||2|3|
Octopus Ventures|Constanza Diaz|MDE|Venture|London, UK||3|3|
One Peak|Nick Hancock|MDE|Growth|London, UK||1|1|
Open Core Ventures|Alex Smith|NB|Venture|N/A||2|1|
OpenOcean|Tony Nysten|MDE|Venture|London, UK||2|2|
OpenView|Vinnie McSweeny, Tori Korine|MDE|Venture / Growth|Boston, MA|Buildkite|3|3|
Paladin Capital|Mitch Cooney, Alex Ledoux, Francois Reuther|IM, MDE|Venture / Growth|Washington, DC / London, UK|Greynoise|1|2|Yes
PeakSpan|Kyle Reitinger|AB|Growth|San Francisco, CA||2|1|
Pelion|Skyler Seymour|MDE|Venture|Salt Lake City, UT||3|3|
Permira Growth|Kyle Butler, Pierre Pozzo|AB|Growth|Menlo Park, CA / London, UK||2|1|
Picture Capital|Zach Wyman|AB|Growth|Cambridge, MA||3|2|
Point Nine Capital|||Venture||Soda.io|||
Premji Invest|Akshay Kini, Justin Yannix|AB, HD, IM|Growth|San Francisco, CA||||
Prosperity7|Matthew Shang|MDE|Venture|San Francisco, CA|Opsera, Lineaje|1|2|
PSG|Ajay Chinni, Rohan Chudasama, Tyler Hanson, Asaf Joffe, Jordan Loev, North Peters|AB, NB, IM|Growth / Buyout|Boston, MA / Tel Aviv, Israel / New York, NY||2|1|
Radian Capital|Sam Winchester|IM|Growth|New York, NY|Greynoise|1|3|
Red Dot|Atad Peled|AB|Venture|Tel Aviv, Israel||2|2|
Redpoint|Sai Senthilkumar|AB|Venture|San Francisco, CA|Mattermost|1|2|Yes
Redseed|||Venture|London, UK||2|2|
Resurgens|Seth Green|TD, MDE|Buyout|Atlanta, GA|GitKraken|2|2|
Revolution|Hark Ahluwalia|MDE|Venture|Washington, DC||||
Ridge Ventures|Eliyahou Amsellem|IM|Venture|San Francisco, CA||||
Ridgepeak Partners|Carson Bobo|IM|Venture|Austin, TX||||
Riverwood|Anant Goel|HD|Growth|Boston, MA||2|1|
RRE Ventures|Denis Cherian|MDE|Venture|New York, NY||3|3|
Runa Capital|Denny Gabriel|NB|Venture|San Francisco, CA||2|2|
Sageview Capital|Michael Marcus, Will Kunin, Dorothy Shapiro, Sasha Pasmanik|HD, NB, MDE, IM|Growth|New York, NY / San Francisco, CA||2|1|
Salesforce Ventures|Kartik Gupta, Zak Kokosa, Emily Zhao, Caroline Fiegel, Pascha Hao, Sam Ackaah-Yensu, Kevin Wu|AB, IM, MDE|Venture|London, UK / San Francisco, CA||1|2|
Sands Capital|Chris Eng, Amanda Golden|MDE, NB|Venture|Washington, DC|Credo.ai|1|1|
Sapphire|Justin Liu, Casber Wang, Adam Liu, Jasmine Yang, Adrian Kania|AB, HD, IM, MDE|Venture / Growth|San Francisco, CA / Menlo Park, CA||1|1|Yes
Scale Venture Partners|Sabina Smith|IM|Venture|San Francisco, CA||||
Scottish Equity Partners|Taylor Rampton|MDE|Growth|London, UK|Basis Technologies|||
Serent|Bobby Donze, Alexis Lynch, Song Yang|AB, HD|Growth|San Francisco, CA||1|1|Yes
ServiceNow Ventures|Seihun Kong|MDE|Venture|San Francisco, CA||2|2|
Silversmith|Jim Quagliaroli (Senior), Ned Kingsley, John O'Connor, Danielle Waldman|AB, MDE, NB|Growth|Boston, MA|Gearset|2|1|
Silverton Partners|Aneesh Desai|MDE|Venture|Austin, TX||3|3|
SineWave Ventures|Yanev Suissa, Charlie Kleinsmith|TD, MDE|Venture|New York, NY|Selector, RunSafe|||
Singular|||Venture||Soda.io|||
Sixth Street Growth|Bill Keenan, Nikhil Gavai, Eric Rosenfeld, Peter Pillari, David Elgalwy|AB, IM|Growth|Boston, MA / New York, NY||2|1|
Sixty Degree Capital|Brett Liu|IM|Growth|San Francisco, CA||||
Smith Point|Lorenzo Salazar|MDE|Growth|San Francisco, CA / Austin, TX||||
Sorenson Capital|PJ Marsh, Olive Xu, Jeff Todd, Josh Anagnostou|HD, IM, MDE|Venture / Growth|Salt Lake City / San Francisco||2|1|
Spectrum Equity|Peter Kenerson, Clay McCollum, Joey Haig|HD, NB, MDE|Growth|Boston, MA / San Francisco, CA / London, UK||1|1|Yes
Squadra Ventures|Nav Vishwanathan, Isaac Carp|MDE, IM|Venture|Washington, DC||2|2|
Squarepoint|Martyna Piotrowska|MDE|Venture|New York, NY||2|1|
Stepstone|||Venture / Growth||Silent Push|||
Stone Point Capital|AJ Delgado|IM|Growth|New York, NY||||
Stripes|John Diorio|MDE|Venture / Growth|New York, NY||2|2|
Sumeru|Sanjeet Mitra (Senior), Jack McCabe, Sofija Ostojic, Raymond Shen|AB, MDE|Buyout|San Francisco, CA / New York, NY||2|1|
Summit|Len Ferrington (Senior), Mike Chen, Dan Kim, Alex LaPolice, Nik Ohri, Hunt Hobbs, Roy Kamineni, Chandler Scott|AB, NB, MDE|Growth / Buyout|San Francisco, CA / London, UK / Boston, MA||2|1|
Susquehanna Growth Equity|Evan Campbell, Jackson McKiernan|HD, IM|Growth / Buyout|Philadelphia, PA||1|1|
TA|Chris Hong, Mahek Mehta, Jack Roberts|AB, HD, IM|Buyout|Boston, MA / San Francisco, CA||1|1|Yes
T-Capital|Onat Derebek|MDE|Growth|London, UK||3|3|
TCV|Zach Riedy, Serhat Kizilboga, Morgan Gerlak (Velocity), Matt Movva|AB, HD, MDE|Venture / Growth|New York, NY / San Francisco, CA||1|1|Yes
TenEleven|Ben Charlson, Sid Subramanian|AB, HD, IM, MDE|Venture / Growth|Chicago, IL / Boston, MA|Silent Push, Vulncheck|1|1|Yes
Theory Ventures|Spencer Farrar|IM|Venture|San Francisco, CA||||
Tidemark|Dave Yuan (Senior), Nathan Hwang|AB, HD|Venture|San Francisco, CA||2|1|
Tiger Global|Phoebe Lin|AB, MDE|Venture|New York, NY|Prefect, Circle|3|1|
TPG Growth|Braden Casady|MDE|Growth / Buyout||||
Turn/River|Jax Morgan|HD|Buyout|San Francisco, CA||||
Unusual Ventures|Tyler Crown|MDE|Venture|New York, NY||2|3|
Updata|Jack Larson, Neal Singal, Konstantinos Bailas, Mary Hampton McNeal|AB, HD, NB, MDE|Growth|Washington, DC||1|1|Yes
UVC|Andreas Unseld, Alexander Kiltz|MDE|Venture|Munich, Germany||3|3|
Valor Ventures|William Leonard|MDE|Venture|Atlanta, GA||3|3|
Venture Guides|Will Schnoor|MDE|Venture|Boston, MA||2|3|
Vertex Ventures|Simon Tiu|MDE|Venture|San Francisco, CA||2|2|
Viking|Emily Nolop, Mihir Jain|AB|Growth|New York, NY||2|1|
Vitruvian|Christine Kang, Etham Frenkel|AB|Growth / Buyout|Miami, FL||2|1|
Volition Capital|Michael Brannan, Sinjon Goldberg|NB, MDE|Growth|Boston, MA|Black Kite|2|2|
Warburg Pincus|Danielle Steinman|MDE|Buyout|New York, NY||3|3|
Washington Harbour|Patrick Foley|MDE|Growth / Buyout|Washington, DC||3|3|
WestBridge|Tushar Gupta|NB|Growth|San Francisco, CA||2|3|
White Star Capital|Ted Vinnitchouk|IM|Venture / Growth|New York, NY|Flare Systems|||
YL Ventures|Yoav Leitersdorf (Senior)|AB|Venture|San Francisco, CA||2|2|
`;

const STORAGE_KEY = "jarvisInvestorNetworkState.v1";
const TOUCH_STALE_DAYS = 90;
const GRAPH_MIN_ZOOM = 0.35;
const GRAPH_MAX_ZOOM = 4;

const state = {
  view: "graph",
  scope: "priority",
  ownerScope: "all",
  selectedId: null,
  graph: { nodes: [], links: [] },
  graphViewport: { x: 0, y: 0, scale: 1 },
  portfolioDraft: [],
  knownDraft: [],
  store: loadStore()
};

const graphPointer = {
  id: null,
  startClientX: 0,
  startClientY: 0,
  startX: 0,
  startY: 0
};

const el = {
  entitySearch: document.querySelector("#entitySearch"),
  searchResults: document.querySelector("#searchResults"),
  graphStats: document.querySelector("#graphStats"),
  networkGraph: document.querySelector("#networkGraph"),
  zoomOutGraph: document.querySelector("#zoomOutGraph"),
  zoomInGraph: document.querySelector("#zoomInGraph"),
  resetGraphView: document.querySelector("#resetGraphView"),
  graphEmpty: document.querySelector("#graphEmpty"),
  ownerScope: document.querySelector("#ownerScope"),
  coverageOwnerFilter: document.querySelector("#coverageOwnerFilter"),
  coverageTypeFilter: document.querySelector("#coverageTypeFilter"),
  metricGrid: document.querySelector("#metricGrid"),
  coverageGrid: document.querySelector("#coverageGrid"),
  detailContent: document.querySelector("#detailContent"),
  refreshFirmSelect: document.querySelector("#refreshFirmSelect"),
  portfolioPaste: document.querySelector("#portfolioPaste"),
  sourceUrl: document.querySelector("#sourceUrl"),
  diffPortfolioButton: document.querySelector("#diffPortfolioButton"),
  addPortfolioButton: document.querySelector("#addPortfolioButton"),
  portfolioDiff: document.querySelector("#portfolioDiff"),
  knownElsewhere: document.querySelector("#knownElsewhere"),
  questionInput: document.querySelector("#questionInput"),
  askButton: document.querySelector("#askButton"),
  answerPanel: document.querySelector("#answerPanel"),
  logOwner: document.querySelector("#logOwner"),
  logFirm: document.querySelector("#logFirm"),
  logType: document.querySelector("#logType"),
  logDate: document.querySelector("#logDate"),
  logNote: document.querySelector("#logNote"),
  saveLogButton: document.querySelector("#saveLogButton"),
  recentLogs: document.querySelector("#recentLogs")
};

let seedFirms = parseFirmRows(RAW_FIRMS);
let firms = mergeLocalPortfolio(seedFirms, state.store.portfolioAdditions);
let graphIndex = buildGraphIndex(firms);

function splitRespectingParens(value) {
  if (!value) return [];
  const parts = [];
  let current = "";
  let depth = 0;
  for (const char of value) {
    if (char === "(") depth += 1;
    if (char === ")" && depth > 0) depth -= 1;
    if (char === "," && depth === 0) {
      if (current.trim()) parts.push(current.trim());
      current = "";
      continue;
    }
    current += char;
  }
  if (current.trim()) parts.push(current.trim());
  return parts;
}

function parseFirmRows(raw) {
  return raw.trim().split(/\n+/).map((row, index) => {
    const [
      firm = "",
      contacts = "",
      owners = "",
      type = "",
      location = "",
      portfolio = "",
      relationshipPriority = "",
      strategicPriority = "",
      highPriority = ""
    ] = row.split("|");
    return {
      id: `firm:${slug(firm)}`,
      sourceIndex: index,
      name: firm.trim(),
      contacts: splitRespectingParens(contacts),
      owners: splitRespectingParens(owners).map((owner) => owner.trim()).filter(Boolean),
      types: splitRespectingParens(type.replace(/\s+\/\s+/g, ", ")),
      locations: splitLocations(location),
      portfolio: splitRespectingParens(portfolio),
      relationshipPriority: Number(relationshipPriority) || null,
      strategicPriority: Number(strategicPriority) || null,
      highPriority: /^yes$/i.test(highPriority.trim())
    };
  }).filter((firm) => firm.name);
}

function splitLocations(value) {
  return String(value || "")
    .split(/\s+\/\s+/)
    .map((location) => location.trim())
    .filter(Boolean);
}

function loadStore() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { portfolioAdditions: {}, interactions: [] };
    const parsed = JSON.parse(raw);
    return {
      portfolioAdditions: parsed.portfolioAdditions || {},
      interactions: Array.isArray(parsed.interactions) ? parsed.interactions : []
    };
  } catch {
    return { portfolioAdditions: {}, interactions: [] };
  }
}

function saveStore() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.store));
}

function mergeLocalPortfolio(baseFirms, additions) {
  return baseFirms.map((firm) => {
    const local = additions[firm.name] || [];
    const localNames = local.map((item) => item.name || item).filter(Boolean);
    const merged = dedupeByName([...firm.portfolio, ...localNames]);
    return { ...firm, portfolio: merged, localPortfolio: local };
  });
}

function buildGraphIndex(sourceFirms) {
  const nodes = new Map();
  const links = [];
  const companyToFirms = new Map();
  const investorToFirms = new Map();
  const ownerToFirms = new Map();

  function addNode(id, label, type, data = {}) {
    if (!nodes.has(id)) nodes.set(id, { id, label, type, ...data });
    return nodes.get(id);
  }

  function addLink(source, target, type, weight = 1) {
    links.push({ source, target, type, weight });
  }

  for (const firm of sourceFirms) {
    addNode(firm.id, firm.name, "firm", { firm });
    for (const owner of firm.owners) {
      const ownerId = `owner:${slug(owner)}`;
      addNode(ownerId, owner, "owner", { owner });
      addLink(ownerId, firm.id, "covers", firm.highPriority ? 2.2 : 1.4);
      appendMap(ownerToFirms, owner, firm);
    }
    for (const investor of firm.contacts) {
      const investorId = `investor:${slug(investor)}:${slug(firm.name)}`;
      addNode(investorId, investor, "investor", { investor, firmName: firm.name });
      addLink(firm.id, investorId, "contact", 0.8);
      appendMap(investorToFirms, investor, firm);
    }
    for (const company of firm.portfolio) {
      const companyId = `company:${slug(company)}`;
      addNode(companyId, company, "company", { company });
      addLink(firm.id, companyId, "portfolio", firm.highPriority ? 1.7 : 1.1);
      appendMap(companyToFirms, company, firm);
    }
  }

  return {
    nodes,
    links,
    companyToFirms,
    investorToFirms,
    ownerToFirms
  };
}

function appendMap(map, key, value) {
  if (!map.has(key)) map.set(key, []);
  map.get(key).push(value);
}

function dedupeByName(items) {
  const seen = new Set();
  const out = [];
  for (const item of items) {
    const key = normalize(item);
    if (!key || seen.has(key)) continue;
    seen.add(key);
    out.push(item.trim ? item.trim() : item);
  }
  return out;
}

function slug(value) {
  return normalize(value).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "blank";
}

function normalize(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9.]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

async function init() {
  await refreshBootstrap();
  hydrateControls();
  setDefaultDates();
  bindEvents();
  renderAll();
}

async function refreshBootstrap() {
  try {
    const bootstrap = await apiJson("/api/bootstrap");
    seedFirms = bootstrap.firms || [];
    firms = bootstrap.firms || [];
    state.store.interactions = bootstrap.interactions || [];
    state.store.portfolioAdditions = bootstrap.portfolioAdditions || {};
    graphIndex = buildGraphIndex(firms);
  } catch {
    firms = mergeLocalPortfolio(seedFirms, state.store.portfolioAdditions);
    graphIndex = buildGraphIndex(firms);
  }
}

async function apiJson(path, options = {}) {
  if (window.location.protocol === "file:") {
    throw new Error("Server API unavailable from file://");
  }
  const init = {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(options.headers || {})
    }
  };
  if (options.body && typeof options.body !== "string") {
    init.body = JSON.stringify(options.body);
  }
  const response = await fetch(path, init);
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || `Request failed with ${response.status}`);
  return payload;
}

function hydrateControls() {
  const owners = getOwners();
  setOptions(el.ownerScope, [{ value: "all", label: "All owners" }, ...owners.map((owner) => ({ value: owner, label: owner }))]);
  setOptions(el.coverageOwnerFilter, [{ value: "all", label: "All owners" }, ...owners.map((owner) => ({ value: owner, label: owner }))]);
  setOptions(el.logOwner, owners.map((owner) => ({ value: owner, label: owner })));
  setOptions(el.logFirm, firms.map((firm) => ({ value: firm.name, label: firm.name })));
  setOptions(el.refreshFirmSelect, firms.map((firm) => ({ value: firm.name, label: firm.name })));
}

function setOptions(select, options) {
  select.innerHTML = options.map((option) => `<option value="${escapeHtml(option.value)}">${escapeHtml(option.label)}</option>`).join("");
}

function getOwners() {
  return [...new Set(firms.flatMap((firm) => firm.owners))].sort((a, b) => a.localeCompare(b));
}

function setDefaultDates() {
  const today = new Date().toISOString().slice(0, 10);
  el.logDate.value = today;
}

function bindEvents() {
  document.querySelectorAll(".rail-button").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.view));
  });

  document.querySelectorAll(".scope-button").forEach((button) => {
    button.addEventListener("click", () => {
      state.scope = button.dataset.scope;
      state.ownerScope = "all";
      el.ownerScope.value = "all";
      document.querySelectorAll(".scope-button").forEach((item) => item.classList.toggle("active", item === button));
      resetGraphViewport();
      renderGraph();
    });
  });

  el.ownerScope.addEventListener("change", () => {
    state.ownerScope = el.ownerScope.value;
    state.scope = state.ownerScope === "all" ? "priority" : "owner";
    document.querySelectorAll(".scope-button").forEach((item) => {
      item.classList.toggle("active", state.ownerScope === "all" && item.dataset.scope === "priority");
    });
    resetGraphViewport();
    renderGraph();
  });

  el.coverageOwnerFilter.addEventListener("change", renderCoverage);
  el.coverageTypeFilter.addEventListener("change", renderCoverage);

  el.entitySearch.addEventListener("input", renderSearchResults);
  el.entitySearch.addEventListener("focus", renderSearchResults);
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".global-search")) el.searchResults.classList.remove("open");
  });

  el.diffPortfolioButton.addEventListener("click", diffPortfolio);
  el.addPortfolioButton.addEventListener("click", addSelectedPortfolio);
  el.askButton.addEventListener("click", runQuestion);
  el.questionInput.addEventListener("keydown", (event) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "Enter") runQuestion();
  });

  document.querySelectorAll("[data-question]").forEach((button) => {
    button.addEventListener("click", () => {
      el.questionInput.value = button.dataset.question;
      runQuestion();
    });
  });

  el.saveLogButton.addEventListener("click", saveTouch);
  el.zoomOutGraph.addEventListener("click", () => zoomGraphAt(getGraphCenterPoint(), 0.82));
  el.zoomInGraph.addEventListener("click", () => zoomGraphAt(getGraphCenterPoint(), 1.18));
  el.resetGraphView.addEventListener("click", resetGraphViewport);
  el.networkGraph.addEventListener("wheel", handleGraphWheel, { passive: false });
  el.networkGraph.addEventListener("pointerdown", startGraphPan);
  el.networkGraph.addEventListener("pointermove", moveGraphPan);
  el.networkGraph.addEventListener("pointerup", endGraphPan);
  el.networkGraph.addEventListener("pointercancel", endGraphPan);
  el.networkGraph.addEventListener("lostpointercapture", endGraphPan);
  window.addEventListener("resize", debounce(renderGraph, 120));
}

function switchView(view) {
  state.view = view;
  document.querySelectorAll(".rail-button").forEach((button) => button.classList.toggle("active", button.dataset.view === view));
  document.querySelectorAll(".view-panel").forEach((panel) => panel.classList.remove("active"));
  document.querySelector(`#${view}View`).classList.add("active");
  if (view === "graph") renderGraph();
  if (view === "coverage") renderCoverage();
}

function renderAll() {
  renderGraph();
  renderCoverage();
  renderDetails();
  renderRecentLogs();
  renderAnswerStart();
}

function activeGraphSubset() {
  let includedFirmIds = new Set();
  if (state.scope === "all") {
    includedFirmIds = new Set(firms.map((firm) => firm.id));
  } else if (state.scope === "owner" && state.ownerScope !== "all") {
    includedFirmIds = new Set(firms.filter((firm) => firm.owners.includes(state.ownerScope)).map((firm) => firm.id));
  } else if (state.selectedId) {
    const neighborIds = new Set([state.selectedId]);
    for (const link of graphIndex.links) {
      if (link.source === state.selectedId) neighborIds.add(link.target);
      if (link.target === state.selectedId) neighborIds.add(link.source);
    }
    for (const id of neighborIds) {
      const node = graphIndex.nodes.get(id);
      if (node?.type === "firm") includedFirmIds.add(id);
    }
    if (!includedFirmIds.size) {
      for (const link of graphIndex.links) {
        if (neighborIds.has(link.source) || neighborIds.has(link.target)) {
          const sourceNode = graphIndex.nodes.get(link.source);
          const targetNode = graphIndex.nodes.get(link.target);
          if (sourceNode?.type === "firm") includedFirmIds.add(sourceNode.id);
          if (targetNode?.type === "firm") includedFirmIds.add(targetNode.id);
        }
      }
    }
  } else {
    includedFirmIds = new Set(
      firms
        .filter((firm) => firm.highPriority || firm.relationshipPriority === 1 || firm.strategicPriority === 1)
        .map((firm) => firm.id)
    );
  }

  const includedNodeIds = new Set([...includedFirmIds]);
  for (const link of graphIndex.links) {
    if (includedFirmIds.has(link.source) || includedFirmIds.has(link.target)) {
      includedNodeIds.add(link.source);
      includedNodeIds.add(link.target);
    }
  }
  if (state.selectedId) includedNodeIds.add(state.selectedId);

  const nodes = [...includedNodeIds]
    .map((id) => graphIndex.nodes.get(id))
    .filter(Boolean)
    .map((node) => ({ ...node }));
  const links = graphIndex.links.filter((link) => includedNodeIds.has(link.source) && includedNodeIds.has(link.target));
  return { nodes, links };
}

function renderGraph() {
  const graph = activeGraphSubset();
  state.graph = graph;
  const nodeCount = graph.nodes.length;
  const firmCount = graph.nodes.filter((node) => node.type === "firm").length;
  const companyCount = graph.nodes.filter((node) => node.type === "company").length;
  el.graphStats.textContent = `${firmCount} firms, ${companyCount} companies, ${nodeCount} total nodes`;
  el.graphEmpty.classList.toggle("show", nodeCount === 0);
  el.networkGraph.innerHTML = "";
  if (!nodeCount) return;

  const bounds = el.networkGraph.getBoundingClientRect();
  const width = Math.max(620, bounds.width || 820);
  const height = Math.max(520, bounds.height || 620);
  el.networkGraph.setAttribute("viewBox", `0 0 ${width} ${height}`);
  layoutGraph(graph.nodes, graph.links, width, height);

  const selectedNeighbors = getNeighborIds(state.selectedId);
  const viewportLayer = svgEl("g", { class: "graph-viewport" });
  const linkLayer = svgEl("g", { class: "links" });
  const nodeLayer = svgEl("g", { class: "nodes" });

  for (const link of graph.links) {
    const source = graph.nodes.find((node) => node.id === link.source);
    const target = graph.nodes.find((node) => node.id === link.target);
    if (!source || !target) continue;
    const highlighted = state.selectedId && (link.source === state.selectedId || link.target === state.selectedId);
    const line = svgEl("line", {
      class: `graph-link${highlighted ? " highlight" : ""}`,
      x1: source.x,
      y1: source.y,
      x2: target.x,
      y2: target.y
    });
    linkLayer.append(line);
  }

  for (const node of graph.nodes) {
    const selected = node.id === state.selectedId;
    const dimmed = state.selectedId && !selected && !selectedNeighbors.has(node.id);
    const group = svgEl("g", {
      class: [
        "graph-node",
        `node-${node.type}`,
        node.type === "firm" && node.firm?.highPriority ? "node-high" : "",
        selected ? "selected" : "",
        dimmed ? "dim" : ""
      ].filter(Boolean).join(" "),
      transform: `translate(${node.x},${node.y})`,
      tabindex: "0",
      role: "button",
      "aria-label": node.label
    });
    group.append(svgEl("circle", { r: getNodeRadius(node) }));
    if (shouldLabelNode(node, graph.nodes.length, selected)) {
      group.append(svgEl("text", { x: getNodeRadius(node) + 5, y: 4 }, truncateLabel(node.label, selected ? 32 : 18)));
    }
    group.addEventListener("click", () => selectEntity(node.id));
    group.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") selectEntity(node.id);
    });
    nodeLayer.append(group);
  }

  viewportLayer.append(linkLayer, nodeLayer);
  el.networkGraph.append(viewportLayer);
  applyGraphViewport();
}

function handleGraphWheel(event) {
  if (!state.graph.nodes.length) return;
  event.preventDefault();
  const point = getSvgPoint(event);
  const zoomAmount = Math.exp(-event.deltaY * 0.001);
  zoomGraphAt(point, zoomAmount);
}

function startGraphPan(event) {
  if (!state.graph.nodes.length || event.button !== 0) return;
  if (event.target.closest?.(".graph-node") || event.target.closest?.(".graph-controls")) return;
  graphPointer.id = event.pointerId;
  graphPointer.startClientX = event.clientX;
  graphPointer.startClientY = event.clientY;
  graphPointer.startX = state.graphViewport.x;
  graphPointer.startY = state.graphViewport.y;
  el.networkGraph.classList.add("is-panning");
  el.networkGraph.setPointerCapture(event.pointerId);
}

function moveGraphPan(event) {
  if (graphPointer.id !== event.pointerId) return;
  state.graphViewport.x = graphPointer.startX + event.clientX - graphPointer.startClientX;
  state.graphViewport.y = graphPointer.startY + event.clientY - graphPointer.startClientY;
  applyGraphViewport();
}

function endGraphPan(event) {
  if (graphPointer.id !== event.pointerId) return;
  graphPointer.id = null;
  el.networkGraph.classList.remove("is-panning");
  if (el.networkGraph.hasPointerCapture?.(event.pointerId)) {
    el.networkGraph.releasePointerCapture(event.pointerId);
  }
}

function zoomGraphAt(point, scaleFactor) {
  if (!state.graph.nodes.length) return;
  const viewport = state.graphViewport;
  const nextScale = clamp(viewport.scale * scaleFactor, GRAPH_MIN_ZOOM, GRAPH_MAX_ZOOM);
  if (nextScale === viewport.scale) return;

  const graphX = (point.x - viewport.x) / viewport.scale;
  const graphY = (point.y - viewport.y) / viewport.scale;
  viewport.x = point.x - graphX * nextScale;
  viewport.y = point.y - graphY * nextScale;
  viewport.scale = nextScale;
  applyGraphViewport();
}

function resetGraphViewport() {
  state.graphViewport = { x: 0, y: 0, scale: 1 };
  applyGraphViewport();
}

function applyGraphViewport() {
  const viewportLayer = el.networkGraph.querySelector(".graph-viewport");
  if (!viewportLayer) return;
  const { x, y, scale } = state.graphViewport;
  viewportLayer.setAttribute("transform", `matrix(${scale} 0 0 ${scale} ${x} ${y})`);
}

function getGraphCenterPoint() {
  const bounds = el.networkGraph.getBoundingClientRect();
  return {
    x: Math.max(1, bounds.width || 820) / 2,
    y: Math.max(1, bounds.height || 620) / 2
  };
}

function getSvgPoint(event) {
  const bounds = el.networkGraph.getBoundingClientRect();
  const viewBox = el.networkGraph.viewBox.baseVal;
  return {
    x: ((event.clientX - bounds.left) / Math.max(1, bounds.width)) * viewBox.width,
    y: ((event.clientY - bounds.top) / Math.max(1, bounds.height)) * viewBox.height
  };
}

function layoutGraph(nodes, links, width, height) {
  const nodeMap = new Map(nodes.map((node) => [node.id, node]));
  const centerX = width / 2;
  const centerY = height / 2;
  const typeTargets = {
    owner: { x: width * 0.18, y: height * 0.45 },
    firm: { x: width * 0.48, y: height * 0.48 },
    investor: { x: width * 0.74, y: height * 0.34 },
    company: { x: width * 0.72, y: height * 0.68 }
  };

  nodes.forEach((node, index) => {
    const hash = hashCode(node.id);
    const angle = ((hash % 360) / 360) * Math.PI * 2;
    const radius = 80 + (hash % 220);
    const target = typeTargets[node.type] || { x: centerX, y: centerY };
    node.x = target.x + Math.cos(angle) * radius * 0.38 + ((index % 7) - 3) * 9;
    node.y = target.y + Math.sin(angle) * radius * 0.38 + ((index % 5) - 2) * 9;
    node.vx = 0;
    node.vy = 0;
  });

  const iterations = nodes.length > 280 ? 70 : 110;
  for (let i = 0; i < iterations; i += 1) {
    for (let a = 0; a < nodes.length; a += 1) {
      for (let b = a + 1; b < nodes.length; b += 1) {
        const nodeA = nodes[a];
        const nodeB = nodes[b];
        let dx = nodeB.x - nodeA.x;
        let dy = nodeB.y - nodeA.y;
        let distanceSq = dx * dx + dy * dy;
        if (distanceSq < 1) {
          dx = 1;
          dy = 1;
          distanceSq = 2;
        }
        const force = Math.min(6.8, 950 / distanceSq);
        const distance = Math.sqrt(distanceSq);
        const fx = (dx / distance) * force;
        const fy = (dy / distance) * force;
        nodeA.vx -= fx;
        nodeA.vy -= fy;
        nodeB.vx += fx;
        nodeB.vy += fy;
      }
    }

    for (const link of links) {
      const source = nodeMap.get(link.source);
      const target = nodeMap.get(link.target);
      if (!source || !target) continue;
      const preferred = link.type === "covers" ? 120 : link.type === "portfolio" ? 135 : 78;
      const dx = target.x - source.x;
      const dy = target.y - source.y;
      const distance = Math.max(1, Math.sqrt(dx * dx + dy * dy));
      const pull = (distance - preferred) * 0.006 * link.weight;
      const fx = (dx / distance) * pull;
      const fy = (dy / distance) * pull;
      source.vx += fx;
      source.vy += fy;
      target.vx -= fx;
      target.vy -= fy;
    }

    for (const node of nodes) {
      const target = typeTargets[node.type] || { x: centerX, y: centerY };
      node.vx += (target.x - node.x) * 0.004;
      node.vy += (target.y - node.y) * 0.004;
      if (node.id === state.selectedId) {
        node.vx += (centerX - node.x) * 0.018;
        node.vy += (centerY - node.y) * 0.018;
      }
      node.vx *= 0.74;
      node.vy *= 0.74;
      node.x = clamp(node.x + node.vx, 26, width - 110);
      node.y = clamp(node.y + node.vy, 26, height - 26);
    }
  }
}

function getNodeRadius(node) {
  if (node.type === "firm") return node.firm?.highPriority ? 9 : 7;
  if (node.type === "owner") return 8;
  if (node.type === "company") return 6.5;
  return 5.5;
}

function shouldLabelNode(node, count, selected) {
  if (selected) return true;
  if (node.type === "owner") return true;
  if (node.type === "firm" && (count < 230 || node.firm?.highPriority || node.firm?.relationshipPriority === 1)) return true;
  if (node.type === "company" && count < 170) return true;
  return false;
}

function getNeighborIds(nodeId) {
  const ids = new Set();
  if (!nodeId) return ids;
  for (const link of graphIndex.links) {
    if (link.source === nodeId) ids.add(link.target);
    if (link.target === nodeId) ids.add(link.source);
  }
  return ids;
}

function selectEntity(id) {
  state.selectedId = id;
  el.searchResults.classList.remove("open");
  const node = graphIndex.nodes.get(id);
  if (node?.type === "firm") {
    el.logFirm.value = node.firm.name;
    el.refreshFirmSelect.value = node.firm.name;
  }
  if (node?.type === "owner") el.logOwner.value = node.owner;
  state.scope = state.scope === "all" || state.scope === "owner" ? state.scope : "selected";
  renderGraph();
  renderDetails();
}

function renderDetails() {
  const node = state.selectedId ? graphIndex.nodes.get(state.selectedId) : null;
  if (!node) {
    const topFirms = getPriorityFirms().slice(0, 8);
    el.detailContent.innerHTML = `
      <div class="entity-header">
        <div>
          <h2>Priority Firms</h2>
          <p class="subtle">${topFirms.length} of ${getPriorityFirms().length} priority names</p>
        </div>
        <span class="entity-type">Start</span>
      </div>
      <div class="detail-section list-block">
        ${topFirms.map((firm) => firmButtonRow(firm, priorityText(firm))).join("")}
      </div>
    `;
    return;
  }
  if (node.type === "firm") renderFirmDetails(node.firm);
  if (node.type === "owner") renderOwnerDetails(node.owner);
  if (node.type === "company") renderCompanyDetails(node.company);
  if (node.type === "investor") renderInvestorDetails(node);
}

function renderFirmDetails(firm) {
  const touches = getFirmTouches(firm.name);
  const lastTouch = touches[0];
  const stale = getStaleness(firm.name);
  el.detailContent.innerHTML = `
    <div class="entity-header">
      <div>
        <h2>${escapeHtml(firm.name)}</h2>
        <p class="subtle">${escapeHtml([firm.types.join(" / "), firm.locations.join(" / ")].filter(Boolean).join(" | ") || "No type or location")}</p>
      </div>
      <span class="entity-type">Firm</span>
    </div>
    <div class="detail-section">
      <div class="chip-list">
        ${firm.highPriority ? `<span class="chip priority-chip">Firmwide priority</span>` : ""}
        ${firm.relationshipPriority ? `<span class="chip">Relationship ${firm.relationshipPriority}</span>` : ""}
        ${firm.strategicPriority ? `<span class="chip">Strategic ${firm.strategicPriority}</span>` : ""}
        <span class="chip">${escapeHtml(stale.label)}</span>
      </div>
    </div>
    <div class="detail-section">
      <label>Owners</label>
      <div class="chip-list">${chips(firm.owners, "owner")}</div>
    </div>
    <div class="detail-section">
      <label>Relevant investors</label>
      <div class="chip-list">${chips(firm.contacts, "investor", firm.name)}</div>
    </div>
    <div class="detail-section">
      <label>Portfolio signals</label>
      <div class="chip-list">${chips(firm.portfolio, "company") || `<div class="empty-copy">No portfolio companies seeded.</div>`}</div>
    </div>
    <div class="detail-section">
      <label>Last touch</label>
      ${lastTouch ? logMarkup(lastTouch) : `<div class="empty-copy">No touch logged in this browser.</div>`}
    </div>
  `;
}

function renderOwnerDetails(owner) {
  const ownerFirms = graphIndex.ownerToFirms.get(owner) || [];
  const priorityOwned = ownerFirms.filter((firm) => firm.highPriority || firm.relationshipPriority === 1 || firm.strategicPriority === 1);
  el.detailContent.innerHTML = `
    <div class="entity-header">
      <div>
        <h2>${escapeHtml(owner)}</h2>
        <p class="subtle">${ownerFirms.length} covered firms, ${priorityOwned.length} priority</p>
      </div>
      <span class="entity-type">Owner</span>
    </div>
    <div class="detail-section list-block">
      ${ownerFirms.sort(sortFirmPriority).map((firm) => firmButtonRow(firm, priorityText(firm))).join("")}
    </div>
  `;
}

function renderCompanyDetails(company) {
  const relatedFirms = findCompanyFirms(company);
  const paths = relatedFirms.flatMap((firm) => warmIntroPathsForFirm(firm, company));
  el.detailContent.innerHTML = `
    <div class="entity-header">
      <div>
        <h2>${escapeHtml(company)}</h2>
        <p class="subtle">${relatedFirms.length} known investor ${relatedFirms.length === 1 ? "firm" : "firms"}</p>
      </div>
      <span class="entity-type">Company</span>
    </div>
    <div class="detail-section">
      <label>Investor firms</label>
      <div class="chip-list">${chips(relatedFirms.map((firm) => firm.name), "firm")}</div>
    </div>
    <div class="detail-section">
      <label>Warm paths</label>
      <div class="path-list">${paths.map(pathMarkup).join("") || `<div class="empty-copy">No owner path in the seed data.</div>`}</div>
    </div>
  `;
}

function renderInvestorDetails(node) {
  const firm = firms.find((item) => item.name === node.firmName);
  el.detailContent.innerHTML = `
    <div class="entity-header">
      <div>
        <h2>${escapeHtml(node.investor)}</h2>
        <p class="subtle">${escapeHtml(node.firmName || "Unknown firm")}</p>
      </div>
      <span class="entity-type">Investor</span>
    </div>
    ${firm ? `
      <div class="detail-section">
        <label>Firm owners</label>
        <div class="chip-list">${chips(firm.owners, "owner")}</div>
      </div>
      <div class="detail-section">
        <label>Portfolio signals</label>
        <div class="chip-list">${chips(firm.portfolio, "company") || `<div class="empty-copy">No portfolio companies seeded.</div>`}</div>
      </div>
    ` : ""}
  `;
}

function chips(items, type, firmName = "") {
  return (items || []).map((item) => {
    const id = nodeIdFor(type, item, firmName);
    return `<button class="chip" data-select-id="${escapeHtml(id)}">${escapeHtml(item)}</button>`;
  }).join("");
}

function nodeIdFor(type, label, firmName = "") {
  if (type === "firm") return `firm:${slug(label)}`;
  if (type === "owner") return `owner:${slug(label)}`;
  if (type === "company") return `company:${slug(label)}`;
  if (type === "investor") return `investor:${slug(label)}:${slug(firmName)}`;
  return "";
}

document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-select-id]");
  if (target) selectEntity(target.dataset.selectId);
});

function firmButtonRow(firm, meta) {
  return `
    <div class="list-row">
      <strong>${escapeHtml(firm.name)}</strong>
      <span class="subtle">${escapeHtml(meta || "")}</span>
      <button data-select-id="${escapeHtml(firm.id)}">Open</button>
    </div>
  `;
}

function priorityText(firm) {
  const parts = [];
  if (firm.highPriority) parts.push("firmwide");
  if (firm.relationshipPriority) parts.push(`rel ${firm.relationshipPriority}`);
  if (firm.strategicPriority) parts.push(`strat ${firm.strategicPriority}`);
  return parts.join(" / ") || "unranked";
}

function renderCoverage() {
  const ownerFilter = el.coverageOwnerFilter.value || "all";
  const typeFilter = el.coverageTypeFilter.value || "all";
  const filtered = firms.filter((firm) => {
    const ownerMatch = ownerFilter === "all" || firm.owners.includes(ownerFilter);
    const typeMatch = typeFilter === "all" || firm.types.includes(typeFilter);
    return ownerMatch && typeMatch;
  });
  const priority = filtered.filter((firm) => firm.highPriority || firm.relationshipPriority === 1 || firm.strategicPriority === 1);
  const noOwner = filtered.filter((firm) => !firm.owners.length);
  const noPortfolio = filtered.filter((firm) => !firm.portfolio.length);
  const stale = filtered.filter((firm) => getStaleness(firm.name).isStale);

  el.metricGrid.innerHTML = [
    metricCard(filtered.length, "Firms"),
    metricCard(priority.length, "Priority"),
    metricCard(noOwner.length, "No owner"),
    metricCard(stale.length, "Stale")
  ].join("");

  const owners = getOwners();
  const ownerCounts = owners.map((owner) => ({
    label: owner,
    value: firms.filter((firm) => firm.owners.includes(owner)).length
  }));
  const maxOwner = Math.max(1, ...ownerCounts.map((item) => item.value));
  const priorityRows = priority.sort(sortFirmPriority).slice(0, 18).map((firm) => firmButtonRow(firm, `${firm.owners.join(", ") || "No owner"} | ${priorityText(firm)}`)).join("");
  const staleRows = stale.sort(sortByStaleness).slice(0, 18).map((firm) => firmButtonRow(firm, getStaleness(firm.name).label)).join("");
  const gapRows = [...noOwner, ...noPortfolio].filter(uniqueFirm).slice(0, 18).map((firm) => {
    const gaps = [!firm.owners.length ? "owner" : "", !firm.portfolio.length ? "portfolio" : ""].filter(Boolean).join(", ");
    return firmButtonRow(firm, gaps);
  }).join("");

  el.coverageGrid.innerHTML = `
    <article class="coverage-card">
      <header><h3>Owner Load</h3><span class="subtle">${owners.length} owners</span></header>
      <div class="mini-bars">
        ${ownerCounts.map((item) => miniBar(item.label, item.value, maxOwner)).join("")}
      </div>
    </article>
    <article class="coverage-card">
      <header><h3>Priority Names</h3><span class="subtle">${priority.length} firms</span></header>
      <div class="list-block">${priorityRows || `<div class="empty-copy">No priority firms match.</div>`}</div>
    </article>
    <article class="coverage-card">
      <header><h3>Freshness Gaps</h3><span class="subtle">${stale.length} firms</span></header>
      <div class="list-block">${staleRows || `<div class="empty-copy">No stale firms match.</div>`}</div>
    </article>
    <article class="coverage-card">
      <header><h3>Data Gaps</h3><span class="subtle">${noOwner.length + noPortfolio.length} gaps</span></header>
      <div class="list-block">${gapRows || `<div class="empty-copy">No gaps match.</div>`}</div>
    </article>
  `;
}

function metricCard(value, label) {
  return `<div class="metric-card"><strong>${value}</strong><span>${escapeHtml(label)}</span></div>`;
}

function miniBar(label, value, max) {
  const width = Math.round((value / max) * 100);
  return `
    <div class="mini-bar">
      <span>${escapeHtml(label)}</span>
      <div class="bar-track"><div class="bar-fill" style="width:${width}%"></div></div>
      <strong>${value}</strong>
    </div>
  `;
}

function uniqueFirm(firm, index, array) {
  return array.findIndex((item) => item.id === firm.id) === index;
}

function getPriorityFirms() {
  return firms.filter((firm) => firm.highPriority || firm.relationshipPriority === 1 || firm.strategicPriority === 1).sort(sortFirmPriority);
}

function sortFirmPriority(a, b) {
  const aScore = priorityScore(a);
  const bScore = priorityScore(b);
  if (aScore !== bScore) return bScore - aScore;
  return a.name.localeCompare(b.name);
}

function priorityScore(firm) {
  return (firm.highPriority ? 10 : 0) + (4 - (firm.relationshipPriority || 4)) + (4 - (firm.strategicPriority || 4));
}

function sortByStaleness(a, b) {
  return getStaleness(b.name).days - getStaleness(a.name).days;
}

function getStaleness(firmName) {
  const touches = getFirmTouches(firmName);
  if (!touches.length) return { isStale: true, days: 9999, label: "No touch logged" };
  const last = new Date(touches[0].date);
  const days = Math.floor((Date.now() - last.getTime()) / 86400000);
  return { isStale: days > TOUCH_STALE_DAYS, days, label: `${days} days ago` };
}

function getFirmTouches(firmName) {
  return state.store.interactions
    .filter((touch) => touch.firm === firmName)
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}

async function saveTouch() {
  const touch = {
    owner: el.logOwner.value,
    firm: el.logFirm.value,
    type: el.logType.value,
    date: el.logDate.value || new Date().toISOString().slice(0, 10),
    note: el.logNote.value.trim()
  };
  if (!touch.owner || !touch.firm) return;
  el.saveLogButton.disabled = true;
  try {
    await apiJson("/api/interactions", {
      method: "POST",
      body: touch
    });
    await refreshBootstrap();
  } catch {
    state.store.interactions.unshift({ ...touch, id: `touch:${Date.now()}` });
    state.store.interactions = state.store.interactions.slice(0, 250);
    saveStore();
  } finally {
    el.saveLogButton.disabled = false;
  }
  el.logNote.value = "";
  renderRecentLogs();
  renderCoverage();
  renderDetails();
}

function renderRecentLogs() {
  const recent = state.store.interactions.slice(0, 5);
  el.recentLogs.innerHTML = recent.map(logMarkup).join("") || `<div class="empty-copy">No touches logged.</div>`;
}

function logMarkup(touch) {
  return `
    <div class="log-item">
      <strong>${escapeHtml(touch.firm)} - ${escapeHtml(touch.type)}</strong>
      <span>${escapeHtml(touch.owner)} | ${escapeHtml(touch.date)}</span>
      ${touch.note ? `<p>${escapeHtml(touch.note)}</p>` : ""}
    </div>
  `;
}

function renderSearchResults() {
  const query = normalize(el.entitySearch.value);
  if (!query) {
    el.searchResults.classList.remove("open");
    el.searchResults.innerHTML = "";
    return;
  }
  const results = searchEntities(query).slice(0, 12);
  el.searchResults.innerHTML = results.map((node) => `
    <button class="search-result" data-select-id="${escapeHtml(node.id)}">
      <strong>${escapeHtml(node.label)}</strong>
      <span class="entity-type">${escapeHtml(node.type)}</span>
    </button>
  `).join("") || `<div class="empty-copy">No matches.</div>`;
  el.searchResults.classList.add("open");
}

function searchEntities(query) {
  return [...graphIndex.nodes.values()]
    .map((node) => ({ node, score: matchScore(normalize(node.label), query) }))
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score || a.node.label.localeCompare(b.node.label))
    .map((item) => item.node);
}

function matchScore(label, query) {
  if (label === query) return 100;
  if (label.startsWith(query)) return 80;
  if (label.includes(query)) return 55;
  const tokens = query.split(" ");
  const matched = tokens.filter((token) => token && label.includes(token)).length;
  return matched ? matched * 12 : 0;
}

async function diffPortfolio() {
  const firm = firms.find((item) => item.name === el.refreshFirmSelect.value);
  if (!firm) return;
  try {
    const result = await apiJson("/api/portfolio-refresh/diff", {
      method: "POST",
      body: {
        firmName: firm.name,
        text: el.portfolioPaste.value
      }
    });
    state.portfolioDraft = result.netNew || [];
    state.knownDraft = result.knownElsewhere || [];
    renderPortfolioDiff();
    return;
  } catch {
    // Keep the static-file prototype usable when the server is not running.
  }
  const candidates = extractPortfolioCandidates(el.portfolioPaste.value);
  const currentKeys = new Set(firm.portfolio.map(normalize));
  const allCompanyMap = new Map();
  for (const [company, investorFirms] of graphIndex.companyToFirms.entries()) {
    allCompanyMap.set(normalize(company), investorFirms);
  }
  state.portfolioDraft = candidates.filter((name) => !currentKeys.has(normalize(name)));
  state.knownDraft = state.portfolioDraft
    .filter((name) => allCompanyMap.has(normalize(name)))
    .map((name) => ({ name, firms: allCompanyMap.get(normalize(name)).map((item) => item.name) }));

  renderPortfolioDiff();
}

function renderPortfolioDiff() {
  el.portfolioDiff.innerHTML = state.portfolioDraft.map((name, index) => `
    <label class="chip">
      <input type="checkbox" data-draft-index="${index}" checked />
      ${escapeHtml(name)}
    </label>
  `).join("") || `<div class="empty-copy">No net-new companies detected.</div>`;
  el.knownElsewhere.innerHTML = state.knownDraft.length
    ? `<strong>Known elsewhere:</strong> ${state.knownDraft.map((item) => `${escapeHtml(item.name)} (${escapeHtml(item.firms.join(", "))})`).join("; ")}`
    : "";
  el.addPortfolioButton.disabled = !state.portfolioDraft.length;
}

function extractPortfolioCandidates(text) {
  const boilerplate = new Set([
    "portfolio",
    "companies",
    "company",
    "investments",
    "team",
    "news",
    "about",
    "contact",
    "current",
    "realized",
    "selected",
    "view all",
    "learn more"
  ]);
  return dedupeByName(
    text
      .replace(/https?:\/\/\S+/g, " ")
      .split(/[\n\r\t;,]+/)
      .map((part) => part.replace(/\s{2,}/g, " ").trim())
      .map((part) => part.replace(/^[\-\u2022*]\s*/, "").trim())
      .filter((part) => part.length >= 2 && part.length <= 64)
      .filter((part) => !boilerplate.has(normalize(part)))
      .filter((part) => /[a-zA-Z]/.test(part))
      .filter((part) => !/^(www\.|copyright|privacy|terms)/i.test(part))
  );
}

async function addSelectedPortfolio() {
  const firmName = el.refreshFirmSelect.value;
  const selected = [...document.querySelectorAll("[data-draft-index]:checked")]
    .map((input) => state.portfolioDraft[Number(input.dataset.draftIndex)])
    .filter(Boolean);
  if (!selected.length) return;
  try {
    await apiJson("/api/portfolio-refresh/add", {
      method: "POST",
      body: {
        firmName,
        companies: selected,
        sourceUrl: el.sourceUrl.value.trim()
      }
    });
    await refreshBootstrap();
    hydrateControls();
    el.refreshFirmSelect.value = firmName;
    state.portfolioDraft = [];
    state.knownDraft = [];
    el.portfolioDiff.innerHTML = `<div class="empty-copy">Added ${selected.length} companies to ${escapeHtml(firmName)}.</div>`;
    el.knownElsewhere.innerHTML = "";
    el.addPortfolioButton.disabled = true;
    renderAll();
    return;
  } catch {
    // Static-file fallback.
  }
  if (!state.store.portfolioAdditions[firmName]) state.store.portfolioAdditions[firmName] = [];
  const existing = new Set(state.store.portfolioAdditions[firmName].map((item) => normalize(item.name)));
  for (const name of selected) {
    if (!existing.has(normalize(name))) {
      state.store.portfolioAdditions[firmName].push({
        name,
        sourceUrl: el.sourceUrl.value.trim(),
        addedAt: new Date().toISOString()
      });
    }
  }
  saveStore();
  firms = mergeLocalPortfolio(seedFirms, state.store.portfolioAdditions);
  graphIndex = buildGraphIndex(firms);
  hydrateControls();
  el.refreshFirmSelect.value = firmName;
  state.portfolioDraft = [];
  state.knownDraft = [];
  el.portfolioDiff.innerHTML = `<div class="empty-copy">Added ${selected.length} companies to ${escapeHtml(firmName)}.</div>`;
  el.knownElsewhere.innerHTML = "";
  el.addPortfolioButton.disabled = true;
  renderAll();
}

async function runQuestion() {
  const question = el.questionInput.value.trim();
  if (!question) return;
  renderAnswer({ title: "Answer", body: ["Querying the graph..."], paths: [] });
  try {
    const answer = await apiJson("/api/ask", {
      method: "POST",
      body: { question }
    });
    renderAnswer(answer);
    return;
  } catch {
    // Static-file fallback.
  }
  const normalized = normalize(question);
  let answer;
  const company = findMentionedCompany(normalized);
  const firm = findMentionedFirm(normalized);
  const owner = findMentionedOwner(normalized);

  if (/(warm|intro|introduction|get in touch|reach)/.test(normalized) && company) {
    answer = answerWarmIntro(company);
  } else if (/(who|which firms|invested|investor|co investor|co-investor)/.test(normalized) && company) {
    answer = answerCompanyInvestors(company);
  } else if (/(portfolio|companies|investments)/.test(normalized) && firm) {
    answer = answerFirmPortfolio(firm);
  } else if (/(cover|coverage|connectivity|firms|know|knows)/.test(normalized) && owner) {
    answer = answerOwnerCoverage(owner);
  } else if (/(priority|highest priority|top|firmwide)/.test(normalized)) {
    answer = answerPriorityFirms();
  } else if (/(stale|recent touch|fresh|freshness|no recent)/.test(normalized)) {
    answer = answerFreshness();
  } else if (firm) {
    answer = answerFirmPortfolio(firm);
  } else if (company) {
    answer = answerCompanyInvestors(company);
  } else if (owner) {
    answer = answerOwnerCoverage(owner);
  } else {
    answer = {
      title: "No Entity Matched",
      body: [`I could not match a firm, company, or owner in the graph.`],
      paths: []
    };
  }

  renderAnswer(answer);
}

function findMentionedCompany(normalizedQuestion) {
  return findMention(normalizedQuestion, [...graphIndex.companyToFirms.keys()]);
}

function findMentionedFirm(normalizedQuestion) {
  return findMention(normalizedQuestion, firms.map((firm) => firm.name));
}

function findMentionedOwner(normalizedQuestion) {
  return findMention(normalizedQuestion, getOwners());
}

function findMention(normalizedQuestion, candidates) {
  const scored = candidates
    .map((candidate) => {
      const key = normalize(candidate);
      const score = normalizedQuestion.includes(key) ? key.length : 0;
      return { candidate, score };
    })
    .filter((item) => item.score > 0)
    .sort((a, b) => b.score - a.score);
  return scored[0]?.candidate || null;
}

function answerWarmIntro(company) {
  const relatedFirms = findCompanyFirms(company).sort(sortFirmPriority);
  const paths = relatedFirms.flatMap((firm) => warmIntroPathsForFirm(firm, company));
  return {
    title: `Warm Paths to ${company}`,
    body: paths.length
      ? [`${paths.length} owner-to-firm paths are available through ${relatedFirms.length} investor firms.`]
      : [`${relatedFirms.length} investor firms are linked to ${company}, but no BPC owner is assigned in the seed data.`],
    paths
  };
}

function answerCompanyInvestors(company) {
  const relatedFirms = findCompanyFirms(company).sort(sortFirmPriority);
  return {
    title: `Known Investors in ${company}`,
    body: relatedFirms.length
      ? relatedFirms.map((firm) => `${firm.name}: ${firm.contacts.join(", ") || "no named contact"}; owners ${firm.owners.join(", ") || "unassigned"}.`)
      : [`No known investor firms are linked to ${company}.`],
    paths: relatedFirms.flatMap((firm) => warmIntroPathsForFirm(firm, company))
  };
}

function answerFirmPortfolio(firmName) {
  const firm = firms.find((item) => item.name === firmName);
  return {
    title: `${firmName} Portfolio Signals`,
    body: firm?.portfolio.length
      ? [`${firm.portfolio.join(", ")}`]
      : [`No portfolio companies are seeded for ${firmName}.`],
    paths: []
  };
}

function answerOwnerCoverage(owner) {
  const ownerFirms = (graphIndex.ownerToFirms.get(owner) || []).sort(sortFirmPriority);
  return {
    title: `${owner} Coverage`,
    body: ownerFirms.length
      ? ownerFirms.map((firm) => `${firm.name}: ${priorityText(firm)}; ${firm.contacts.length} named contacts.`)
      : [`No firms are assigned to ${owner}.`],
    paths: []
  };
}

function answerPriorityFirms() {
  const top = getPriorityFirms().slice(0, 10);
  return {
    title: "Top Priority Firms",
    body: top.map((firm) => `${firm.name}: ${priorityText(firm)}; owners ${firm.owners.join(", ") || "unassigned"}.`),
    paths: []
  };
}

function answerFreshness() {
  const stale = getPriorityFirms().filter((firm) => getStaleness(firm.name).isStale).slice(0, 15);
  return {
    title: "Priority Freshness Gaps",
    body: stale.map((firm) => `${firm.name}: ${getStaleness(firm.name).label}; owners ${firm.owners.join(", ") || "unassigned"}.`),
    paths: []
  };
}

function findCompanyFirms(company) {
  const key = normalize(company);
  return [...graphIndex.companyToFirms.entries()]
    .filter(([name]) => normalize(name) === key)
    .flatMap(([, relatedFirms]) => relatedFirms);
}

function warmIntroPathsForFirm(firm, company) {
  const contacts = firm.contacts.length ? firm.contacts : ["Relevant investor TBD"];
  return firm.owners.flatMap((owner) => contacts.slice(0, 3).map((contact) => [owner, firm.name, contact, company]));
}

function renderAnswerStart() {
  el.answerPanel.innerHTML = `
    <h3>Answer</h3>
    <div class="empty-copy">Run a graph query to see paths and supporting records.</div>
  `;
}

function renderAnswer(answer) {
  const body = Array.isArray(answer.body) ? answer.body : [answer.body || ""];
  el.answerPanel.innerHTML = `
    <h3>${escapeHtml(answer.title)}</h3>
    ${answer.narrative ? `<div class="answer-text"><p>${escapeHtml(answer.narrative)}</p></div>` : ""}
    <div class="answer-text">
      ${body.map((line) => `<p>${escapeHtml(line)}</p>`).join("")}
    </div>
    ${answer.paths?.length ? `<div class="path-list">${answer.paths.slice(0, 18).map(pathMarkup).join("")}</div>` : ""}
    ${answer.llm?.enabled === false ? `<p class="subtle">${escapeHtml(answer.llm.reason)}</p>` : ""}
  `;
}

function pathMarkup(path) {
  return `
    <div class="path-row">
      ${path.map((part, index) => `
        ${index ? `<span class="path-arrow">to</span>` : ""}
        <span class="chip">${escapeHtml(part)}</span>
      `).join("")}
    </div>
  `;
}

function svgEl(name, attrs = {}, text = "") {
  const node = document.createElementNS("http://www.w3.org/2000/svg", name);
  Object.entries(attrs).forEach(([key, value]) => node.setAttribute(key, value));
  if (text) node.textContent = text;
  return node;
}

function escapeHtml(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function truncateLabel(value, max) {
  const text = String(value || "");
  return text.length > max ? `${text.slice(0, max - 1)}...` : text;
}

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

function hashCode(value) {
  let hash = 0;
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function debounce(fn, wait) {
  let timeout;
  return (...args) => {
    window.clearTimeout(timeout);
    timeout = window.setTimeout(() => fn(...args), wait);
  };
}

init();
