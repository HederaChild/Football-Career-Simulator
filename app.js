const SAVE_KEY = "full-time-life-save-v21";
const LEGACY_SAVE_KEYS = Array.from({ length: 21 }, (_, index) => `full-time-life-save-v${index + 1}`)
  .filter((key) => key !== SAVE_KEY);
const RANKING_NOTE = "FIFA/Coca-Cola Men's World Ranking baseline: 1 April 2026.";
const GAME_TITLE = "Football Career Simulator by Jeff Adkins";
const GAME_START_DATE = "2026-07-01";

const updateHistory = [
  {
    version: "v22",
    title: "One-slot save and load",
    date: "2026-05-23",
    notes: [
      "Added a visible one-career save slot on the start screen.",
      "Added Load career beside Save career in the in-game save controls.",
      "Changed startup so players choose whether to load the one saved career.",
      "Saved career cards now show player, club, stage, game date, and last saved time.",
      "Kept the game limited to one browser career for now."
    ]
  },
  {
    version: "v21",
    title: "Aligned minutes, varied names, and mobile league filters",
    date: "2026-05-23",
    notes: [
      "Made key highlight minutes respect the player's actual minutes played.",
      "Changed generated player names to use club-specific seeds so clubs stop sharing the same name patterns.",
      "Grouped domestic leagues by country before showing that nation's tiers.",
      "Compressed league and squad tables on mobile so phone users do not need to zoom out."
    ]
  },
  {
    version: "v20",
    title: "Better squad names and real match stats",
    date: "2026-05-23",
    notes: [
      "Expanded player name pools so squads no longer repeat the same few names.",
      "Changed league nationality logic so around 60% of generated players come from the club's country.",
      "Added team match stats after games: possession, shots, passes, corners, fouls, and cards.",
      "Added user match stats under the rating, including minutes, passes, key passes, distance covered, and role stats."
    ]
  },
  {
    version: "v19",
    title: "Daily training, manager plans, and activities",
    date: "2026-05-23",
    notes: [
      "Changed weekly focus into daily activities that advance one day at a time.",
      "Managers now have training styles, strictness, weekly session counts, and focus areas.",
      "Skipping training can reduce loneliness but hurts trust and selection, especially under strict managers.",
      "Added an Activities tab where wallet money can be invested into risk-based opportunities."
    ]
  },
  {
    version: "v18",
    title: "Wallet, agent fees, and match incidents",
    date: "2026-05-23",
    notes: [
      "Added scorers, assists, yellow cards, and red cards under played scoreboard matches.",
      "Added a wallet overview on the dashboard so weekly salary, agent fees, and savings matter.",
      "Reworked Agents & Contracts to show current contract terms and always-available agent choices.",
      "Changed agent stats to beneficial traits with salary-fee percentages instead of a pressure stance."
    ]
  },
  {
    version: "v17",
    title: "Real scorelines, tables, and league stats",
    date: "2026-05-22",
    notes: [
      "Changed league tables to update from actual scheduled scorelines so GF, GA, and GD tally correctly.",
      "Added player match scorelines and league matchday scoreboards.",
      "Split the Leagues page into Table & Scores, Fixtures, and Stats views.",
      "Reduced stat growth so top scorers cannot jump to unrealistic totals after one matchday."
    ]
  },
  {
    version: "v16",
    title: "Mobile start reliability",
    date: "2026-05-21",
    notes: [
      "Made mobile taps on Start academy offers use click, pointer, touch, and form submit paths.",
      "Made browser save failures non-blocking so phones can still advance to academy offers."
    ]
  },
  {
    version: "v15",
    title: "Start button compatibility fix",
    date: "2026-05-21",
    notes: [
      "Changed Start academy offers into a normal form submit as well as a click action.",
      "Made ?new=1 clear the save once, then remove itself from the URL so reloads do not confuse the career state."
    ]
  },
  {
    version: "v14",
    title: "Schedule, academy balance, and league stats",
    date: "2026-05-21",
    notes: [
      "Renamed the front page to Football Career Simulator by Jeff Adkins.",
      "Added update history on the start screen and inside the game.",
      "Added an in-game date and Schedule tab with league calendar logic.",
      "Made academy match ratings fairer because academy opponents are closer in age and level.",
      "Changed leaderboards so each league shows its own scorers, assists, cards, and ratings after matches begin."
    ]
  },
  {
    version: "v13",
    title: "Academy start fix",
    date: "2026-05-21",
    notes: [
      "Fixed the Start academy offers button on the public site.",
      "Added a New career button and ?new=1 fresh-start support."
    ]
  },
  {
    version: "v12",
    title: "Multi-tier leagues and highlights",
    date: "2026-05-20",
    notes: [
      "Added lower tiers in more countries so careers can start deeper and climb.",
      "Added post-match key highlights for saves, fouls, passes, goals, assists, and phase-ending moments."
    ]
  },
  {
    version: "v11",
    title: "Long-career realism pass",
    date: "2026-05-20",
    notes: [
      "Slowed academy growth.",
      "Added more logical squad ratings, lower English tiers, and club finance/facility effects."
    ]
  }
];

const attributeGroups = {
  technical: {
    title: "Technical",
    subs: [
      ["touch", "Touch"],
      ["passing", "Passing"],
      ["dribbling", "Dribbling"],
      ["finishing", "Finishing"],
      ["firstTouch", "First touch"]
    ]
  },
  physical: {
    title: "Physical",
    subs: [
      ["pace", "Pace"],
      ["stamina", "Stamina"],
      ["strength", "Strength"],
      ["agility", "Agility"],
      ["jumping", "Jumping"]
    ]
  },
  tactical: {
    title: "Tactical",
    subs: [
      ["positioning", "Positioning"],
      ["vision", "Vision"],
      ["pressing", "Pressing"],
      ["decisions", "Decisions"],
      ["teamwork", "Teamwork"]
    ]
  },
  mentality: {
    title: "Mentality",
    subs: [
      ["composure", "Composure"],
      ["workRate", "Work rate"],
      ["leadership", "Leadership"],
      ["resilience", "Resilience"],
      ["focus", "Focus"]
    ]
  }
};

const nations = [
  { code: "FRA", name: "France", rank: 1 },
  { code: "ESP", name: "Spain", rank: 2 },
  { code: "ARG", name: "Argentina", rank: 3 },
  { code: "ENG", name: "England", rank: 4 },
  { code: "POR", name: "Portugal", rank: 5 },
  { code: "BRA", name: "Brazil", rank: 6 },
  { code: "NED", name: "Netherlands", rank: 7 },
  { code: "MAR", name: "Morocco", rank: 8 },
  { code: "BEL", name: "Belgium", rank: 9 },
  { code: "GER", name: "Germany", rank: 10 },
  { code: "CRO", name: "Croatia", rank: 11 },
  { code: "ITA", name: "Italy", rank: 12 },
  { code: "URU", name: "Uruguay", rank: 13 },
  { code: "COL", name: "Colombia", rank: 14 },
  { code: "MEX", name: "Mexico", rank: 15 },
  { code: "USA", name: "United States", rank: 16 },
  { code: "SUI", name: "Switzerland", rank: 17 },
  { code: "JPN", name: "Japan", rank: 18 },
  { code: "SEN", name: "Senegal", rank: 19 },
  { code: "DEN", name: "Denmark", rank: 20 },
  { code: "IRN", name: "IR Iran", rank: 21 },
  { code: "TUR", name: "Turkiye", rank: 22 },
  { code: "AUT", name: "Austria", rank: 23 },
  { code: "ECU", name: "Ecuador", rank: 24 },
  { code: "KOR", name: "Korea Republic", rank: 25 },
  { code: "NGA", name: "Nigeria", rank: 26 },
  { code: "AUS", name: "Australia", rank: 27 },
  { code: "ALG", name: "Algeria", rank: 28 },
  { code: "SWE", name: "Sweden", rank: 29 },
  { code: "CAN", name: "Canada", rank: 30 },
  { code: "NOR", name: "Norway", rank: 31 },
  { code: "UKR", name: "Ukraine", rank: 32 },
  { code: "POL", name: "Poland", rank: 35 },
  { code: "RUS", name: "Russia", rank: 36 },
  { code: "EGY", name: "Egypt", rank: 37 },
  { code: "PAR", name: "Paraguay", rank: 40 },
  { code: "KSA", name: "Saudi Arabia", rank: 57 },
  { code: "QAT", name: "Qatar", rank: 64 },
  { code: "THA", name: "Thailand", rank: 98 },
  { code: "IND", name: "India", rank: 116 },
  { code: "MAS", name: "Malaysia", rank: 138 },
  { code: "IDN", name: "Indonesia", rank: 137 },
  { code: "PHI", name: "Philippines", rank: 143 },
  { code: "SIN", name: "Singapore", rank: 160 }
];

const positions = {
  Goalkeeper: { short: "GK", x: "12%", y: "50%", technical: 16, physical: 18, tactical: 19, mentality: 18 },
  "Full-back": { short: "FB", x: "32%", y: "24%", technical: 18, physical: 20, tactical: 17, mentality: 17 },
  "Centre-back": { short: "CB", x: "26%", y: "50%", technical: 16, physical: 21, tactical: 19, mentality: 18 },
  Midfielder: { short: "CM", x: "50%", y: "50%", technical: 21, physical: 18, tactical: 20, mentality: 18 },
  Winger: { short: "WG", x: "68%", y: "24%", technical: 21, physical: 20, tactical: 16, mentality: 17 },
  Striker: { short: "ST", x: "80%", y: "50%", technical: 20, physical: 19, tactical: 17, mentality: 18 }
};

const clubCatalog = [
  { name: "London Red", country: "England", city: "London", tier: "English League 1", base: 87, pathway: 66, pressure: 78, standing: 1, revenue: 91, reputation: 90 },
  { name: "Manchester Sky", country: "England", city: "Manchester", tier: "English League 1", base: 90, pathway: 54, pressure: 88, standing: 2, revenue: 96, reputation: 94 },
  { name: "Manchester Red", country: "England", city: "Manchester", tier: "English League 1", base: 82, pathway: 62, pressure: 86, standing: 3, revenue: 94, reputation: 91 },
  { name: "Birmingham Claret", country: "England", city: "Birmingham", tier: "English League 1", base: 78, pathway: 74, pressure: 63, standing: 4, revenue: 74, reputation: 76 },
  { name: "Merseyside Red", country: "England", city: "Liverpool", tier: "English League 1", base: 85, pathway: 58, pressure: 84, standing: 5, revenue: 92, reputation: 91 },
  { name: "South Coast Cherries", country: "England", city: "Bournemouth", tier: "English League 1", base: 73, pathway: 74, pressure: 52, standing: 6, revenue: 62, reputation: 61 },
  { name: "Brighton Coast", country: "England", city: "Brighton", tier: "English League 1", base: 75, pathway: 82, pressure: 55, standing: 7, revenue: 66, reputation: 68 },
  { name: "West London Bees", country: "England", city: "London", tier: "English League 1", base: 71, pathway: 73, pressure: 52, standing: 8, revenue: 61, reputation: 59 },
  { name: "Wearside Red White", country: "England", city: "Sunderland", tier: "English League 1", base: 69, pathway: 78, pressure: 60, standing: 9, revenue: 58, reputation: 63 },
  { name: "London Blue", country: "England", city: "London", tier: "English League 1", base: 78, pathway: 68, pressure: 82, standing: 10, revenue: 90, reputation: 86 },
  { name: "Tyneside Black White", country: "England", city: "Newcastle", tier: "English League 1", base: 77, pathway: 72, pressure: 68, standing: 11, revenue: 78, reputation: 77 },
  { name: "Merseyside Blue", country: "England", city: "Liverpool", tier: "English League 1", base: 70, pathway: 64, pressure: 70, standing: 12, revenue: 67, reputation: 70 },
  { name: "West London Whites", country: "England", city: "London", tier: "English League 1", base: 70, pathway: 66, pressure: 57, standing: 13, revenue: 65, reputation: 64 },
  { name: "Yorkshire White", country: "England", city: "Leeds", tier: "English League 1", base: 69, pathway: 73, pressure: 68, standing: 14, revenue: 63, reputation: 71 },
  { name: "South London Eagles", country: "England", city: "London", tier: "English League 1", base: 70, pathway: 70, pressure: 63, standing: 15, revenue: 65, reputation: 66 },
  { name: "Nottingham Trees", country: "England", city: "Nottingham", tier: "English League 1", base: 69, pathway: 66, pressure: 65, standing: 16, revenue: 60, reputation: 65 },
  { name: "North London Lily", country: "England", city: "London", tier: "English League 1", base: 80, pathway: 66, pressure: 80, standing: 17, revenue: 88, reputation: 86 },
  { name: "East London Irons", country: "England", city: "London", tier: "English League 1", base: 68, pathway: 62, pressure: 73, standing: 18, revenue: 72, reputation: 70 },
  { name: "Lancashire Claret", country: "England", city: "Burnley", tier: "English League 1", base: 62, pathway: 70, pressure: 56, standing: 19, revenue: 50, reputation: 55 },
  { name: "Midlands Wolves", country: "England", city: "Wolverhampton", tier: "English League 1", base: 61, pathway: 65, pressure: 58, standing: 20, revenue: 52, reputation: 57 },
  { name: "Madrid White", country: "Spain", city: "Madrid", tier: "Spanish League", base: 94, pathway: 44, pressure: 90 },
  { name: "Madrid Red White", country: "Spain", city: "Madrid", tier: "Spanish League", base: 86, pathway: 58, pressure: 76 },
  { name: "Catalonia Garnet", country: "Spain", city: "Barcelona", tier: "Spanish League", base: 89, pathway: 57, pressure: 84 },
  { name: "Basque Red White", country: "Spain", city: "Bilbao", tier: "Spanish League", base: 80, pathway: 76, pressure: 62 },
  { name: "Seville Green White", country: "Spain", city: "Seville", tier: "Spanish League", base: 77, pathway: 73, pressure: 58 },
  { name: "Milan Red Black", country: "Italy", city: "Milan", tier: "Italian League", base: 86, pathway: 61, pressure: 76 },
  { name: "Milan Blue Black", country: "Italy", city: "Milan", tier: "Italian League", base: 89, pathway: 56, pressure: 83 },
  { name: "Turin Stripes", country: "Italy", city: "Turin", tier: "Italian League", base: 84, pathway: 59, pressure: 80 },
  { name: "Naples Blue", country: "Italy", city: "Naples", tier: "Italian League", base: 87, pathway: 62, pressure: 81 },
  { name: "Rome Maroon", country: "Italy", city: "Rome", tier: "Italian League", base: 80, pathway: 70, pressure: 66 },
  { name: "Munich Red", country: "Germany", city: "Munich", tier: "German League", base: 92, pathway: 51, pressure: 86 },
  { name: "Dortmund Yellow", country: "Germany", city: "Dortmund", tier: "German League", base: 85, pathway: 75, pressure: 72 },
  { name: "Leverkusen Works", country: "Germany", city: "Leverkusen", tier: "German League", base: 87, pathway: 72, pressure: 68 },
  { name: "Saxony Red", country: "Germany", city: "Leipzig", tier: "German League", base: 82, pathway: 73, pressure: 65 },
  { name: "Paris Capital", country: "France", city: "Paris", tier: "French League", base: 91, pathway: 49, pressure: 88 },
  { name: "Marseille Sky", country: "France", city: "Marseille", tier: "French League", base: 81, pathway: 68, pressure: 74 },
  { name: "Lyon White", country: "France", city: "Lyon", tier: "French League", base: 78, pathway: 75, pressure: 64 },
  { name: "Monaco Red White", country: "France", city: "Monaco", tier: "French League", base: 80, pathway: 72, pressure: 61 },
  { name: "Lisbon Green White", country: "Portugal", city: "Lisbon", tier: "Portuguese League", base: 84, pathway: 74, pressure: 67 },
  { name: "Lisbon Red", country: "Portugal", city: "Lisbon", tier: "Portuguese League", base: 85, pathway: 69, pressure: 73 },
  { name: "Porto Blue", country: "Portugal", city: "Porto", tier: "Portuguese League", base: 83, pathway: 70, pressure: 71 },
  { name: "Amsterdam Red White", country: "Netherlands", city: "Amsterdam", tier: "Dutch League", base: 80, pathway: 82, pressure: 62 },
  { name: "Eindhoven Red White", country: "Netherlands", city: "Eindhoven", tier: "Dutch League", base: 83, pathway: 78, pressure: 66 },
  { name: "Rotterdam Red White", country: "Netherlands", city: "Rotterdam", tier: "Dutch League", base: 79, pathway: 77, pressure: 63 },
  { name: "Seoul Red Black", country: "Korea Republic", city: "Seoul", tier: "Korean League", base: 69, pathway: 82, pressure: 50 },
  { name: "Ulsan Blue", country: "Korea Republic", city: "Ulsan", tier: "Korean League", base: 72, pathway: 79, pressure: 56 },
  { name: "Jeonbuk Green", country: "Korea Republic", city: "Jeonju", tier: "Korean League", base: 71, pathway: 80, pressure: 55 },
  { name: "Kuala Lumpur Stripes", country: "Malaysia", city: "Kuala Lumpur", tier: "Malaysian League", base: 55, pathway: 88, pressure: 42 },
  { name: "Johor Southern", country: "Malaysia", city: "Johor Bahru", tier: "Malaysian League", base: 62, pathway: 77, pressure: 55 },
  { name: "Klang Valley Red", country: "Malaysia", city: "Shah Alam", tier: "Malaysian League", base: 56, pathway: 84, pressure: 44 },
  { name: "Penang Island", country: "Malaysia", city: "George Town", tier: "Malaysian League", base: 53, pathway: 86, pressure: 39 },
  { name: "Tokyo Blue Red", country: "Japan", city: "Tokyo", tier: "Japanese League", base: 72, pathway: 80, pressure: 56 },
  { name: "Yokohama Navy", country: "Japan", city: "Yokohama", tier: "Japanese League", base: 73, pathway: 78, pressure: 58 },
  { name: "Saitama Red", country: "Japan", city: "Saitama", tier: "Japanese League", base: 72, pathway: 76, pressure: 60 },
  { name: "Rio Red Black", country: "Brazil", city: "Rio de Janeiro", tier: "Brazilian League", base: 80, pathway: 82, pressure: 69 },
  { name: "Sao Paulo Green", country: "Brazil", city: "Sao Paulo", tier: "Brazilian League", base: 78, pathway: 82, pressure: 66 },
  { name: "Buenos Aires Blue Gold", country: "Argentina", city: "Buenos Aires", tier: "Argentine League", base: 80, pathway: 83, pressure: 72 },
  { name: "Buenos Aires Red White", country: "Argentina", city: "Buenos Aires", tier: "Argentine League", base: 79, pathway: 83, pressure: 70 }
];

const englishLowerPyramid = [
  ["Coventry Sky", "Coventry", "English League 2", 72, 78, 54, 1, 56, 63],
  ["Ipswich Tractor", "Ipswich", "English League 2", 71, 76, 56, 2, 58, 66],
  ["Millwall Dockers", "London", "English League 2", 68, 66, 67, 3, 50, 61],
  ["South Coast Saints", "Southampton", "English League 2", 70, 75, 65, 4, 68, 76],
  ["Teesside Red", "Middlesbrough", "English League 2", 67, 72, 58, 5, 52, 63],
  ["Humberside Tigers", "Hull", "English League 2", 66, 70, 56, 6, 50, 59],
  ["Wrecsam Dragons", "Wrexham", "English League 2", 66, 82, 78, 7, 70, 72],
  ["Black Country Albion", "West Bromwich", "English League 2", 65, 68, 64, 8, 57, 66],
  ["Blackburn Roses", "Blackburn", "English League 2", 64, 71, 56, 9, 49, 60],
  ["Sheffield Steel Blue", "Sheffield", "English League 2", 65, 66, 68, 10, 55, 66],
  ["Norwich Canaries", "Norwich", "English League 2", 64, 74, 55, 11, 55, 66],
  ["Bristol Robins", "Bristol", "English League 2", 63, 70, 52, 12, 49, 58],
  ["Swansea White", "Swansea", "English League 2", 62, 72, 54, 13, 48, 58],
  ["Derby Rams", "Derby", "English League 2", 62, 68, 60, 14, 47, 61],
  ["Oxford Scholars", "Oxford", "English League 2", 61, 72, 48, 15, 42, 52],
  ["Watford Horns", "Watford", "English League 2", 63, 64, 66, 16, 55, 63],
  ["Stoke Potters", "Stoke-on-Trent", "English League 2", 62, 63, 62, 17, 50, 60],
  ["Portsmouth Navy", "Portsmouth", "English League 2", 61, 67, 58, 18, 46, 58],
  ["Preston Lilywhite", "Preston", "English League 2", 60, 65, 54, 19, 45, 55],
  ["Sheffield Red White", "Sheffield", "English League 2", 61, 62, 66, 20, 52, 63],
  ["Queens Park Hoops", "London", "English League 2", 60, 66, 55, 21, 46, 57],
  ["Plymouth Green", "Plymouth", "English League 2", 58, 64, 52, 22, 40, 50],
  ["Luton Hatters", "Luton", "English League 2", 59, 62, 58, 23, 45, 58],
  ["Leicester Foxes", "Leicester", "English League 2", 63, 66, 82, 24, 68, 78],
  ["Lincoln Imps", "Lincoln", "English League 3", 60, 74, 45, 1, 36, 48],
  ["Stockport Hats", "Stockport", "English League 3", 59, 72, 48, 2, 35, 48],
  ["Bolton Wander", "Bolton", "English League 3", 59, 68, 60, 3, 42, 58],
  ["Bradford Bantams", "Bradford", "English League 3", 58, 68, 55, 4, 34, 46],
  ["Stevenage Borough", "Stevenage", "English League 3", 58, 66, 54, 5, 33, 45],
  ["Reading Royals", "Reading", "English League 3", 57, 72, 63, 6, 38, 55],
  ["Huddersfield Terriers", "Huddersfield", "English League 3", 57, 65, 58, 7, 39, 54],
  ["Wycombe Chairmen", "Wycombe", "English League 3", 56, 64, 52, 8, 32, 44],
  ["Barnsley Oak", "Barnsley", "English League 3", 56, 68, 50, 9, 34, 47],
  ["Leyton East", "London", "English League 3", 55, 70, 48, 10, 31, 43],
  ["Doncaster Rail", "Doncaster", "English League 3", 55, 66, 48, 11, 30, 42],
  ["Wigan Latics", "Wigan", "English League 3", 55, 62, 58, 12, 36, 52],
  ["Rotherham Millers", "Rotherham", "English League 3", 54, 62, 56, 13, 34, 48],
  ["Charlton Reds", "London", "English League 3", 56, 66, 60, 14, 37, 55],
  ["Peterborough Blue", "Peterborough", "English League 3", 55, 68, 54, 15, 36, 51],
  ["Mansfield Stags", "Mansfield", "English League 3", 54, 64, 48, 16, 29, 41],
  ["Northampton Cobblers", "Northampton", "English League 3", 53, 62, 48, 17, 28, 40],
  ["Port Vale Black White", "Stoke-on-Trent", "English League 3", 53, 64, 48, 18, 28, 41],
  ["Exeter Grecians", "Exeter", "English League 3", 53, 66, 45, 19, 27, 39],
  ["Burton Brewers", "Burton", "English League 3", 52, 60, 48, 20, 27, 38],
  ["Cambridge Scholars", "Cambridge", "English League 3", 52, 66, 44, 21, 27, 38],
  ["Shrewsbury Blues", "Shrewsbury", "English League 3", 51, 60, 48, 22, 26, 38],
  ["Crawley Reds", "Crawley", "English League 3", 51, 62, 48, 23, 26, 38],
  ["Bristol Gas", "Bristol", "English League 3", 51, 61, 48, 24, 28, 42]
].map(([name, city, tier, base, pathway, pressure, standing, revenue, reputation]) => ({
  name,
  country: "England",
  city,
  tier,
  base,
  pathway,
  pressure,
  standing,
  revenue,
  reputation
}));

clubCatalog.push(...englishLowerPyramid);

const internationalLowerPyramid = [
  ["Valencia Coast", "Spain", "Valencia", "Spanish League 2", 67, 77, 60, 1, 54, 65],
  ["Galicia Blue White", "Spain", "A Coruna", "Spanish League 2", 66, 75, 62, 2, 50, 64],
  ["Asturias Blue", "Spain", "Oviedo", "Spanish League 2", 65, 73, 60, 3, 48, 62],
  ["Malaga Harbour", "Spain", "Malaga", "Spanish League 2", 63, 74, 58, 4, 46, 59],
  ["Castilla Crown", "Spain", "Madrid", "Spanish League 3", 58, 84, 50, 1, 38, 54],
  ["Catalonia B", "Spain", "Barcelona", "Spanish League 3", 57, 82, 52, 2, 38, 54],
  ["Sardinia Red Blue", "Italy", "Cagliari", "Italian League 2", 68, 71, 64, 1, 52, 66],
  ["Palermo Pink Black", "Italy", "Palermo", "Italian League 2", 66, 73, 62, 2, 49, 63],
  ["Venice Lagoon", "Italy", "Venice", "Italian League 2", 64, 72, 58, 3, 47, 60],
  ["Parma Gold Blue", "Italy", "Parma", "Italian League 2", 63, 70, 57, 4, 46, 59],
  ["Padua White Red", "Italy", "Padua", "Italian League 3", 57, 72, 50, 1, 35, 50],
  ["Catania Island", "Italy", "Catania", "Italian League 3", 56, 70, 55, 2, 34, 50],
  ["Hamburg Port", "Germany", "Hamburg", "German League 2", 69, 74, 68, 1, 56, 70],
  ["Cologne Billy", "Germany", "Cologne", "German League 2", 68, 72, 70, 2, 55, 69],
  ["Dusseldorf Red White", "Germany", "Dusseldorf", "German League 2", 64, 70, 58, 3, 46, 60],
  ["Hanover Red", "Germany", "Hanover", "German League 2", 63, 69, 58, 4, 45, 59],
  ["Dresden Yellow Black", "Germany", "Dresden", "German League 3", 58, 72, 58, 1, 38, 56],
  ["Saarland Blue Black", "Germany", "Saarbrucken", "German League 3", 56, 69, 51, 2, 34, 49],
  ["Saint-Etienne Green", "France", "Saint-Etienne", "French League 2", 66, 74, 66, 1, 49, 66],
  ["Bordeaux Wine", "France", "Bordeaux", "French League 2", 64, 72, 68, 2, 48, 65],
  ["Caen Normandy", "France", "Caen", "French League 2", 61, 70, 54, 3, 41, 55],
  ["Dijon Mustard", "France", "Dijon", "French League 3", 56, 68, 50, 1, 32, 48],
  ["Nancy Red White", "France", "Nancy", "French League 3", 55, 68, 52, 2, 32, 48],
  ["Madeira Green Red", "Portugal", "Funchal", "Portuguese League 2", 64, 72, 58, 1, 45, 61],
  ["Viseu Fontelo", "Portugal", "Viseu", "Portuguese League 2", 61, 75, 48, 2, 36, 51],
  ["Leiria Castle", "Portugal", "Leiria", "Portuguese League 2", 60, 70, 50, 3, 35, 50],
  ["Alverca Red", "Portugal", "Alverca", "Portuguese League 3", 54, 68, 45, 1, 27, 42],
  ["Setubal River", "Portugal", "Setubal", "Portuguese League 3", 53, 66, 47, 2, 27, 43],
  ["Tilburg Tricolour", "Netherlands", "Tilburg", "Dutch League 2", 63, 76, 58, 1, 43, 59],
  ["The Hague Storks", "Netherlands", "The Hague", "Dutch League 2", 62, 72, 62, 2, 42, 60],
  ["Maastricht Red White", "Netherlands", "Maastricht", "Dutch League 2", 58, 68, 50, 3, 32, 48],
  ["Nagasaki Orange", "Japan", "Nagasaki", "Japanese League 2", 65, 78, 56, 1, 46, 61],
  ["Chiba United", "Japan", "Chiba", "Japanese League 2", 64, 76, 58, 2, 45, 60],
  ["Iwata Blue", "Japan", "Iwata", "Japanese League 2", 64, 73, 60, 3, 46, 62],
  ["Tochigi Gold", "Japan", "Tochigi", "Japanese League 3", 55, 72, 45, 1, 29, 44],
  ["Kagoshima Volcano", "Japan", "Kagoshima", "Japanese League 3", 54, 70, 46, 2, 29, 44],
  ["Busan Harbour", "Korea Republic", "Busan", "Korean League 2", 62, 78, 56, 1, 42, 58],
  ["Suwon Blue Red", "Korea Republic", "Suwon", "Korean League 2", 61, 76, 60, 2, 43, 60],
  ["Anyang Violet", "Korea Republic", "Anyang", "Korean League 2", 59, 74, 54, 3, 36, 52],
  ["Melaka Straits", "Malaysia", "Melaka", "Malaysian League 2", 48, 86, 42, 1, 24, 39],
  ["Perlis Northern", "Malaysia", "Kangar", "Malaysian League 2", 45, 84, 38, 2, 20, 34],
  ["Immigration United", "Malaysia", "Putrajaya", "Malaysian League 2", 46, 82, 40, 3, 22, 36],
  ["Rio Hill", "Brazil", "Rio de Janeiro", "Brazilian League 2", 67, 82, 65, 1, 54, 67],
  ["Curitiba Green White", "Brazil", "Curitiba", "Brazilian League 2", 65, 80, 60, 2, 48, 60],
  ["Recife Red Black", "Brazil", "Recife", "Brazilian League 2", 64, 78, 62, 3, 47, 60],
  ["Londrina Blue", "Brazil", "Londrina", "Brazilian League 3", 56, 76, 48, 1, 32, 47],
  ["Nautical White Red", "Brazil", "Recife", "Brazilian League 3", 55, 74, 52, 2, 33, 48],
  ["Santa Fe Red Black", "Argentina", "Santa Fe", "Argentine League 2", 65, 80, 64, 1, 45, 61],
  ["Cordoba Sky", "Argentina", "Cordoba", "Argentine League 2", 63, 78, 60, 2, 41, 56],
  ["Mendoza Blue", "Argentina", "Mendoza", "Argentine League 2", 62, 76, 58, 3, 40, 54]
].map(([name, country, city, tier, base, pathway, pressure, standing, revenue, reputation]) => ({
  name,
  country,
  city,
  tier,
  base,
  pathway,
  pressure,
  standing,
  revenue,
  reputation
}));

clubCatalog.push(...internationalLowerPyramid);

const academyPrograms = clubCatalog.map((club) => ({
  ...club,
  name: `${club.name} Academy`,
  tier: "Academy",
  academyQuality: clamp(Math.round(club.base + club.pathway / 10), 45, 96),
  wage: 0
}));

const leagueConfigs = {
  "English League 1": { country: "England", clubs: 20, matches: 38, region: "Europe", level: 1, promotion: 0, relegation: 3, continental: 4 },
  "English League 2": { country: "England", clubs: 24, matches: 46, region: "Europe", level: 2, promotion: 3, relegation: 3 },
  "English League 3": { country: "England", clubs: 24, matches: 46, region: "Europe", level: 3, promotion: 3, relegation: 4 },
  "Spanish League": { country: "Spain", clubs: 20, matches: 38, region: "Europe", level: 1, promotion: 0, relegation: 3, continental: 4 },
  "Spanish League 2": { country: "Spain", clubs: 22, matches: 42, region: "Europe", level: 2, promotion: 3, relegation: 4 },
  "Spanish League 3": { country: "Spain", clubs: 20, matches: 38, region: "Europe", level: 3, promotion: 4, relegation: 4 },
  "Italian League": { country: "Italy", clubs: 20, matches: 38, region: "Europe", level: 1, promotion: 0, relegation: 3, continental: 4 },
  "Italian League 2": { country: "Italy", clubs: 20, matches: 38, region: "Europe", level: 2, promotion: 3, relegation: 4 },
  "Italian League 3": { country: "Italy", clubs: 20, matches: 38, region: "Europe", level: 3, promotion: 4, relegation: 4 },
  "German League": { country: "Germany", clubs: 18, matches: 34, region: "Europe", level: 1, promotion: 0, relegation: 3, continental: 4 },
  "German League 2": { country: "Germany", clubs: 18, matches: 34, region: "Europe", level: 2, promotion: 3, relegation: 3 },
  "German League 3": { country: "Germany", clubs: 20, matches: 38, region: "Europe", level: 3, promotion: 3, relegation: 4 },
  "French League": { country: "France", clubs: 18, matches: 34, region: "Europe", level: 1, promotion: 0, relegation: 3, continental: 4 },
  "French League 2": { country: "France", clubs: 18, matches: 34, region: "Europe", level: 2, promotion: 3, relegation: 3 },
  "French League 3": { country: "France", clubs: 18, matches: 34, region: "Europe", level: 3, promotion: 3, relegation: 4 },
  "Portuguese League": { country: "Portugal", clubs: 18, matches: 34, region: "Europe", level: 1, promotion: 0, relegation: 3, continental: 3 },
  "Portuguese League 2": { country: "Portugal", clubs: 18, matches: 34, region: "Europe", level: 2, promotion: 3, relegation: 3 },
  "Portuguese League 3": { country: "Portugal", clubs: 20, matches: 38, region: "Europe", level: 3, promotion: 3, relegation: 4 },
  "Dutch League": { country: "Netherlands", clubs: 18, matches: 34, region: "Europe", level: 1, promotion: 0, relegation: 3, continental: 3 },
  "Dutch League 2": { country: "Netherlands", clubs: 20, matches: 38, region: "Europe", level: 2, promotion: 3, relegation: 0 },
  "Korean League": { country: "Korea Republic", clubs: 12, matches: 38, region: "Asia", level: 1, promotion: 0, relegation: 2, continental: 3 },
  "Korean League 2": { country: "Korea Republic", clubs: 14, matches: 39, region: "Asia", level: 2, promotion: 2, relegation: 0 },
  "Malaysian League": { country: "Malaysia", clubs: 13, matches: 24, region: "Asia", level: 1, promotion: 0, relegation: 2, continental: 2 },
  "Malaysian League 2": { country: "Malaysia", clubs: 16, matches: 30, region: "Asia", level: 2, promotion: 2, relegation: 0 },
  "Japanese League": { country: "Japan", clubs: 20, matches: 38, region: "Asia", level: 1, promotion: 0, relegation: 3, continental: 3 },
  "Japanese League 2": { country: "Japan", clubs: 20, matches: 38, region: "Asia", level: 2, promotion: 3, relegation: 3 },
  "Japanese League 3": { country: "Japan", clubs: 20, matches: 38, region: "Asia", level: 3, promotion: 3, relegation: 2 },
  "Brazilian League": { country: "Brazil", clubs: 20, matches: 38, region: "South America", level: 1, promotion: 0, relegation: 4, continental: 6 },
  "Brazilian League 2": { country: "Brazil", clubs: 20, matches: 38, region: "South America", level: 2, promotion: 4, relegation: 4 },
  "Brazilian League 3": { country: "Brazil", clubs: 20, matches: 38, region: "South America", level: 3, promotion: 4, relegation: 4 },
  "Argentine League": { country: "Argentina", clubs: 30, matches: 16, region: "South America", level: 1, promotion: 0, relegation: 2, continental: 6 },
  "Argentine League 2": { country: "Argentina", clubs: 36, matches: 34, region: "South America", level: 2, promotion: 2, relegation: 4 }
};

const continentalConfigs = {
  "European Crown League": {
    region: "Europe",
    clubs: 36,
    matches: 8,
    rule: "36-club league phase. Each club plays 8 different opponents, then top 8 advance directly and 9-24 enter a knockout play-off."
  },
  "Asian Crown League": {
    region: "Asia",
    clubs: 24,
    matches: 8,
    rule: "24-club elite phase split by region. Each club plays 8 matches before knockout qualification."
  },
  "South American Crown Cup": {
    region: "South America",
    clubs: 32,
    matches: 6,
    rule: "32 clubs in groups of four. Six group matches decide knockout qualification."
  }
};

const agentPool = [
  { name: "Samira Holt", style: "Family-first adviser", quality: 54, negotiation: 52, connections: 48, care: 82, loyalty: 84, feeRate: 3, minOverall: 0 },
  { name: "Maya Fernandes", style: "Patient builder", quality: 62, negotiation: 60, connections: 56, care: 76, loyalty: 78, feeRate: 4, minOverall: 12 },
  { name: "Leon Clarke", style: "Connected negotiator", quality: 72, negotiation: 77, connections: 78, care: 58, loyalty: 66, feeRate: 6, minOverall: 35 },
  { name: "Owen Mercer", style: "Big move specialist", quality: 79, negotiation: 84, connections: 88, care: 54, loyalty: 62, feeRate: 8, minOverall: 55 },
  { name: "Valeria Conte", style: "Elite pathway director", quality: 88, negotiation: 91, connections: 93, care: 68, loyalty: 70, feeRate: 10, minOverall: 72 },
  { name: "Rafael Stein", style: "Global star manager", quality: 94, negotiation: 96, connections: 98, care: 64, loyalty: 74, feeRate: 12, minOverall: 84 }
];

const careerActions = {
  technical: { title: "Technical Training", text: "Touch, passing, finishing. Slow but clean growth.", focus: "technical", intensity: 1.05, fitness: -3, stress: 4, confidence: 1 },
  physical: { title: "Physical Block", text: "Speed, strength, stamina. More fatigue risk.", focus: "physical", intensity: 1.05, fitness: -7, stress: 6, confidence: 1 },
  tactical: { title: "Tactical Study", text: "Role IQ, movement, manager instructions.", focus: "tactical", intensity: 1, fitness: 0, stress: 3, confidence: 1 },
  matchprep: { title: "Match Prep", text: "Less growth, better chance of a strong rating.", focus: "mentality", intensity: 0.75, fitness: -2, stress: 3, confidence: 3 },
  recovery: { title: "Recovery Week", text: "Body and mind first. Tiny growth, safer match.", focus: "mentality", intensity: 0.35, fitness: 13, stress: -9, confidence: 1 }
};

const lifeActions = {
  family: { title: "Family Time", text: "Stay grounded and protected.", family: 8, friends: -1, relationship: -1, loneliness: -8, stress: -5, wellbeing: 6 },
  friends: { title: "Friends", text: "Keep a life outside football.", family: -1, friends: 8, relationship: 1, loneliness: -7, stress: -4, wellbeing: 5 },
  relationship: { title: "Relationship", text: "Build trust with someone close.", family: -2, friends: 0, relationship: 8, loneliness: -7, stress: -2, wellbeing: 5 },
  support: { title: "Rest and Support", text: "Sleep, reflect, talk honestly.", family: 1, friends: 0, relationship: 0, loneliness: -5, stress: -10, wellbeing: 9 },
  focus: { title: "Isolate and Focus", text: "More football time, real social cost.", family: -5, friends: -6, relationship: -5, loneliness: 10, stress: 5, wellbeing: -5 }
};

const managerTrainingProfiles = {
  "High press": { focus: "physical", secondary: "tactical", sessions: 5, strictness: 78, label: "High press conditioning" },
  "Possession": { focus: "technical", secondary: "tactical", sessions: 4, strictness: 62, label: "Possession circuits" },
  "Counter attack": { focus: "tactical", secondary: "physical", sessions: 4, strictness: 68, label: "Transition strategy" },
  "Youth trust": { focus: "technical", secondary: "mentality", sessions: 4, strictness: 48, label: "Youth development" },
  "Pragmatic": { focus: "tactical", secondary: "mentality", sessions: 3, strictness: 72, label: "Match strategy" }
};

const investmentTemplates = [
  { name: "Nivida AI shares", type: "Stock", min: 420, weeks: 12, upside: 30, risk: 15, downside: 22, note: "High-growth tech can rise fast, but hype can turn quickly." },
  { name: "Boot Room Cafe", type: "Business", min: 260, weeks: 10, upside: 18, risk: 10, downside: 16, note: "Local business, steadier returns, smaller ceiling." },
  { name: "Streetwear Drop", type: "Brand", min: 650, weeks: 8, upside: 42, risk: 28, downside: 40, note: "Big upside if the drop catches attention." },
  { name: "Family Rental Room", type: "Property", min: 900, weeks: 18, upside: 20, risk: 8, downside: 14, note: "Slow, stable, and tied to family expectations." },
  { name: "Boots Resale Group", type: "Side business", min: 180, weeks: 6, upside: 12, risk: 12, downside: 18, note: "Small cash flow with reputation risk if it gets messy." },
  { name: "Green Energy Fund", type: "Fund", min: 500, weeks: 14, upside: 24, risk: 14, downside: 20, note: "Medium risk, more patience required." }
];

const pseudoStars = {
  "Madrid White": [
    ["Lylian Mbappo", "ST", 94],
    ["Vinni Junioro", "WG", 91],
    ["Jude Bellinghamn", "CM", 90],
    ["Thibaut Courtoix", "GK", 88]
  ],
  "Manchester Sky": [
    ["Erwin Halland", "ST", 93],
    ["Kevin De Brine", "CM", 89],
    ["Phil Fodden", "WG", 86],
    ["Ruben Diaso", "CB", 88]
  ],
  "Merseyside Red": [
    ["Mo Salim", "WG", 89],
    ["Virgil Van Dijko", "CB", 88],
    ["Alisson Bekker", "GK", 87],
    ["Trent Alex-Arnold", "FB", 86]
  ],
  "London Red": [
    ["Bukayo Sakae", "WG", 87],
    ["Martin Odegard", "CM", 87],
    ["Declan Ricce", "CM", 86],
    ["William Salibo", "CB", 86]
  ],
  "London Blue": [
    ["Cole Palmar", "CM", 86],
    ["Enzo Fernandis", "CM", 83],
    ["Reece Jamez", "FB", 82],
    ["Christopher Nkunko", "ST", 82]
  ],
  "Paris Capital": [
    ["Ousmane Dembeli", "WG", 86],
    ["Achraf Hakimiq", "FB", 85],
    ["Vitinha Silva", "CM", 84],
    ["Gianluigi Donarumma", "GK", 85]
  ],
  "Munich Red": [
    ["Harry Kain", "ST", 90],
    ["Jamal Musialae", "CM", 88],
    ["Joshua Kimmichh", "CM", 86],
    ["Manuel Neueri", "GK", 84]
  ],
  "Catalonia Garnet": [
    ["Lamin Yamalo", "WG", 86],
    ["Robert Lewandovski", "ST", 86],
    ["Pedri Gonzal", "CM", 86],
    ["Frenkie De Jongg", "CM", 85]
  ],
  "Milan Blue Black": [
    ["Lautaro Martines", "ST", 88],
    ["Nicolo Barellae", "CM", 86],
    ["Alessandro Bastoniq", "CB", 85],
    ["Marcus Thuramme", "ST", 84]
  ],
  "Dortmund Yellow": [
    ["Julian Brandte", "CM", 83],
    ["Karim Adeyemio", "WG", 80],
    ["Nico Schlotterbek", "CB", 82],
    ["Gregor Kobeli", "GK", 84]
  ],
  "Seoul Red Black": [
    ["Sung Min Soh", "WG", 86],
    ["Jae Hwan Park", "CM", 72],
    ["Min Kyu Han", "ST", 71],
    ["Ji Sung Baek", "CM", 70]
  ],
  "Kuala Lumpur Stripes": [
    ["Arif Aimanu", "WG", 69],
    ["Safawi Rashido", "WG", 66],
    ["Dion Coolsen", "CB", 68],
    ["Akhyar Rashidee", "ST", 64]
  ],
  "Johor Southern": [
    ["Bergson Silvo", "ST", 70],
    ["La'Vere Corbin-One", "ST", 69],
    ["Shane Lowree", "CB", 68],
    ["Natxo Inso", "CM", 67]
  ]
};

const firstNames = [
  "Adrian", "Mateo", "Noah", "Luca", "Rayan", "Tomas", "Elias", "Dario", "Felix", "Ibrahim",
  "Kai", "Min", "Haruto", "Akmal", "Rafiq", "Diego", "Nico", "Oscar", "Theo", "Yusuf",
  "Mika", "Lucas", "Aron", "Samir", "Jae", "Ren", "Bruno", "Marco", "Leo", "Hugo"
];

const lastNames = [
  "Novak", "Silva", "Rahman", "Tanaka", "Kimura", "Park", "Garcia", "Moretti", "Dubois", "Costa",
  "Santos", "Hassan", "Keller", "Martins", "Muller", "Rossi", "Bakker", "Araujo", "Halim", "Foden",
  "Yamada", "Lim", "Kovacs", "Bennett", "Alonso", "Nakamura", "Salleh", "Diallo", "Mendoza", "Ito"
];

const countryNamePools = {
  England: [["Archie", "Oliver", "Jude", "Harry", "Mason", "Callum", "Alfie", "Reece", "Elliot", "Finley", "Lewis", "Charlie", "Harvey", "Toby", "Jamie", "Kieran"], ["Bennett", "Hughes", "Walker", "Turner", "Cooper", "Walsh", "Carter", "Ellis", "Morgan", "Bailey", "Foster", "Reed", "Palmer", "Wells", "Barker", "Knight"]],
  Spain: [["Pablo", "Iker", "Unai", "Sergio", "Mateo", "Nico", "Dani", "Hugo", "Alejandro", "Gavi", "Marc", "Adrian", "Ruben", "Ismael"], ["Garcia", "Alonso", "Navarro", "Moreno", "Soler", "Vidal", "Castro", "Molina", "Rojas", "Herrera", "Campos", "Santos", "Marin", "Vega"]],
  Italy: [["Luca", "Marco", "Nico", "Andrea", "Matteo", "Davide", "Federico", "Alessio", "Gianluca", "Enzo", "Simone", "Riccardo"], ["Rossi", "Bianchi", "Moretti", "Conti", "Ferraro", "Gallo", "Rizzo", "Romano", "Greco", "Vitale", "Lombardi", "Marino"]],
  Germany: [["Lukas", "Felix", "Jonas", "Timo", "Florian", "Noah", "Emil", "Leon", "Mats", "Niklas", "Julian", "Kai"], ["Muller", "Schmidt", "Keller", "Weber", "Fischer", "Brandt", "Vogel", "Klein", "Hartmann", "Wolf", "Becker", "Kruger"]],
  France: [["Theo", "Hugo", "Rayan", "Lucas", "Jules", "Mathis", "Kylio", "Enzo", "Maxime", "Noe", "Amine", "Yanis"], ["Dubois", "Moreau", "Laurent", "Blanc", "Garnier", "Roux", "Lefevre", "Girard", "Henry", "Perrin", "Marchand", "Renard"]],
  Portugal: [["Joao", "Diogo", "Tiago", "Ruben", "Goncalo", "Andre", "Nuno", "Tomas", "Miguel", "Rafael"], ["Silva", "Costa", "Pereira", "Fernandes", "Martins", "Santos", "Carvalho", "Ramos", "Mendes", "Neves"]],
  Netherlands: [["Daan", "Sem", "Luuk", "Milan", "Jasper", "Noah", "Xavi", "Tijmen", "Bram", "Lars"], ["Bakker", "De Jong", "Van Dijk", "Visser", "Smit", "Meijer", "Bos", "Mulder", "Kok", "Vos"]],
  Malaysia: [["Aiman", "Hakim", "Syafiq", "Rafiq", "Akmal", "Faris", "Arif", "Safwan", "Danish", "Irfan", "Zul", "Haziq", "Amirul", "Ikhwan"], ["Rahman", "Salleh", "Halim", "Azmi", "Zainal", "Yusof", "Nordin", "Hamzah", "Ibrahim", "Ismail", "Razak", "Shah", "Mazlan", "Latif"]],
  Indonesia: [["Rizky", "Bagas", "Evan", "Witan", "Dimas", "Arhan", "Fajar", "Saddam"], ["Pratama", "Santoso", "Saputra", "Wijaya", "Putra", "Ramadhan", "Nugroho", "Hidayat"]],
  Singapore: [["Irfan", "Hariss", "Ikhsan", "Adam", "Danish", "Faris", "Shakir", "Zulqarnaen"], ["Fandi", "Sulaiman", "Hassan", "Rahim", "Mahmud", "Lim", "Tan", "Salleh"]],
  Thailand: [["Suphanat", "Teerasil", "Chanathip", "Kritsada", "Peeradon", "Saranon", "Ekanit", "Bordin"], ["Mueanta", "Dangda", "Songkrasin", "Kaman", "Chamratsamee", "Anuin", "Panya", "Phala"]],
  Japan: [["Haruto", "Ren", "Riku", "Kaito", "Sota", "Yuma", "Daichi", "Takumi", "Shota", "Keito", "Ryo", "Kosei"], ["Tanaka", "Ito", "Yamada", "Nakamura", "Kobayashi", "Saito", "Suzuki", "Watanabe", "Mori", "Endo", "Fujita", "Ishikawa"]],
  "Korea Republic": [["Min-Jun", "Ji-Hoon", "Seo-Jun", "Hyun-Woo", "Jae-Min", "Do-Yun", "Sung-Min", "Tae-Hyun", "Jin-Woo", "Min-Jae"], ["Kim", "Park", "Lee", "Choi", "Jung", "Han", "Kang", "Yoon", "Lim", "Seo"]],
  Brazil: [["Joao", "Lucas", "Matheus", "Rafael", "Bruno", "Caio", "Vitor", "Andre", "Felipe", "Thiago", "Gabriel", "Henrique"], ["Silva", "Santos", "Costa", "Araujo", "Pereira", "Lima", "Oliveira", "Souza", "Rocha", "Barbosa", "Cardoso", "Moura"]],
  Argentina: [["Mateo", "Thiago", "Nico", "Lautaro", "Tomas", "Facundo", "Julian", "Enzo", "Franco", "Santiago"], ["Mendoza", "Romero", "Acosta", "Paz", "Ferreyra", "Sosa", "Rojas", "Vega", "Gimenez", "Correa"]],
  Uruguay: [["Agustin", "Diego", "Facundo", "Matias", "Rodrigo", "Sebastian"], ["Suarez", "Nunez", "Gimenez", "Bentancur", "Valverde", "Caceres"]],
  Colombia: [["Juan", "Luis", "Jhon", "Daniel", "Yaser", "Kevin"], ["Quintero", "Munoz", "Diaz", "Arias", "Lerma", "Carrascal"]],
  Paraguay: [["Miguel", "Angel", "Oscar", "Ramon", "Julio", "Hector"], ["Almiron", "Gomez", "Rojas", "Ortiz", "Romero", "Benitez"]],
  Nigeria: [["Kelechi", "Samuel", "Victor", "Moses", "Taiwo", "Chidera"], ["Okafor", "Balogun", "Adebayo", "Iheanacho", "Onyeka", "Eze"]],
  Morocco: [["Youssef", "Achraf", "Bilal", "Amine", "Sofiane", "Ilias"], ["Hakimi", "Saiss", "El Idrissi", "Bennani", "Ziyech", "Mazraoui"]],
  Senegal: [["Moussa", "Sadio", "Ismaila", "Pape", "Cheikh", "Habib"], ["Diop", "Sarr", "Ndiaye", "Gueye", "Diallo", "Cisse"]],
  Algeria: [["Riyad", "Islam", "Youcef", "Said", "Farid", "Nabil"], ["Mahrez", "Bennacer", "Brahimi", "Mandi", "Slimani", "Atal"]],
  Australia: [["Lachlan", "Noah", "Cooper", "Jackson", "Riley", "Mitchell"], ["Goodwin", "Irvine", "Ryan", "Behich", "Burgess", "Duke"]]
};

const chairmanFirstNames = ["Victor", "Helena", "Rafael", "Darius", "Amelia", "Farid", "Clara", "Kenji", "Ismail", "Leon"];
const chairmanLastNames = ["Marwick", "Solano", "Tan", "Keller", "Rahman", "Okada", "Moreau", "Silvestre", "Hughes", "Nordin"];
const managerFirstNames = ["Julian", "Marco", "Hassan", "Miguel", "Andre", "Paolo", "Thomas", "Daniel", "Seo-Jun", "Riku"];
const managerLastNames = ["Vale", "Moretti", "Reyes", "Fischer", "Collins", "Han", "Nakamura", "Rahman", "Blanc", "Ortega"];

const chairmanTraits = [
  { title: "Big spender", spending: 88, ambition: 82, patience: 42, youth: 42, stability: 45, direction: "will chase signings whenever the squad looks short" },
  { title: "Youth builder", spending: 56, ambition: 70, patience: 76, youth: 88, stability: 72, direction: "prefers academy minutes and resale value" },
  { title: "Pragmatic seller", spending: 48, ambition: 58, patience: 62, youth: 66, stability: 68, direction: "sells high and reinvests carefully" },
  { title: "Galactico hunter", spending: 94, ambition: 92, patience: 28, youth: 34, stability: 35, direction: "wants stars and reacts fast to fan anger" },
  { title: "Data driven", spending: 64, ambition: 72, patience: 70, youth: 72, stability: 78, direction: "targets value, role fit, and wage control" },
  { title: "Cost controller", spending: 34, ambition: 45, patience: 72, youth: 58, stability: 82, direction: "keeps the club stable but frustrates ambitious managers" }
];

const broadcasters = [
  { name: "Ramano Fabio", country: "Global", focus: "Transfers" },
  { name: "ABC Sport", country: "England", focus: "League" },
  { name: "Marca Norte", country: "Spain", focus: "League" },
  { name: "Le Sportif", country: "France", focus: "League" },
  { name: "Calcio Wire", country: "Italy", focus: "League" },
  { name: "Bundes Blitz", country: "Germany", focus: "League" },
  { name: "Harimau Daily", country: "Malaysia", focus: "National" },
  { name: "Seoul Ball", country: "Korea Republic", focus: "National" },
  { name: "Nippon Goal", country: "Japan", focus: "National" },
  { name: "Samba Report", country: "Brazil", focus: "League" },
  { name: "Rio Plata News", country: "Argentina", focus: "League" }
];

const launchParams = new URLSearchParams(window.location.search);

if (launchParams.has("new")) {
  removeSavedCareer();
  const cleanUrl = new URL(window.location.href);
  cleanUrl.searchParams.delete("new");
  window.history.replaceState({}, "", cleanUrl);
}

let state = launchParams.has("load") ? loadState() : null;
let selected = { career: "technical", life: "family" };

function clamp(value, min = 0, max = 100) {
  return Math.max(min, Math.min(max, value));
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function round(value) {
  return Math.round(value);
}

function average(values) {
  return values.reduce((sum, value) => sum + value, 0) / values.length;
}

function uid(prefix) {
  return `${prefix}-${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function textSeed(value) {
  return String(value || "").split("").reduce((sum, char, index) => sum + char.charCodeAt(0) * (index + 3), 0);
}

function nationByCode(code) {
  return nations.find((nation) => nation.code === code) || nations.find((nation) => nation.code === "MAS");
}

function nationByName(name) {
  return nations.find((nation) => nation.name === name) || { code: "UNK", name, rank: 110 };
}

function nationOverall(rank) {
  return clamp(Math.round(92 - rank * 0.26), 42, 91);
}

function countrySpotlight(rank) {
  return clamp(0.85 + rank / 72, 0.9, 3.2);
}

function clubOverall(club) {
  const nation = nationByName(club.country);
  return clamp(Math.round(club.base + (50 - nation.rank) / 20), 45, 96);
}

function createAttributesFromTemplate(template) {
  return Object.fromEntries(Object.entries(attributeGroups).map(([group, config]) => {
    const base = template[group];
    return [group, Object.fromEntries(config.subs.map(([key]) => [key, clamp(base + randomBetween(-3, 3), 1, 99)]))];
  }));
}

function groupOverall(groupKey, player = state.player) {
  const values = Object.values(player.attributes[groupKey] || {});
  return values.length ? average(values) : 0;
}

function overall(player = state.player) {
  return average(Object.keys(attributeGroups).map((group) => groupOverall(group, player)));
}

function overallFromAttributes(attributes) {
  return round(average(Object.keys(attributeGroups).map((group) => {
    const values = Object.values(attributes[group] || {});
    return values.length ? average(values) : 0;
  })));
}

function recentAverage() {
  const ratings = state.career.ratingHistory.slice(0, 5);
  if (!ratings.length) return 0;
  return average(ratings);
}

function saveState(options = {}) {
  try {
    if (state) {
      state.save = {
        ...(state.save || {}),
        version: updateHistory[0].version,
        savedAt: new Date().toISOString(),
        manualSavedAt: options.manual ? new Date().toISOString() : state.save?.manualSavedAt || null
      };
    }
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    return true;
  } catch (error) {
    if (error?.name === "QuotaExceededError") {
      try {
        clearLegacySaveKeys();
        localStorage.setItem(SAVE_KEY, JSON.stringify(state));
        return true;
      } catch (retryError) {
        console.warn("Career could not be saved after clearing old save slots.", retryError);
      }
    }
    console.warn("Career could not be saved in this browser, but play can continue.", error);
    return false;
  }
}

function loadState() {
  try {
    const stored = localStorage.getItem(SAVE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
}

function savedCareerSummary(saved = loadState()) {
  if (!saved?.player) return null;
  const date = saved.career ? addDays(GAME_START_DATE, Math.max(0, saved.career.totalWeeks || 0) * 7) : GAME_START_DATE;
  return {
    name: saved.player.name || "Unnamed player",
    club: saved.player.club || "Unattached",
    stage: saved.player.stage || "Academy Applicant",
    overall: saved.player.attributes ? overallFromAttributes(saved.player.attributes) : null,
    gameDate: formatDisplayDate(date),
    savedAt: saved.save?.savedAt ? formatDateTime(saved.save.savedAt) : "Not recorded",
    manualSavedAt: saved.save?.manualSavedAt ? formatDateTime(saved.save.manualSavedAt) : null
  };
}

function removeSavedCareer() {
  try {
    localStorage.removeItem(SAVE_KEY);
    clearLegacySaveKeys();
  } catch (error) {
    console.warn("Career save could not be cleared in this browser.", error);
  }
}

function clearLegacySaveKeys() {
  LEGACY_SAVE_KEYS.forEach((key) => {
    try {
      localStorage.removeItem(key);
    } catch {
      // Ignore individual storage cleanup failures so the active save can still try.
    }
  });
}

function buildWorld() {
  const clubs = expandedClubCatalog().map((club, index) => {
    const id = slug(club.name);
    const chairman = createChairman(club, index);
    const facilities = createFacilities(club, chairman);
    return {
      ...club,
      id,
      overall: clubOverall(club),
      finance: createClubFinance(club),
      fame: clamp((club.reputation ?? club.base) + randomBetween(-7, 8), 20, 98),
      facilities,
      chairman,
      manager: createManager(club, index),
      seasonMood: randomBetween(-5, 5),
      roster: createRoster(club, false),
      academyRoster: createRoster(club, true)
    };
  });

  const leagues = buildLeagueTables(clubs);
  const competitions = buildContinentalCompetitions(clubs);

  return {
    clubs,
    leagues,
    competitions,
    fixtures: buildMatchSchedules(leagues, competitions),
    leaders: buildLeaderboards(),
    news: createOpeningNews(clubs),
    filters: {
      league: "Academy League",
      leagueCountry: "Academy",
      newsCountry: "All",
      club: "current"
    }
  };
}

function expandedClubCatalog() {
  const expanded = [...clubCatalog];
  Object.entries(leagueConfigs).forEach(([league, config]) => {
    const current = expanded.filter((club) => club.tier === league).length;
    for (let index = current; index < config.clubs; index += 1) {
      expanded.push(generateFillerClub(league, config, index));
    }
  });
  return expanded;
}

function generateFillerClub(league, config, index) {
  const cityRoots = {
    England: ["Brighton", "Bristol", "Leeds", "Nottingham", "Sheffield", "Wolverhampton", "Leicester", "Southampton", "Norwich", "Cardiff", "Sunderland", "Derby"],
    Spain: ["Valencia", "Villarreal", "Girona", "Getafe", "Granada", "Pamplona", "Vigo", "Mallorca", "Cadiz", "Alaves", "Zaragoza", "Oviedo"],
    Italy: ["Florence", "Bergamo", "Bologna", "Genoa", "Sardinia", "Parma", "Verona", "Udine", "Lecce", "Palermo", "Venice", "Como"],
    Germany: ["Frankfurt", "Stuttgart", "Freiburg", "Mainz", "Bremen", "Gladbach", "Berlin", "Augsburg", "Bochum", "Hamburg", "Cologne", "Hoffenheim"],
    France: ["Lille", "Nice", "Rennes", "Lens", "Nantes", "Toulouse", "Strasbourg", "Brest", "Montpellier", "Reims", "Metz", "Dijon"],
    Portugal: ["Braga", "Guimaraes", "Faro", "Madeira", "Arouca", "Estoril", "Boavista", "Chaves", "Coimbra", "Setubal", "Vizela", "Rio Ave"],
    Netherlands: ["Utrecht", "Alkmaar", "Twente", "Heerenveen", "Groningen", "Tilburg", "Arnhem", "Zwolle", "Sparta", "Sittard", "Waalwijk", "Breda"],
    "Korea Republic": ["Busan", "Daegu", "Incheon", "Pohang", "Suwon", "Gwangju", "Daejeon", "Gangwon", "Jeju", "Gimcheon", "Anyang", "Cheonan"],
    Malaysia: ["Sabah", "Sarawak", "Kedah", "Kelantan", "Perak", "Terengganu", "Melaka", "Negeri", "Pahang", "Putrajaya", "Perlis", "Labuan"],
    Japan: ["Kobe", "Osaka", "Nagoya", "Kawasaki", "Hiroshima", "Fukuoka", "Kyoto", "Kashima", "Shonan", "Niigata", "Sendai", "Sapporo"],
    Brazil: ["Belo Horizonte", "Porto Alegre", "Fortaleza", "Curitiba", "Salvador", "Recife", "Goiania", "Bahia", "Ceara", "Braganca", "Santos", "Fluminense"],
    Argentina: ["Cordoba", "Rosario", "La Plata", "Avellaneda", "Tucuman", "Mendoza", "Santa Fe", "Lanus", "Tigre", "Huracan", "Velez", "Banfield"]
  };
  const suffixes = ["United", "City", "Athletic", "Rovers", "Sporting", "Wanderers", "Rail", "Harbour", "County", "Union"];
  const city = cityRoots[config.country][index % cityRoots[config.country].length];
  const levelDrop = config.level ? (config.level - 1) * 9 : 0;
  const base = clamp(leagueAverageBase(league) + randomBetween(-10, 7) - index / 5 - levelDrop, 35, 86);
  return {
    name: `${city} ${suffixes[index % suffixes.length]}`,
    country: config.country,
    city,
    tier: league,
    base,
    pathway: clamp(randomBetween(45, 82) + (base < 62 ? 8 : 0), 35, 92),
    pressure: clamp(randomBetween(35, 80) + (base > 78 ? 12 : 0), 25, 95),
    generated: true
  };
}

function leagueAverageBase(league) {
  const clubs = clubCatalog.filter((club) => club.tier === league);
  return clubs.length ? average(clubs.map((club) => club.base)) : 62;
}

function createClubFinance(club) {
  const revenue = club.revenue ?? club.base;
  const levelPenalty = leagueConfigs[club.tier]?.level ? (leagueConfigs[club.tier].level - 1) * 10 : 0;
  return clamp(Math.round(revenue * 0.72 + club.base * 0.36 - levelPenalty + randomBetween(-10, 10)), 12, 100);
}

function createFacilities(club, chairman) {
  const youthBias = chairman.youth / 6;
  const moneyBias = club.base / 5;
  return {
    academy: clamp(Math.round(club.pathway * 0.72 + youthBias + randomBetween(-6, 6)), 25, 99),
    training: clamp(Math.round(club.base * 0.72 + moneyBias + randomBetween(-7, 7)), 25, 99),
    medical: clamp(Math.round(club.base * 0.54 + chairman.stability / 5 + randomBetween(-7, 9)), 20, 96),
    hospitality: clamp(Math.round(club.fame ? club.fame * 0.5 : club.base * 0.56 + chairman.spending / 6 + randomBetween(-6, 8)), 20, 96),
    scouting: clamp(Math.round(chairman.spending * 0.35 + chairman.ambition * 0.35 + randomBetween(-8, 8)), 20, 98)
  };
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function createChairman(club, index) {
  const trait = chairmanTraits[(index + Math.floor(club.base / 7)) % chairmanTraits.length];
  return {
    name: `${chairmanFirstNames[index % chairmanFirstNames.length]} ${chairmanLastNames[(index * 3) % chairmanLastNames.length]}`,
    trait: trait.title,
    direction: trait.direction,
    spending: clamp(trait.spending + randomBetween(-8, 8)),
    ambition: clamp(trait.ambition + randomBetween(-8, 8)),
    patience: clamp(trait.patience + randomBetween(-8, 8)),
    youth: clamp(trait.youth + randomBetween(-8, 8)),
    stability: clamp(trait.stability + randomBetween(-8, 8)),
    pressure: clamp(club.pressure + randomBetween(-10, 10))
  };
}

function createManager(club, index) {
  const style = ["High press", "Possession", "Counter attack", "Youth trust", "Pragmatic"][index % 5];
  const profile = managerTrainingProfiles[style];
  return {
    name: `${managerFirstNames[(index * 2) % managerFirstNames.length]} ${managerLastNames[(index * 5) % managerLastNames.length]}`,
    style,
    trainingFocus: profile.focus,
    secondaryFocus: profile.secondary,
    weeklySessions: clamp(profile.sessions + Math.round(randomBetween(-0.4, 0.9)), 3, 5),
    strictness: clamp(profile.strictness + randomBetween(-9, 9)),
    reputation: clamp(club.base + randomBetween(-8, 8)),
    tactics: clamp(club.base + randomBetween(-10, 10)),
    patience: clamp(52 + club.pathway / 3 - club.pressure / 5 + randomBetween(-10, 10)),
    fanPressure: clamp(club.pressure + randomBetween(-8, 8))
  };
}

function createRoster(club, academy = false) {
  const reputation = club.reputation ?? club.base;
  const revenue = club.revenue ?? club.base;
  const baseOverall = academy
    ? clamp(10 + club.pathway / 13 + (leagueConfigs[club.tier]?.level === 1 ? 2 : 0), 12, 26)
    : clamp(clubOverall(club) * 0.62 + reputation * 0.18 + revenue * 0.12, 35, 88);
  const positionsList = ["GK", "GK", "FB", "FB", "FB", "CB", "CB", "CB", "CM", "CM", "CM", "CM", "WG", "WG", "WG", "ST", "ST", "ST", "CB", "FB", "CM", "WG", "ST"];
  const seeded = academy ? [] : (pseudoStars[club.name] || []);
  const roster = seeded.map(([name, position, rating], index) => {
    const starCap = clamp(baseOverall + 8 + revenue / 18 + randomBetween(-3, 3), 62, 93);
    return createPlayerRecord(name, position, clamp(Math.min(rating, starCap) + randomBetween(-2, 1), 50, 93), likelyNationality(club.country, index, true), index, academy);
  });

  positionsList.forEach((position, index) => {
    if (roster.length >= 23) return;
    const squadBand = index < 11 ? randomBetween(-4, 5) : index < 17 ? randomBetween(-9, 1) : randomBetween(-16, -5);
    const youngsterDip = !academy && index > 17 ? randomBetween(2, 8) : 0;
    const rating = clamp(baseOverall + squadBand - youngsterDip, academy ? 10 : 32, academy ? 34 : 88);
    const nation = likelyNationality(club.country, index + roster.length, false);
    roster.push(createPlayerRecord(randomPlayerName(nation, index + roster.length, academy, club.name), position, rating, nation, index + roster.length, academy));
  });

  return uniquifyRosterNames(roster.sort((a, b) => b.overall - a.overall).slice(0, 23));
}

function uniquifyRosterNames(roster) {
  const seen = new Map();
  return roster.map((player, index) => {
    const count = seen.get(player.name) || 0;
    if (!count) {
      seen.set(player.name, 1);
      return player;
    }
    const parts = player.name.split(" ");
    const first = parts[0];
    const pool = countryNamePools[player.nationality] || [firstNames, lastNames];
    let nextName = player.name;
    let attempt = count;
    while (seen.has(nextName) && attempt < count + pool[1].length + lastNames.length) {
      const replacementPool = attempt - count < pool[1].length ? pool[1] : lastNames;
      const replacement = replacementPool[(player.name.length + attempt * 13 + index * 5) % replacementPool.length];
      nextName = `${first} ${replacement}`;
      attempt += 1;
    }
    seen.set(nextName, 1);
    return { ...player, name: nextName };
  });
}

function createPlayerRecord(name, position, rating, country, index, academy) {
  const age = academy ? Math.floor(randomBetween(15, 19)) : Math.floor(randomBetween(18, 35));
  const value = academy ? Math.round(rating * rating * randomBetween(6, 26)) : Math.round(rating * rating * randomBetween(420, 3100));
  return {
    id: uid("player"),
    name,
    position,
    overall: round(rating),
    age,
    nationality: country,
    value,
    potential: clamp(round(rating + (academy ? randomBetween(8, 22) : randomBetween(0, 8))), rating, 97)
  };
}

function randomPlayerName(country, index, academy, clubName = "") {
  const pool = countryNamePools[country] || [firstNames, lastNames];
  const seed = textSeed(`${country}-${clubName}-${academy ? "academy" : "senior"}`);
  const first = pool[0][(index * 5 + seed + (academy ? 3 : 0)) % pool[0].length];
  const last = pool[1][(index * 9 + Math.floor(seed / 3) + (academy ? 5 : 0)) % pool[1].length];
  return `${first} ${last}`;
}

function likelyNationality(clubCountry, index, star = false) {
  if (star) return clubCountry;
  const foreignPools = {
    England: ["France", "Spain", "Brazil", "Portugal", "Netherlands", "Nigeria", "Japan", "Korea Republic"],
    Spain: ["Argentina", "Brazil", "France", "Portugal", "Uruguay", "Morocco"],
    Italy: ["Argentina", "France", "Brazil", "Netherlands", "Nigeria", "Senegal"],
    Germany: ["France", "Austria", "Netherlands", "Denmark", "Japan", "Korea Republic"],
    France: ["Morocco", "Senegal", "Algeria", "Brazil", "Portugal", "Netherlands"],
    Malaysia: ["Indonesia", "Singapore", "Thailand", "Brazil", "Japan", "Korea Republic"],
    Japan: ["Brazil", "Korea Republic", "Australia", "Thailand", "Malaysia"],
    "Korea Republic": ["Brazil", "Japan", "Australia", "Malaysia", "Thailand"],
    Brazil: ["Argentina", "Uruguay", "Colombia", "Paraguay", "Portugal"],
    Argentina: ["Uruguay", "Brazil", "Colombia", "Paraguay", "Chile"]
  };
  if (index % 10 < 6) return clubCountry;
  const pool = foreignPools[clubCountry] || ["Brazil", "France", "Spain", "Portugal"];
  return pool[(index * 3 + clubCountry.length) % pool.length];
}

function buildLeagueTables(clubs) {
  const leagueTables = Object.fromEntries(Object.keys(leagueConfigs).map((league) => [
    league,
    clubs
      .filter((club) => club.tier === league)
      .slice(0, leagueConfigs[league].clubs)
      .map((club) => createTableRow(club, league, leagueConfigs[league].matches))
      .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf)
  ]));

  leagueTables["Academy League"] = clubs
    .slice(0, 20)
    .map((club) => ({ ...club, name: `${club.name} Academy`, overall: clamp(club.overall - 21, 30, 78) }))
    .map((club) => createTableRow(club, "Academy League", 30))
    .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);

  return leagueTables;
}

function createTableRow(club, league, maxMatches) {
  const strength = club.overall || clubOverall(club);
  const played = 0;
  const wins = clamp(Math.round((strength - 45) / 11 + randomBetween(0, played / 2)), 0, played);
  const draws = clamp(Math.round(randomBetween(0, Math.max(1, played - wins)) / 2), 0, played - wins);
  const losses = played - wins - draws;
  const gf = played ? Math.max(1, Math.round(wins * randomBetween(1.4, 2.5) + draws * randomBetween(0.6, 1.4) + randomBetween(0, 4))) : 0;
  const ga = played ? Math.max(1, Math.round(losses * randomBetween(1.4, 2.5) + draws * randomBetween(0.6, 1.3) + randomBetween(0, 3))) : 0;
  return {
    club: club.name,
    country: club.country,
    league,
    maxMatches,
    p: played,
    w: wins,
    d: draws,
    l: losses,
    gf,
    ga,
    gd: gf - ga,
    pts: wins * 3 + draws,
    form: "-----"
  };
}

function buildContinentalCompetitions(clubs) {
  return Object.fromEntries(Object.entries(continentalConfigs).map(([name, config]) => {
    const entrants = clubs
      .filter((club) => leagueConfigs[club.tier]?.region === config.region && (leagueConfigs[club.tier]?.level || 1) === 1)
      .sort((a, b) => b.overall + b.fame / 8 - (a.overall + a.fame / 8))
      .slice(0, config.clubs);
    return [name, {
      ...config,
      table: entrants.map((club) => createCompetitionRow(club, name, config.matches))
        .sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf)
    }];
  }));
}

function createCompetitionRow(club, competition, maxMatches) {
  return {
    club: club.name,
    country: club.country,
    competition,
    maxMatches,
    p: 0,
    w: 0,
    d: 0,
    l: 0,
    gf: 0,
    ga: 0,
    gd: 0,
    pts: 0,
    form: ""
  };
}

function buildMatchSchedules(leagues, competitions) {
  const schedules = {};
  Object.entries(leagues).forEach(([league, table]) => {
    const config = league === "Academy League"
      ? { country: "Global", clubs: table.length, matches: 30, level: 0 }
      : leagueConfigs[league] || { country: "Global", clubs: table.length, matches: 30 };
    schedules[league] = createRoundSchedule(league, table.map((row) => row.club), config);
  });
  Object.entries(competitions).forEach(([competition, data]) => {
    schedules[competition] = createRoundSchedule(competition, data.table.map((row) => row.club), data);
  });
  return schedules;
}

function createRoundSchedule(competition, clubNames, config) {
  const teams = [...clubNames];
  if (teams.length % 2) teams.push(null);
  const rounds = [];
  let rotation = [...teams];
  const cycleLength = Math.max(1, rotation.length - 1);
  const maxMatches = config.matches || 30;
  const calendar = config.rule ? continentalCalendar(config) : leagueCalendar(config);

  for (let roundIndex = 0; roundIndex < maxMatches; roundIndex += 1) {
    const matches = [];
    const reverse = Math.floor(roundIndex / cycleLength) % 2 === 1;
    for (let index = 0; index < rotation.length / 2; index += 1) {
      const first = rotation[index];
      const second = rotation[rotation.length - 1 - index];
      if (!first || !second) continue;
      const home = (roundIndex + index + (reverse ? 1 : 0)) % 2 === 0 ? first : second;
      const away = home === first ? second : first;
      matches.push({
        id: `${slug(competition)}-${roundIndex + 1}-${index}`,
        home,
        away,
        homeScore: null,
        awayScore: null,
        events: [],
        played: false
      });
    }
    rounds.push({
      round: roundIndex + 1,
      date: addDays(calendar.start, roundIndex * 7),
      matches
    });

    const fixed = rotation[0];
    const rest = rotation.slice(1);
    rest.unshift(rest.pop());
    rotation = [fixed, ...rest];
  }

  return rounds;
}

function buildLeaderboards() {
  const names = [...Object.keys(leagueConfigs), "Academy League", ...Object.keys(continentalConfigs)];
  return Object.fromEntries(names.map((name) => [name, emptyLeaderboards()]));
}

function emptyLeaderboards() {
  return { scorers: [], assists: [], redCards: [], ratings: [] };
}

function leaderRecord(player, type, matchesPlayed = 0) {
  if (!matchesPlayed) return { name: player.name, club: player.club, league: player.league, position: player.position, value: 0 };
  const roleBonus = player.position === "ST" || player.position === "WG" ? 1.25 : player.position === "CM" ? 0.75 : 0.28;
  const oneSeasonWonder = matchesPlayed > 10 && Math.random() < 0.025 ? randomBetween(2, 6) : 0;
  const flop = player.overall > 84 && Math.random() < 0.04 ? randomBetween(0.35, 0.65) : 1;
  let value = 0;
  const sample = Math.max(1, matchesPlayed);
  if (type === "goals") value = Math.round((player.overall - 48) * roleBonus * randomBetween(0.006, 0.024) * sample * flop + oneSeasonWonder);
  if (type === "assists") value = Math.round((player.overall - 45) * (player.position === "CM" || player.position === "WG" ? 1.1 : 0.45) * randomBetween(0.005, 0.019) * sample * flop + oneSeasonWonder / 2);
  if (type === "redCards") value = Math.max(0, Math.round(randomBetween(-0.95, 0.035 * sample) + (player.position === "CB" ? 0.16 : 0)));
  if (type === "rating") value = Number(clamp(5.7 + (player.overall - 60) / 18 + randomBetween(-0.45, 0.55) + oneSeasonWonder / 22 - (flop < 1 ? 0.45 : 0), 5.2, 8.9).toFixed(2));
  if (type === "goals") value = Math.min(value, Math.max(0, sample * 2));
  if (type === "assists") value = Math.min(value, Math.max(0, sample * 2));
  return {
    name: player.name,
    club: player.club,
    league: player.league,
    position: player.position,
    value: Math.max(0, value)
  };
}

function createOpeningNews(clubs) {
  const top = [...clubs].sort((a, b) => b.overall - a.overall).slice(0, 4);
  return top.map((club, index) => ({
    id: uid("news"),
    week: 1,
    country: club.country,
    source: pickBroadcaster(club.country, index).name,
    category: "Club",
    headline: `${club.name} board backs ${club.manager.name}`,
    body: `${club.chairman.name}, known as a ${club.chairman.trait.toLowerCase()}, says the club direction is clear: ${club.chairman.direction}.`
  }));
}

function createCareer(formData) {
  const position = formData.get("position");
  const template = positions[position];
  const background = formData.get("background");
  const nation = nationByCode(formData.get("nation"));
  const supportBoost = background === "close" ? 8 : background === "strained" ? -7 : 0;
  const pressureBoost = background === "pressure" ? 9 : background === "strained" ? 5 : 0;

  state = {
    phase: "contracts",
    player: {
      name: String(formData.get("name") || "Academy Player").trim(),
      position,
      nationality: nation.name,
      nationCode: nation.code,
      nationRank: nation.rank,
      nationOverall: nationOverall(nation.rank),
      countrySpotlight: countrySpotlight(nation.rank),
      ageYears: 15,
      ageWeeks: 0,
      club: "Unattached",
      tier: "Academy",
      role: "Trialist",
      stage: "Academy Applicant",
      wage: 0,
      savings: 80,
      totalEarnings: 0,
      agentFeesPaid: 0,
      livingCostsPaid: 0,
      lastGrossPay: 0,
      lastAgentFee: 0,
      lastLivingCost: 0,
      lastNetPay: 0,
      contractStarted: GAME_START_DATE,
      fame: clamp(8 + (nation.rank > 80 ? 6 : 0)),
      attitude: 42,
      countryAwards: 0,
      attributes: createAttributesFromTemplate(template)
    },
    career: {
      totalWeeks: 1,
      season: 1,
      week: 1,
      startDate: GAME_START_DATE,
      coachTrust: 22,
      reputation: 6,
      form: 48,
      fitness: 82,
      confidence: 44,
      injuryWeeks: 0,
      school: 70,
      appearances: 0,
      goals: 0,
      assists: 0,
      cleanSheets: 0,
      avgRating: 0,
      lastRating: null,
      ratingHistory: [],
      awards: [],
      activityIndex: 0,
      weekPlan: [],
      missedTrainingThisWeek: 0,
      lifeChoicesThisWeek: 0
    },
    activities: {
      investments: [],
      offers: generateInvestmentOptions(4),
      history: []
    },
    life: {
      family: clamp(62 + supportBoost),
      friends: clamp(55 + supportBoost / 2),
      relationship: 18,
      loneliness: clamp(28 - supportBoost + pressureBoost / 2),
      stress: clamp(34 + pressureBoost),
      wellbeing: clamp(66 + supportBoost - pressureBoost / 2),
      familyPressure: clamp(34 + pressureBoost),
      supportPlan: false
    },
    agent: {
      current: null,
      candidates: [],
      offers: []
    },
    academyOffers: [],
    pendingMatch: null,
    world: buildWorld(),
    ui: {
      tab: "dashboard",
      league: "Academy League",
      leagueCountry: "Academy",
      leagueView: "table",
      scoreRound: 1,
      leaderboard: "scorers",
      newsCountry: "All",
      club: "current"
    },
    log: []
  };

  state.academyOffers = generateAcademyContracts();
  state.agent.candidates = createAgentCandidates(4);
  addLog("Academy contracts arrived", "Choose your first academy carefully. Pathway, pressure, and distance will shape your early years.", "good");
  selected = { career: "technical", life: "family" };
  saveState();
  render();
}

function generateAcademyContracts() {
  const homeCountry = state.player.nationality;
  const weighted = academyPrograms.map((program) => {
    const sameCountry = program.country === homeCountry;
    const sameRegion = ["Malaysia", "Japan", "Korea Republic"].includes(program.country) && ["Malaysia", "Japan", "Korea Republic", "Indonesia", "Thailand", "Philippines", "Singapore"].includes(homeCountry);
    const fit = clamp(round(44 + program.pathway * 0.28 + program.academyQuality * 0.18 + (sameCountry ? 17 : 0) + (sameRegion ? 7 : 0) - program.pressure * 0.08 + randomBetween(-8, 8)));
    const wage = round(clamp(70 + program.academyQuality * 1.15 + program.pathway * 0.85 + (sameCountry ? 18 : 0) + randomBetween(-20, 35), 90, 310));
    return {
      id: uid("academy"),
      club: program.name,
      country: program.country,
      city: program.city,
      tier: "Academy",
      role: fit > 72 ? "U16 scholar with early U18 pathway" : fit > 58 ? "U16 academy scholar" : "Development prospect",
      wage,
      quality: program.academyQuality,
      pathway: program.pathway,
      pressure: program.pressure,
      fit,
      distance: sameCountry ? "home country" : sameRegion ? "regional" : "abroad",
      reason: sameCountry ? "Home support is easier to keep." : program.pathway > 75 ? "Strong youth pathway, but moving away has consequences." : "Bigger academy environment with higher pressure."
    };
  });

  const homeOption = weighted.filter((offer) => offer.country === homeCountry).sort((a, b) => b.fit - a.fit)[0];
  const topOptions = weighted
    .filter((offer) => !homeOption || offer.club !== homeOption.club)
    .sort((a, b) => b.fit + b.quality / 5 - (a.fit + a.quality / 5))
    .slice(0, 6)
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return [homeOption, ...topOptions].filter(Boolean).slice(0, 3);
}

function render() {
  const app = document.getElementById("app");
  if (!state) app.innerHTML = setupTemplate();
  else if (state.phase === "contracts") app.innerHTML = contractTemplate();
  else if (state.phase === "matchday") app.innerHTML = matchdayTemplate();
  else if (state.phase === "postmatch") app.innerHTML = postMatchTemplate();
  else app.innerHTML = gameTemplate();
  bindEvents();
}

function bindEvents() {
  const startForm = document.querySelector("[data-start-form]");
  if (startForm) {
    startForm.addEventListener("submit", (event) => {
      event.preventDefault();
      startCareerFromForm(startForm);
    });
  }

  const startButton = document.querySelector("[data-start-button]");
  if (startButton) {
    const startFromButton = (event) => {
      event.preventDefault();
      startCareerFromForm(startButton.closest("form"));
    };
    startButton.addEventListener("click", startFromButton);
    startButton.addEventListener("pointerup", startFromButton);
    startButton.addEventListener("touchend", startFromButton, { passive: false });
  }

  document.querySelectorAll("[data-continue]").forEach((continueButton) => {
    continueButton.addEventListener("click", () => {
      state = loadState();
      render();
    });
  });

  document.querySelectorAll("[data-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selected[button.dataset.group] = button.dataset.select;
      render();
    });
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action, button.dataset.id));
  });

  document.querySelectorAll("select[data-action='club-select']").forEach((select) => {
    select.addEventListener("change", () => {
      state.ui.club = select.value;
      saveState();
      render();
    });
  });
}

function startCareerFromForm(form) {
  if (!form || form.dataset.submitting === "true") return;
  const valid = typeof form.reportValidity === "function"
    ? form.reportValidity()
    : typeof form.checkValidity === "function"
      ? form.checkValidity()
      : true;
  if (!valid) return;
  form.dataset.submitting = "true";
  try {
    createCareer(new FormData(form));
  } catch (error) {
    console.error("Could not start academy offers.", error);
    form.dataset.submitting = "false";
    const errorBox = document.querySelector("[data-start-error]");
    if (errorBox) errorBox.textContent = "Something blocked the start. Please refresh once and try again.";
  }
}

function setupTemplate() {
  const saveSummary = savedCareerSummary();
  const hasSave = Boolean(saveSummary);
  return `
    <section class="app-shell">
      <header class="topbar">
        <div class="brand">
          <h1>${GAME_TITLE}</h1>
          <p>A football career simulator where the person matters as much as the player.</p>
        </div>
        <div class="top-stats">
          <span class="pill">FIFA ranking nations</span>
          <span class="pill">Academy contracts</span>
          <span class="pill">Matchday press</span>
        </div>
      </header>

      <div class="setup-wrap">
        <form class="setup-form" data-start-form>
          <h2>Create your player</h2>
          <label class="field">
            <span>Name</span>
            <input name="name" value="Ari Rahman" maxlength="28" required>
          </label>
          <label class="field">
            <span>Nationality</span>
            <select name="nation">
              ${nations.map((nation) => `<option value="${nation.code}" ${nation.code === "MAS" ? "selected" : ""}>${nation.name} - FIFA #${nation.rank} - Nation OVR ${nationOverall(nation.rank)}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span>Position</span>
            <select name="position">
              ${Object.keys(positions).map((position) => `<option>${position}</option>`).join("")}
            </select>
          </label>
          <label class="field">
            <span>Home situation</span>
            <select name="background">
              <option value="close">Close family, strong support</option>
              <option value="normal">Normal home, normal pressure</option>
              <option value="pressure">High expectations at home</option>
              <option value="strained">Strained home, less support</option>
            </select>
          </label>
          <button class="primary-btn" type="submit" data-start-button>Start academy offers</button>
          <p class="form-error" data-start-error aria-live="polite"></p>
          ${hasSave ? `<button class="secondary-btn full-btn" type="button" data-continue>Load saved career</button>` : ""}
          <p class="footer-note">${RANKING_NOTE} Lower-ranked nations give bigger home-hero fame when you perform.</p>
        </form>

        <div class="intro-board">
          <section class="panel save-slot-panel">
            <div class="panel-header compact-header">
              <div>
                <h2>One career slot</h2>
                <p>For now, this browser can hold one saved career.</p>
              </div>
              <span class="tag">${hasSave ? "Save found" : "Empty"}</span>
            </div>
            ${hasSave ? saveSlotTemplate(saveSummary, true) : `<div class="empty">No saved career in this browser yet. Starting a career creates the single save slot.</div>`}
          </section>
          <section class="panel">
            <h2>Career path</h2>
            <div class="career-ladder">
              ${ladderStep(1, "Academy Contracts", "Pick a youth deal before your first week.")}
              ${ladderStep(2, "Weekly Preparation", "Train slowly, protect support, then enter matchday.")}
              ${ladderStep(3, "Matchday", "Proceed to the game, receive rating and manager thoughts.")}
              ${ladderStep(4, "Press and Pathways", "MVPs face media. Agents and contracts react to ratings.")}
            </div>
          </section>
          <section class="panel">
            <h2>World logic</h2>
            <p class="microcopy">Clubs use fictional names inspired by real football geography and colours. National fame is tied to FIFA rank: being excellent for a smaller nation can make you a bigger national story.</p>
          </section>
          <section class="panel">
            <h2>Update history</h2>
            ${updateHistoryTemplate(3)}
          </section>
        </div>
      </div>
    </section>
  `;
}

function saveSlotTemplate(summary, includeLoad = false) {
  if (!summary) return `<div class="empty">No saved career in this browser.</div>`;
  return `
    <div class="save-slot-card">
      <div>
        <strong>${escapeHtml(summary.name)}</strong>
        <span>${escapeHtml(summary.stage)}</span>
      </div>
      <div class="save-slot-grid">
        ${statLine("Club", summary.club, "Current team")}
        ${statLine("Date", summary.gameDate, "Game calendar")}
        ${statLine("OVR", summary.overall ?? "-", "Player level")}
        ${statLine("Saved", summary.manualSavedAt || summary.savedAt, summary.manualSavedAt ? "Manual save" : "Latest save")}
      </div>
      ${includeLoad ? `<button class="secondary-btn full-btn" type="button" data-continue>Load this career</button>` : ""}
    </div>
  `;
}

function contractTemplate() {
  return `
    <section class="app-shell">
      ${topbarTemplate()}
      <div class="dashboard contract-dashboard">
        <div class="column">
          ${notificationsPanel()}
          <section class="panel">
            <h2>National spotlight</h2>
            <div class="meters">
              ${meter("Nation OVR", state.player.nationOverall, "blue")}
              ${meter("Home hero multiplier", state.player.countrySpotlight * 28, "purple")}
              ${meter("Fame", state.player.fame, "")}
            </div>
            <p class="footer-note">${state.player.nationality} is FIFA #${state.player.nationRank}. The lower the rank, the more your big performances can pull eyes to the country.</p>
          </section>
        </div>
        <div class="column wide-column">
          <section class="panel">
            <div class="panel-header">
              <div>
                <h2>Choose academy contract</h2>
                <p>Your first academy is not only ability. It affects pressure, distance, family, and pathway.</p>
              </div>
            </div>
            <div class="contract-grid">
              ${state.academyOffers.map(academyOfferTemplate).join("")}
            </div>
          </section>
        </div>
      </div>
    </section>
  `;
}

function academyOfferTemplate(offer) {
  return `
    <article class="contract-card">
      <h3>${escapeHtml(offer.club)}</h3>
      <p class="microcopy">${escapeHtml(offer.reason)}</p>
      <div class="offer-meta">
        <span class="tag">${escapeHtml(offer.country)}</span>
        <span class="tag">${escapeHtml(offer.role)}</span>
        <span class="tag">${escapeHtml(offer.distance)}</span>
        <span class="tag">$${formatMoney(offer.wage)}/wk</span>
        <span class="tag">Fit ${offer.fit}</span>
      </div>
      <div class="meters compact-meters">
        ${meter("Academy quality", offer.quality)}
        ${meter("Pathway", offer.pathway, "blue")}
        ${meter("Pressure", offer.pressure, offer.pressure > 72 ? "warn" : "")}
      </div>
      <button class="primary-btn" type="button" data-action="accept-academy" data-id="${offer.id}">Sign academy deal</button>
    </article>
  `;
}

function gameTemplate() {
  const player = state.player;
  const career = state.career;
  const age = `${player.ageYears}.${Math.floor(player.ageWeeks / 5)}`;
  const ratingText = career.lastRating ? career.lastRating.toFixed(1) : "none";
  const tab = state.ui?.tab || "dashboard";

  return `
    <section class="app-shell">
      ${topbarTemplate()}
      ${tabNav(tab)}
      ${tab === "dashboard" ? dashboardTab(age, ratingText) : ""}
      ${tab === "schedule" ? scheduleTab() : ""}
      ${tab === "leagues" ? leaguesTab() : ""}
      ${tab === "squad" ? squadTab() : ""}
      ${tab === "contracts" ? contractsTab() : ""}
      ${tab === "news" ? newsTab() : ""}
      ${tab === "activities" ? activitiesTab() : ""}
      ${tab === "updates" ? updatesTab() : ""}
    </section>
  `;
}

function tabNav(active) {
  const tabs = [
    ["dashboard", "Dashboard"],
    ["schedule", "Schedule"],
    ["leagues", "Leagues"],
    ["squad", "Squad"],
    ["contracts", "Agents & Contracts"],
    ["news", "News"],
    ["activities", "Activities"],
    ["updates", "Updates"]
  ];
  return `<nav class="tabbar">${tabs.map(([id, label]) => `<button class="tab-btn ${active === id ? "active" : ""}" type="button" data-action="tab" data-id="${id}">${label}</button>`).join("")}</nav>`;
}

function updateHistoryTemplate(limit = updateHistory.length) {
  return `
    <div class="update-list">
      ${updateHistory.slice(0, limit).map((item) => `
        <article class="update-card">
          <div>
            <strong>${escapeHtml(item.version)} - ${escapeHtml(item.title)}</strong>
            <span>${formatDisplayDate(item.date)}</span>
          </div>
          <ul>
            ${item.notes.map((note) => `<li>${escapeHtml(note)}</li>`).join("")}
          </ul>
        </article>
      `).join("")}
    </div>
  `;
}

function updatesTab() {
  return `
    <div class="page-grid">
      <section class="panel full-span">
        <div class="panel-header">
          <div>
            <h2>Update history</h2>
            <p>Recent changes so players know what moved and why.</p>
          </div>
          <span class="tag">${updateHistory[0].version}</span>
        </div>
        ${updateHistoryTemplate()}
      </section>
    </div>
  `;
}

function dashboardTab(age, ratingText) {
  const saveSummary = savedCareerSummary(state);
  return `
    <div class="dashboard">
      <div class="column">
        ${notificationsPanel()}
        ${matchCenterPanel()}
        ${playerPanel(age, ratingText)}
        ${walletPanel()}
      </div>
      <div class="column">
        ${weeklyPanel()}
        ${lifePanel()}
      </div>
      <div class="column">
        ${footballPanel()}
        <section class="panel">
          <div class="panel-header compact-header">
            <div>
              <h2>Save and load</h2>
              <p>One career slot is available in this browser.</p>
            </div>
            <span class="tag">1 slot</span>
          </div>
          ${saveSlotTemplate(saveSummary)}
          <div class="save-actions">
            <button class="secondary-btn" type="button" data-action="save">Save career</button>
            <button class="secondary-btn" type="button" data-action="load-career">Load career</button>
            <button class="danger-btn" type="button" data-action="reset">Reset career</button>
          </div>
        </section>
      </div>
    </div>
  `;
}

function weeklyPanel() {
  ensureWeekPlan();
  const activity = currentActivity();
  const manager = currentWorldClub()?.manager;
  if (!activity) {
    return `
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Matchday ready</h2>
            <p>The week is complete. Advance to enter the next fixture.</p>
          </div>
          <span class="tag">Day ${Math.min((state.career.activityIndex || 0) + 1, 7)}/7</span>
        </div>
        <button class="primary-btn" type="button" data-action="advance">Advance to matchday</button>
      </section>
    `;
  }
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Today</h2>
          <p>${escapeHtml(activity.day)} - ${escapeHtml(activity.title)}</p>
        </div>
        <span class="tag">Day ${(state.career.activityIndex || 0) + 1}/7</span>
      </div>
      <div class="manager-note">
        <strong>${escapeHtml(manager?.name || "Manager")} - ${escapeHtml(manager?.style || "Balanced")}</strong>
        <p>${escapeHtml(managerTrainingSummary(manager))}</p>
      </div>
      <div class="choice-section">
        <h3>${activity.type === "training" ? "Choose your response" : "Choose your life focus"}</h3>
        <div class="choice-grid">
          ${activityChoices(activity).map(activityChoiceTemplate).join("")}
        </div>
      </div>
      <div class="week-actions">
        <button class="primary-btn" type="button" data-action="advance">Advance to next activity</button>
        <button class="secondary-btn" type="button" data-action="save">Save</button>
      </div>
      <p class="footer-note">Skipping training can reduce loneliness, but trust drops fast. Low fitness affects selection and minutes.</p>
    </section>
  `;
}

function activityChoiceTemplate(choice) {
  const active = (selected.activity || "") === choice.id;
  return `
    <button class="choice-btn ${active ? "active" : ""}" type="button" data-action="activity-choice" data-id="${choice.id}">
      <strong>${escapeHtml(choice.title)}</strong>
      <span>${escapeHtml(choice.text)}</span>
    </button>
  `;
}

function ensureWeekPlan() {
  if (!state.career.weekPlan?.length || state.career.weekPlanWeek !== state.career.week) {
    state.career.weekPlan = createWeeklyPlan();
    state.career.weekPlanWeek = state.career.week;
    state.career.activityIndex = 0;
    state.career.missedTrainingThisWeek = 0;
    state.career.lifeChoicesThisWeek = 0;
    state.career.trainingDaysThisWeek = state.career.weekPlan.filter((item) => item.type === "training").length;
  }
  const activity = currentActivity();
  const choices = activity ? activityChoices(activity) : [];
  if (choices.length && !choices.some((choice) => choice.id === selected.activity)) {
    selected.activity = choices[0].id;
  }
}

function currentActivity() {
  return state.career.weekPlan?.[state.career.activityIndex || 0] || null;
}

function createWeeklyPlan() {
  const manager = currentWorldClub()?.manager || {};
  const focus = manager.trainingFocus || "technical";
  const secondary = manager.secondaryFocus || "tactical";
  const sessions = clamp(Math.round(manager.weeklySessions || 4), 3, 5);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  const plan = [];
  const focusCycle = [focus, secondary, focus, "matchprep", manager.style === "Youth trust" ? "technical" : "physical"];

  for (let index = 0; index < sessions; index += 1) {
    const day = days[index];
    const trainingFocus = focusCycle[index % focusCycle.length];
    plan.push({
      type: "training",
      day,
      focus: trainingFocus,
      title: trainingTitle(trainingFocus, manager),
      strict: (manager.strictness || 55) > 68 && Math.random() < 0.58
    });
  }

  while (plan.length < 7) {
    const day = days[plan.length];
    plan.push({ type: "life", day, title: "Life window", focus: "life", strict: false });
  }

  return plan;
}

function trainingTitle(focus, manager) {
  if (focus === "matchprep") return "Match strategy";
  const group = attributeGroups[focus]?.title || "Training";
  return `${group} session${manager?.strictness > 72 ? " (strict)" : ""}`;
}

function managerTrainingSummary(manager) {
  if (!manager) return "Balanced staff schedule.";
  const focus = attributeGroups[manager.trainingFocus]?.title || "Technical";
  const secondary = attributeGroups[manager.secondaryFocus]?.title || "Tactical";
  return `${manager.style} manager. Usually ${manager.weeklySessions || 4} training days, main focus ${focus}, secondary focus ${secondary}, strictness ${round(manager.strictness || 50)}.`;
}

function activityChoices(activity) {
  if (activity.type === "life") {
    return Object.entries(lifeActions).map(([id, action]) => ({
      id: `life:${id}`,
      title: action.title,
      text: action.text
    }));
  }

  const focusTitle = activity.focus === "matchprep" ? "Match Prep" : attributeGroups[activity.focus]?.title || "Training";
  const choices = [
    { id: "train:attend", title: `Attend ${focusTitle}`, text: "Normal session. Trust rises and development follows the manager plan." },
    { id: "train:extra", title: "Extra work", text: "More growth and trust, but fitness and stress take a bigger hit." },
    { id: "train:absent", title: "Do not appear", text: "Protect life or avoid the session. Manager trust drops heavily." }
  ];

  if (!activity.strict) {
    choices.splice(2, 0, { id: "train:life", title: "Choose life today", text: "Reduce loneliness and stress, but staff see you missing football work." });
  }

  return choices;
}

function lifePanel() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Life</h2>
          <p>Support and pressure now affect match consistency.</p>
        </div>
        <span class="tag">${lifeLabel()}</span>
      </div>
      <div class="meters">
        ${meter("Family support", state.life.family, "blue")}
        ${meter("Friends", state.life.friends)}
        ${meter("Relationship", state.life.relationship, "purple")}
        ${meter("Loneliness", state.life.loneliness, state.life.loneliness > 70 ? "risk" : state.life.loneliness > 50 ? "warn" : "")}
        ${meter("Stress", state.life.stress, state.life.stress > 74 ? "risk" : state.life.stress > 55 ? "warn" : "")}
        ${meter("Wellbeing", state.life.wellbeing, state.life.wellbeing < 35 ? "risk" : state.life.wellbeing < 55 ? "warn" : "")}
        ${meter("Family pressure", state.life.familyPressure, state.life.familyPressure > 70 ? "warn" : "")}
      </div>
    </section>
  `;
}

function matchdayTemplate() {
  const match = state.pendingMatch;
  return `
    <section class="app-shell">
      ${topbarTemplate()}
      <div class="dashboard contract-dashboard">
        <div class="column">
          ${notificationsPanel()}
          ${playerPanel(`${state.player.ageYears}.${Math.floor(state.player.ageWeeks / 5)}`, state.career.lastRating ? state.career.lastRating.toFixed(1) : "none")}
        </div>
        <div class="column wide-column">
          <section class="panel match-panel">
            <div class="panel-header">
              <div>
                <h2>Matchday</h2>
                <p>${escapeHtml(state.player.club)} vs ${escapeHtml(match.opponent)}</p>
              </div>
              <span class="tag">${escapeHtml(match.competition)}</span>
            </div>
            <div class="scoreline">
              <span>${escapeHtml(state.player.club)}</span>
              <strong>vs</strong>
              <span>${escapeHtml(match.opponent)}</span>
            </div>
            <div class="offer-meta">
              <span class="tag">${formatDisplayDate(match.date)}</span>
              <span class="tag">Matchday ${match.round}</span>
              <span class="tag">${match.home ? "Home" : "Away"}</span>
            </div>
            <div class="manager-note">
              <strong>Manager before the game</strong>
              <p>${escapeHtml(match.previewThought)}</p>
            </div>
            <div class="offer-meta">
              <span class="tag">Week prep: ${(careerActions[selected.career] || careerActions.matchprep).title}</span>
              <span class="tag">Fitness ${round(state.career.fitness)}</span>
              <span class="tag">Form ${round(state.career.form)}</span>
              <span class="tag">Stress ${round(state.life.stress)}</span>
            </div>
            <button class="primary-btn" type="button" data-action="proceed-match">Proceed to game</button>
          </section>
        </div>
      </div>
    </section>
  `;
}

function postMatchTemplate() {
  const result = state.pendingMatch.result;
  const ratingDisplay = result.rating > 0 ? result.rating.toFixed(1) : "N/A";
  return `
    <section class="app-shell">
      ${topbarTemplate()}
      <div class="dashboard contract-dashboard">
        <div class="column">
          ${notificationsPanel()}
        </div>
        <div class="column wide-column">
          <section class="panel match-panel">
            <div class="panel-header">
              <div>
                <h2>Post-match</h2>
                <p>${escapeHtml(state.pendingMatch.competition)} report</p>
              </div>
              <span class="tag">${result.mvp ? "MVP" : "Team rating"}</span>
            </div>
            <div class="rating-big">${ratingDisplay}</div>
            ${result.scoreline ? `
              <div class="scoreline final-score">
                <span>${escapeHtml(result.homeTeam)}</span>
                <strong>${result.homeScore} - ${result.awayScore}</strong>
                <span>${escapeHtml(result.awayTeam)}</span>
              </div>
              ${matchEventsTemplate(result.events || [])}
              ${matchStatsTemplate(result.teamStats)}
              ${playerMatchStatsTemplate(result.playerStats)}
            ` : ""}
            <div class="manager-note">
              <strong>Manager thoughts</strong>
              <p>${escapeHtml(result.managerThought)}</p>
            </div>
            <div class="event-item ${result.rating >= 7.6 ? "good" : result.rating < 5.7 ? "warning" : ""}">
              <h3>${escapeHtml(result.headline)}</h3>
              <p class="microcopy">${escapeHtml(result.summary)}</p>
            </div>
            ${matchHighlightsTemplate(result.highlights || [])}
            ${result.mvp ? pressOptionsTemplate(result) : `<button class="primary-btn" type="button" data-action="finish-week">Continue career</button>`}
          </section>
        </div>
      </div>
    </section>
  `;
}

function matchHighlightsTemplate(highlights) {
  if (!highlights.length) {
    return `<div class="empty">No on-ball highlights this week.</div>`;
  }
  return `
    <div class="highlight-reel">
      <div class="panel-header compact-header">
        <div>
          <h3>Key highlights</h3>
          <p>Only moments where you affected the ball, forced a foul, or ended the phase.</p>
        </div>
      </div>
      <div class="highlight-list">
        ${highlights.map((item) => `
          <article class="highlight-card ${escapeHtml(item.type)}">
            <span>${item.minute}'</span>
            <div>
              <strong>${escapeHtml(item.title)}</strong>
              <p>${escapeHtml(item.body)}</p>
            </div>
          </article>
        `).join("")}
      </div>
    </div>
  `;
}

function pressOptionsTemplate(result) {
  return `
    <div class="choice-section">
      <h3>Press conference</h3>
      <div class="choice-grid">
        <button class="choice-btn" type="button" data-action="press" data-id="humble">
          <strong>Credit the team</strong>
          <span>Lower arrogance, steady fame, strong dressing room reaction.</span>
        </button>
        <button class="choice-btn" type="button" data-action="press" data-id="confident">
          <strong>Own the moment</strong>
          <span>More fame if rating was huge, risk if attitude is already high.</span>
        </button>
        <button class="choice-btn" type="button" data-action="press" data-id="country">
          <strong>Speak for ${escapeHtml(state.player.nationality)}</strong>
          <span>Best for home-hero growth, especially from a lower-ranked nation.</span>
        </button>
        <button class="choice-btn" type="button" data-action="press" data-id="skip">
          <strong>Skip media</strong>
          <span>News outlet decides the angle based on fame, attitude, and performance.</span>
        </button>
      </div>
    </div>
    <p class="footer-note">Because you were MVP at ${result.rating.toFixed(1)}, reporters want you in the room.</p>
  `;
}

function topbarTemplate() {
  const player = state.player;
  return `
    <header class="topbar">
      <div class="player-title">
        <h1>${escapeHtml(player.name)}</h1>
        <p>${escapeHtml(player.position)} - ${escapeHtml(player.club)} - ${escapeHtml(player.stage)}</p>
      </div>
      <div class="top-stats">
        <span class="pill">${escapeHtml(player.nationality)} FIFA #${player.nationRank}</span>
        <span class="pill">${formatDisplayDate(currentGameDate())}</span>
        <span class="pill">Fame ${round(player.fame)}</span>
        <span class="pill">Attitude ${attitudeLabel()}</span>
        <button class="small-btn" type="button" data-action="new-career">New career</button>
      </div>
    </header>
  `;
}

function notificationsPanel() {
  return `
    <section class="panel notification-panel">
      <div class="panel-header">
        <div>
          <h2>Notifications Center</h2>
          <p>Recent consequences and turning points.</p>
        </div>
      </div>
      <div class="events">
        ${state.log.slice(0, 7).map(eventTemplate).join("") || `<div class="empty">No notifications yet.</div>`}
      </div>
    </section>
  `;
}

function matchCenterPanel() {
  const fixture = nextFixture();
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Next match</h2>
          <p>${formatDisplayDate(fixture.date)} - ${escapeHtml(fixture.competition)}</p>
        </div>
      </div>
      <div class="stat-grid">
        ${statLine("Opponent", fixture.opponent, fixture.home ? "Home" : "Away")}
        ${statLine("Recent avg", recentAverage() ? recentAverage().toFixed(2) : "none", "Last five ratings")}
        ${statLine("Manager trust", round(state.career.coachTrust), "Selection confidence")}
        ${statLine("Fame", round(state.player.fame), "Public attention")}
      </div>
    </section>
  `;
}

function playerPanel(age, ratingText) {
  const pos = positions[state.player.position];
  return `
    <section class="panel player-panel">
      <div class="panel-header">
        <div>
          <h2>Player</h2>
          <p>Age ${age} - ${escapeHtml(state.player.role)} - last rating ${ratingText}</p>
        </div>
        <span class="tag">OVR ${round(overall())}</span>
      </div>
      <div class="pitch" aria-label="Football pitch showing player position">
        <span class="player-dot" style="--x:${pos.x}; --y:${pos.y};">${pos.short}</span>
        <span class="pitch-label">${escapeHtml(state.player.club)}</span>
      </div>
    </section>
  `;
}

function walletPanel() {
  const contract = currentContractSummary();
  const net = projectedWeeklyNet();
  return `
    <section class="panel wallet-panel">
      <div class="panel-header">
        <div>
          <h2>Wallet</h2>
          <p>Salary is paid weekly after agent fees and living costs.</p>
        </div>
        <span class="tag">$${formatMoney(state.player.savings)}</span>
      </div>
      <div class="wallet-total">
        <span>Balance</span>
        <strong>$${formatMoney(state.player.savings)}</strong>
      </div>
      <div class="stat-grid compact-stat-grid">
        ${statLine("Gross/wk", `$${formatMoney(contract.wage)}`, contract.role)}
        ${statLine("Net/wk", `$${formatMoney(net.net)}`, net.agentFee ? `Agent fee $${formatMoney(net.agentFee)}` : "No agent fee")}
        ${statLine("Last paid", `$${formatMoney(state.player.lastNetPay || 0)}`, "Last week net")}
        ${statLine("Earned", `$${formatMoney(state.player.totalEarnings || 0)}`, "Career gross")}
      </div>
    </section>
  `;
}

function footballPanel() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Football attributes</h2>
          <p>Main groups are the overall of their sub-stats.</p>
        </div>
      </div>
      <div class="attribute-groups">
        ${Object.keys(attributeGroups).map(attributeGroupTemplate).join("")}
      </div>
      <div class="meters inset-stats">
        ${meter("Coach trust", state.career.coachTrust, "blue")}
        ${meter("Reputation", state.career.reputation, "purple")}
        ${meter("Form", state.career.form)}
        ${meter("Fitness", state.career.fitness, state.career.fitness < 35 ? "risk" : state.career.fitness < 55 ? "warn" : "")}
      </div>
      <div class="stat-grid inset-stats">
        ${statLine("Apps", state.career.appearances, "Season")}
        ${statLine(state.player.position === "Goalkeeper" ? "Clean sheets" : "Goals", state.player.position === "Goalkeeper" ? state.career.cleanSheets : state.career.goals, "End product")}
        ${statLine("Assists", state.career.assists, "Created")}
        ${statLine("Avg rating", state.career.avgRating ? state.career.avgRating.toFixed(2) : "none", "Season")}
      </div>
    </section>
  `;
}

function scheduleTab() {
  const fixture = nextFixture();
  const calendars = Object.entries(leagueConfigs)
    .filter(([, config]) => config.level === 1 || config.country === currentWorldClub()?.country)
    .slice(0, 14);
  return `
    <div class="page-grid">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Player schedule</h2>
            <p>${formatDisplayDate(currentGameDate())} - career calendar</p>
          </div>
          <span class="tag">${escapeHtml(currentLeagueName())}</span>
        </div>
        <div class="schedule-list">
          ${upcomingFixtures(8).map((item, index) => `
            <article class="schedule-card ${index === 0 ? "active" : ""}">
              <span>${formatDisplayDate(item.date)}</span>
              <div>
                <strong>${escapeHtml(item.home ? state.player.club : item.opponent)} vs ${escapeHtml(item.home ? item.opponent : state.player.club)}</strong>
                <p>${escapeHtml(item.competition)} - ${item.home ? "home" : "away"} - match ${item.round}/${item.maxMatches}</p>
              </div>
            </article>
          `).join("")}
        </div>
      </section>
      <section class="panel">
        <h2>League calendars</h2>
        <div class="schedule-list">
          ${calendars.map(([league, config]) => {
            const calendar = leagueCalendar(config);
            return `
              <article class="schedule-card">
                <span>${config.matches} matches</span>
                <div>
                  <strong>${escapeHtml(league)}</strong>
                  <p>${formatDisplayDate(calendar.start)} to ${formatDisplayDate(calendar.end)} - ${config.clubs} clubs</p>
                </div>
              </article>
            `;
          }).join("")}
        </div>
      </section>
    </div>
  `;
}

function attributeGroupTemplate(groupKey) {
  const group = attributeGroups[groupKey];
  const value = groupOverall(groupKey);
  const type = groupKey === "tactical" ? "blue" : groupKey === "mentality" ? "purple" : "";
  return `
    <div class="attribute-card">
      ${meter(group.title, value, type)}
      <div class="substat-grid">
        ${group.subs.map(([key, label]) => `
          <div class="substat">
            <span>${label}</span>
            <strong>${round(state.player.attributes[groupKey][key])}</strong>
          </div>
        `).join("")}
      </div>
    </div>
  `;
}

function agentPanel() {
  const agent = state.agent.current;
  ensureAgentCandidates();
  const candidates = state.agent.candidates;
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Agent room</h2>
          <p>Agents are always available. Better performances attract stronger representatives with higher fees.</p>
        </div>
      </div>
      ${agent ? `
        <div class="agent-card">
          <strong>${escapeHtml(agent.name)}</strong>
          <span class="microcopy">${escapeHtml(agent.style)}</span>
          ${meter("Quality", agent.quality)}
          ${meter("Negotiation", agent.negotiation, "blue")}
          ${meter("Connections", agent.connections, "purple")}
          ${meter("Care", agent.care)}
          <div class="offer-meta">
            <span class="tag">${agent.feeRate}% salary fee</span>
            <span class="tag">Est. $${formatMoney(Math.round((state.player.wage || 0) * agent.feeRate / 100))}/wk</span>
          </div>
          <button class="danger-btn" type="button" data-action="sack-agent">Sack agent</button>
        </div>
      ` : `<div class="empty">No agent hired yet. Compare representatives and choose when it makes sense.</div>`}
      ${candidates.length ? `<div class="candidates">${candidates.map(candidateTemplate).join("")}</div>` : ""}
    </section>
  `;
}

function offersPanel() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Contracts and offers</h2>
          <p>Perform well to renew, move, or get a better role.</p>
        </div>
      </div>
      <div class="offers">
        ${state.agent.offers.length ? state.agent.offers.map(offerTemplate).join("") : `<div class="empty">No active offers. Ratings, fame, and agents create interest.</div>`}
      </div>
    </section>
  `;
}

function leaguesTab() {
  const activeLeague = state.ui.league || currentLeagueName();
  const isCompetition = Boolean(state.world.competitions[activeLeague]);
  const activeCountry = activeLeagueCountry(activeLeague);
  const countries = leagueCountries();
  const countryLeagues = leaguesForCountry(activeCountry);
  const table = isCompetition ? state.world.competitions[activeLeague].table : state.world.leagues[activeLeague] || [];
  const config = isCompetition ? state.world.competitions[activeLeague] : leagueConfigs[activeLeague] || { clubs: 20, matches: 30 };
  const competitionNames = Object.keys(state.world.competitions);
  const activeLeaders = state.world.leaders?.[activeLeague] || emptyLeaderboards();
  const view = state.ui.leagueView || "table";
  return `
    <div class="page-grid">
      <section class="panel full-span">
        <div class="panel-header">
          <div>
            <h2>Leagues</h2>
            <p>Tables now update from real scorelines, so GD balances across each matchday.</p>
          </div>
          <span class="tag">${escapeHtml(activeLeague)}</span>
        </div>
        <div class="filter-row">
          ${countries.map((country) => `<button class="filter-btn ${activeCountry === country && !isCompetition ? "active" : ""}" type="button" data-action="league-country" data-id="${escapeHtml(country)}">${escapeHtml(country)}</button>`).join("")}
          <button class="filter-btn ${isCompetition ? "active" : ""}" type="button" data-action="league-country" data-id="Competitions">Competitions</button>
        </div>
        <div class="filter-row compact-filters">
          ${isCompetition
            ? competitionNames.map((competition) => `<button class="filter-btn ${activeLeague === competition ? "active" : ""}" type="button" data-action="league-filter" data-id="${escapeHtml(competition)}">${escapeHtml(competition)}</button>`).join("")
            : countryLeagues.map((league) => `<button class="filter-btn ${activeLeague === league ? "active" : ""}" type="button" data-action="league-filter" data-id="${escapeHtml(league)}">${escapeHtml(league)}</button>`).join("")}
        </div>
        <div class="filter-row compact-filters">
          ${[
            ["table", "Table & Scores"],
            ["fixtures", "Fixtures"],
            ["stats", "Stats"]
          ].map(([id, label]) => `<button class="filter-btn ${view === id ? "active" : ""}" type="button" data-action="league-view" data-id="${id}">${label}</button>`).join("")}
        </div>
        <div class="offer-meta">
          <span class="tag">${config.clubs} clubs</span>
          <span class="tag">${config.matches} matches each</span>
          ${config.rule ? `<span class="tag">${escapeHtml(config.rule)}</span>` : ""}
        </div>
      </section>
      ${view === "table" ? `
        <section class="panel full-span">
          <h2>Table</h2>
          ${leagueTableTemplate(table)}
        </section>
        <section class="panel full-span">
          ${scoreboardTemplate(activeLeague)}
        </section>
      ` : ""}
      ${view === "fixtures" ? `
        <section class="panel full-span">
          ${fixturesTemplate(activeLeague)}
        </section>
      ` : ""}
      ${view === "stats" ? `
        <section class="panel full-span">
          <div class="panel-header">
            <div>
              <h2>${escapeHtml(activeLeague)} stats</h2>
              <p>Stats scale with matches played. After matchday one, nobody should look like they played half a season.</p>
            </div>
          </div>
          ${leaderboardsTemplate(activeLeaders)}
        </section>
      ` : ""}
      <section class="panel full-span">
        <h2>Current club direction</h2>
        ${clubDirectionTemplate(currentWorldClub())}
      </section>
    </div>
  `;
}

function leagueCountries() {
  const countries = Object.keys(state.world.leagues || {})
    .map((league) => activeLeagueCountry(league))
    .filter((country) => country !== "Competitions");
  return [...new Set(countries)].sort((a, b) => {
    if (a === "Academy") return -1;
    if (b === "Academy") return 1;
    return a.localeCompare(b);
  });
}

function activeLeagueCountry(league) {
  if (state.world.competitions?.[league]) return "Competitions";
  if (league === "Academy League") return "Academy";
  return leagueConfigs[league]?.country || "Academy";
}

function leaguesForCountry(country) {
  if (country === "Competitions") return Object.keys(state.world.competitions || {});
  return Object.keys(state.world.leagues || {})
    .filter((league) => activeLeagueCountry(league) === country)
    .sort((a, b) => {
      if (a === "Academy League") return -1;
      if (b === "Academy League") return 1;
      return (leagueConfigs[a]?.level || 0) - (leagueConfigs[b]?.level || 0) || a.localeCompare(b);
    });
}

function firstLeagueForCountry(country) {
  return leaguesForCountry(country)[0] || currentLeagueName();
}

function leagueTableTemplate(table) {
  return `
    <div class="table-wrap">
      <table class="league-table compact-league-table">
        <thead>
          <tr><th>#</th><th>Club</th><th>P</th><th>W</th><th>D</th><th>L</th><th>GD</th><th>Pts</th><th>Form</th></tr>
        </thead>
        <tbody>
          ${table.map((row, index) => `
            <tr class="${row.club === state.player.club ? "current-row" : ""}">
              <td>${index + 1}</td>
              <td>${escapeHtml(row.club)}</td>
              <td>${row.p}</td>
              <td>${row.w}</td>
              <td>${row.d}</td>
              <td>${row.l}</td>
              <td>${row.gd > 0 ? "+" : ""}${row.gd}</td>
              <td><strong>${row.pts}</strong></td>
              <td>${escapeHtml(row.form)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function scoreboardTemplate(league) {
  const rounds = state.world.fixtures?.[league] || [];
  if (!rounds.length) return `<div class="empty">No fixtures generated for this competition yet.</div>`;
  const activeRound = clamp(Number(state.ui.scoreRound || latestRoundNumber(league)), 1, rounds.length);
  const round = rounds[activeRound - 1] || rounds[0];
  return `
    <div class="panel-header">
      <div>
        <h2>Matchday ${round.round} scoreline</h2>
        <p>${formatDisplayDate(round.date)} - completed scores appear after that round is played.</p>
      </div>
      <span class="tag">${round.matches.filter((match) => match.played).length}/${round.matches.length} played</span>
    </div>
    ${roundSelectorTemplate(league, activeRound, rounds.length)}
    <div class="scoreboard-grid">
      ${round.matches.map(matchCardTemplate).join("")}
    </div>
  `;
}

function fixturesTemplate(league) {
  const rounds = state.world.fixtures?.[league] || [];
  if (!rounds.length) return `<div class="empty">No fixtures generated for this competition yet.</div>`;
  const activeRound = clamp(Number(state.ui.scoreRound || latestRoundNumber(league)), 1, rounds.length);
  const start = Math.max(1, activeRound - 2);
  const end = Math.min(rounds.length, activeRound + 3);
  return `
    <div class="panel-header">
      <div>
        <h2>Fixtures</h2>
        <p>Browse each matchweek to see who plays next and which results already happened.</p>
      </div>
      <span class="tag">Matchday ${activeRound}</span>
    </div>
    ${roundSelectorTemplate(league, activeRound, rounds.length)}
    <div class="schedule-list">
      ${rounds.slice(start - 1, end).map((round) => `
        <article class="fixture-round ${round.round === activeRound ? "active" : ""}">
          <div class="fixture-round-head">
            <strong>Matchday ${round.round}</strong>
            <span>${formatDisplayDate(round.date)}</span>
          </div>
          <div class="scoreboard-grid">
            ${round.matches.slice(0, 10).map(matchCardTemplate).join("")}
          </div>
        </article>
      `).join("")}
    </div>
  `;
}

function roundSelectorTemplate(league, activeRound, totalRounds) {
  const start = Math.max(1, Math.min(activeRound - 5, totalRounds - 11));
  const end = Math.min(totalRounds, start + 11);
  const options = Array.from({ length: end - start + 1 }, (_, index) => start + index);
  return `
    <div class="filter-row compact-filters">
      ${activeRound > 1 ? `<button class="filter-btn" type="button" data-action="score-round" data-id="${activeRound - 1}">Prev</button>` : ""}
      ${options.map((round) => `<button class="filter-btn ${round === activeRound ? "active" : ""}" type="button" data-action="score-round" data-id="${round}">MD ${round}</button>`).join("")}
      ${activeRound < totalRounds ? `<button class="filter-btn" type="button" data-action="score-round" data-id="${activeRound + 1}">Next</button>` : ""}
    </div>
  `;
}

function matchCardTemplate(match) {
  const score = match.played ? `${match.homeScore} - ${match.awayScore}` : "vs";
  return `
    <article class="score-card ${match.played ? "played" : ""}">
      <span>${escapeHtml(match.home)}</span>
      <strong>${score}</strong>
      <span>${escapeHtml(match.away)}</span>
      ${match.played ? matchEventsTemplate(match.events || []) : `<div class="match-events muted-events">Incidents appear after full time.</div>`}
    </article>
  `;
}

function matchEventsTemplate(events) {
  if (!events.length) return `<div class="match-events muted-events">No major incidents recorded.</div>`;
  return `
    <div class="match-events">
      ${events.map((event) => `
        <div class="match-event ${event.type}">
          <span>${event.minute}'</span>
          <strong>${eventLabel(event)}</strong>
          <p>${escapeHtml(event.player)}${event.assist ? `, assist ${escapeHtml(event.assist)}` : ""} <small>${escapeHtml(event.team)}</small></p>
        </div>
      `).join("")}
    </div>
  `;
}

function matchStatsTemplate(stats) {
  if (!stats) return "";
  const rows = [
    ["Possession", `${stats.home.possession}%`, `${stats.away.possession}%`],
    ["Shots", stats.home.shots, stats.away.shots],
    ["On target", stats.home.onTarget, stats.away.onTarget],
    ["Passes", stats.home.passes, stats.away.passes],
    ["Pass accuracy", `${stats.home.passAccuracy}%`, `${stats.away.passAccuracy}%`],
    ["Corners", stats.home.corners, stats.away.corners],
    ["Fouls", stats.home.fouls, stats.away.fouls],
    ["Cards", `${stats.home.yellow}Y ${stats.home.red}R`, `${stats.away.yellow}Y ${stats.away.red}R`]
  ];
  return `
    <div class="match-stat-card">
      <div class="match-stat-head">
        <strong>${escapeHtml(stats.home.team)}</strong>
        <span>Match stats</span>
        <strong>${escapeHtml(stats.away.team)}</strong>
      </div>
      ${rows.map(([label, home, away]) => `
        <div class="match-stat-row">
          <strong>${home}</strong>
          <span>${label}</span>
          <strong>${away}</strong>
        </div>
      `).join("")}
    </div>
  `;
}

function playerMatchStatsTemplate(stats) {
  if (!stats) return "";
  const minutesLabel = stats.minutes && stats.startMinute && stats.endMinute
    ? `${stats.startMinute}-${stats.endMinute} (${stats.minutes})`
    : stats.minutes;
  const rows = [
    ["Minutes", minutesLabel],
    ["Passes", stats.passes],
    ["Pass accuracy", `${stats.passAccuracy}%`],
    ["Key passes", stats.keyPasses],
    ["Distance", `${stats.kmCovered} km`],
    ["Shots", stats.shots],
    ["Tackles", stats.tackles],
    [state.player.position === "Goalkeeper" ? "Saves" : "Interceptions", state.player.position === "Goalkeeper" ? stats.saves : stats.interceptions]
  ];
  return `
    <div class="player-match-card">
      <div class="panel-header compact-header">
        <div>
          <h3>Your match stats</h3>
          <p>${escapeHtml(stats.role)} - ${stats.started ? "started" : stats.minutes > 0 ? "substitute" : "not used"}</p>
        </div>
      </div>
      <div class="stat-grid compact-stat-grid">
        ${rows.map(([label, value]) => statLine(label, value, "Match")).join("")}
      </div>
    </div>
  `;
}

function eventLabel(event) {
  if (event.type === "goal") return "Goal";
  if (event.type === "red") return "Red card";
  return "Yellow card";
}

function latestRoundNumber(league) {
  const rounds = state.world?.fixtures?.[league] || [];
  if (!rounds.length) return 1;
  const firstUnplayed = rounds.find((round) => round.matches.some((match) => !match.played));
  if (firstUnplayed) return firstUnplayed.round;
  return rounds[rounds.length - 1].round;
}

function leaderboardsTemplate(leaders) {
  const activeType = state.ui.leaderboard || "scorers";
  const options = [
    ["scorers", "Top scorers", "G"],
    ["assists", "Top assists", "A"],
    ["redCards", "Red cards", "RC"],
    ["ratings", "Ratings", "RT"]
  ];
  const [key, title, label] = options.find(([id]) => id === activeType) || options[0];
  return `
    <div class="filter-row compact-filters">
      ${options.map(([id, labelText]) => `<button class="filter-btn ${activeType === id ? "active" : ""}" type="button" data-action="leaderboard-filter" data-id="${id}">${labelText}</button>`).join("")}
    </div>
    ${leaderboardColumn(title, leaders[key] || [], label)}
  `;
}

function leaderboardColumn(title, rows, label) {
  return `
    <div class="leaderboard-card">
      <h3>${title}</h3>
      ${rows.length ? rows.slice(0, 12).map((row, index) => `
        <div class="leader-row">
          <span>${index + 1}. ${escapeHtml(row.name)}<small>${escapeHtml(row.club)}</small></span>
          <strong>${row.value}${label === "RT" ? "" : ""}</strong>
        </div>
      `).join("") : `<div class="empty">No stats yet. Play matches first.</div>`}
    </div>
  `;
}

function squadTab() {
  const club = selectedWorldClub();
  const roster = rosterForClub(club);
  return `
    <div class="page-grid">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Squad and teammates</h2>
            <p>Academy squads are generated to match club strength. Senior squads include altered inspired names plus generated depth.</p>
          </div>
        </div>
        <label class="field inline-field">
          <span>View club</span>
          <select data-action="club-select">
            <option value="current">Current club</option>
            ${state.world.clubs.map((item) => `<option value="${item.id}" ${state.ui.club === item.id ? "selected" : ""}>${escapeHtml(item.name)}</option>`).join("")}
          </select>
        </label>
        <div class="squad-header">
          <div>
            <h3>${escapeHtml(clubDisplayName(club))}</h3>
            <p class="microcopy">${escapeHtml(club.country)} - Club OVR ${club.overall}</p>
          </div>
          <span class="tag">${state.player.club.includes("Academy") && club.id === currentWorldClub().id ? "Academy squad" : "Senior squad"}</span>
        </div>
        ${rosterTableTemplate(roster, club)}
      </section>
      <section class="panel">
        <h2>Club leadership</h2>
        ${clubDirectionTemplate(club)}
      </section>
    </div>
  `;
}

function rosterTableTemplate(roster, club) {
  const playerRow = club.id === currentWorldClub().id ? [careerPlayerRecord()] : [];
  const rows = [...playerRow, ...roster].slice(0, 26);
  return `
    <div class="table-wrap">
      <table class="league-table squad-table">
        <thead>
          <tr><th>Name</th><th>Pos</th><th>Age</th><th>OVR</th><th>Potential</th><th>Nation / Value</th></tr>
        </thead>
        <tbody>
          ${rows.map((player) => `
            <tr class="${player.isYou ? "current-row" : ""}">
              <td>${escapeHtml(player.name)}</td>
              <td>${escapeHtml(player.position)}</td>
              <td>${player.age}</td>
              <td><strong>${player.overall}</strong></td>
              <td>${player.potential}</td>
              <td>${escapeHtml(player.nationality || player.country || "")}<br>$${formatMoney(player.value)}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

function currentContractPanel() {
  const contract = currentContractSummary();
  const pay = projectedWeeklyNet();
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Current contract</h2>
          <p>${escapeHtml(contract.club)} - signed ${formatDisplayDate(contract.started)}</p>
        </div>
        <span class="tag">$${formatMoney(contract.wage)}/wk</span>
      </div>
      <div class="stat-grid compact-stat-grid">
        ${statLine("Stage", contract.stage, contract.tier)}
        ${statLine("Role", contract.role, "Squad pathway")}
        ${statLine("Gross pay", `$${formatMoney(pay.gross)}/wk`, "Before fees")}
        ${statLine("Net pay", `$${formatMoney(pay.net)}/wk`, `Costs $${formatMoney(pay.livingCost)}${pay.agentFee ? `, agent $${formatMoney(pay.agentFee)}` : ""}`)}
      </div>
    </section>
  `;
}

function contractsTab() {
  return `
    <div class="dashboard contract-dashboard">
      <div class="column">
        ${currentContractPanel()}
        ${agentPanel()}
      </div>
      <div class="column wide-column">
        ${offersPanel()}
        <section class="panel">
          <h2>Market logic</h2>
          <p class="microcopy">Higher overall players have higher values and stronger desire for larger clubs. Chairmen can try ambitious signings, but the game blocks absurd moves like elite 94 OVR players joining 20-40 OVR clubs without a logical reason.</p>
        </section>
      </div>
    </div>
  `;
}

function newsTab() {
  const countries = ["All", "Global", ...new Set(state.world.news.map((item) => item.country))].filter(Boolean);
  const active = state.ui.newsCountry || "All";
  const news = active === "All" ? state.world.news : state.world.news.filter((item) => item.country === active);
  return `
    <div class="page-grid">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>News</h2>
            <p>Filter country coverage and watch pressure build around clubs, transfers, and national stories.</p>
          </div>
        </div>
        <div class="filter-row">
          ${countries.map((country) => `<button class="filter-btn ${active === country ? "active" : ""}" type="button" data-action="news-filter" data-id="${escapeHtml(country)}">${escapeHtml(country)}</button>`).join("")}
        </div>
        <div class="news-list">
          ${news.length ? news.slice(0, 18).map(newsTemplate).join("") : `<div class="empty">No news for this filter yet.</div>`}
        </div>
      </section>
      <section class="panel">
        <h2>Broadcasters</h2>
        <div class="events">
          ${broadcasters.map((source) => `
            <article class="event-item">
              <h3>${escapeHtml(source.name)}</h3>
              <p class="microcopy">${escapeHtml(source.country)} - ${escapeHtml(source.focus)}</p>
            </article>
          `).join("")}
        </div>
      </section>
    </div>
  `;
}

function activitiesTab() {
  ensureActivities();
  const activities = state.activities;
  return `
    <div class="page-grid">
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Activities</h2>
            <p>Use earned money carefully. Investments can help your future or punish bad timing.</p>
          </div>
          <span class="tag">Wallet $${formatMoney(state.player.savings)}</span>
        </div>
        <div class="offers">
          ${activities.offers.map(investmentOfferTemplate).join("")}
        </div>
      </section>
      <section class="panel">
        <div class="panel-header">
          <div>
            <h2>Active investments</h2>
            <p>Returns resolve after their duration.</p>
          </div>
        </div>
        <div class="events">
          ${activities.investments.length ? activities.investments.map(activeInvestmentTemplate).join("") : `<div class="empty">No active investments yet.</div>`}
        </div>
        <div class="panel-header compact-header activity-history-head">
          <div>
            <h2>History</h2>
          </div>
        </div>
        <div class="events">
          ${activities.history.length ? activities.history.slice(0, 6).map((item) => `
            <article class="event-item ${item.type}">
              <h3>${escapeHtml(item.title)}</h3>
              <p class="microcopy">${escapeHtml(item.body)}</p>
            </article>
          `).join("") : `<div class="empty">No settled activity yet.</div>`}
        </div>
      </section>
    </div>
  `;
}

function investmentOfferTemplate(offer) {
  const affordable = state.player.savings >= offer.min;
  return `
    <article class="offer">
      <h3>${escapeHtml(offer.name)}</h3>
      <p class="microcopy">${escapeHtml(offer.note)}</p>
      <div class="offer-meta">
        <span class="tag">${escapeHtml(offer.type)}</span>
        <span class="tag">Min $${formatMoney(offer.min)}</span>
        <span class="tag">${offer.weeks} weeks</span>
        <span class="tag">Upside ${offer.upside}%</span>
        <span class="tag">Risk ${offer.risk}%</span>
      </div>
      <button class="small-btn" type="button" data-action="invest" data-id="${offer.id}" ${affordable ? "" : "disabled"}>${affordable ? "Invest minimum" : "Not enough cash"}</button>
    </article>
  `;
}

function activeInvestmentTemplate(item) {
  const remaining = Math.max(0, item.maturesWeek - state.career.totalWeeks);
  return `
    <article class="event-item">
      <h3>${escapeHtml(item.name)}</h3>
      <p class="microcopy">$${formatMoney(item.amount)} invested. ${remaining} weeks remaining. Upside ${item.upside}%, risk ${item.risk}%.</p>
      <span class="tag">${escapeHtml(item.type)}</span>
    </article>
  `;
}

function newsTemplate(item) {
  return `
    <article class="news-card">
      <div class="offer-meta">
        <span class="tag">${escapeHtml(item.source)}</span>
        <span class="tag">${escapeHtml(item.country)}</span>
        <span class="tag">${escapeHtml(item.category)}</span>
      </div>
      <h3>${escapeHtml(item.headline)}</h3>
      <p class="microcopy">${escapeHtml(item.body)}</p>
      <span class="tag">Week ${item.week}</span>
    </article>
  `;
}

function clubDirectionTemplate(club) {
  if (!club) return `<div class="empty">No club selected.</div>`;
  const chairman = club.chairman;
  const facilities = club.facilities;
  return `
    <div class="agent-card">
      <strong>${escapeHtml(chairman.name)}</strong>
      <span class="microcopy">Chairman profile: ${escapeHtml(chairman.trait)}. ${escapeHtml(chairman.direction)}.</span>
      ${meter("Club finance", club.finance)}
      ${meter("Club fame", club.fame, "purple")}
      ${meter("Spending", chairman.spending)}
      ${meter("Ambition", chairman.ambition, "purple")}
      ${meter("Patience", chairman.patience, chairman.patience < 38 ? "warn" : "blue")}
      ${meter("Youth focus", chairman.youth)}
      ${meter("Stability", chairman.stability, chairman.stability < 40 ? "risk" : "")}
      <div class="facility-grid">
        <div><strong>${round(facilities.academy)}</strong><span>Academy</span></div>
        <div><strong>${round(facilities.training)}</strong><span>Training</span></div>
        <div><strong>${round(facilities.medical)}</strong><span>Medical</span></div>
        <div><strong>${round(facilities.hospitality)}</strong><span>Hospitality</span></div>
        <div><strong>${round(facilities.scouting)}</strong><span>Scouting</span></div>
      </div>
      <p class="footer-note">Academy quality improves youth output. Training improves growth. Medical and hospitality reduce injury risk and time out. Scouting improves recruitment logic.</p>
      <div class="manager-note">
        <strong>Manager</strong>
        <p>${escapeHtml(club.manager.name)} - ${escapeHtml(club.manager.style)} - reputation ${round(club.manager.reputation)}.</p>
      </div>
    </div>
  `;
}

function currentLeagueName() {
  return state.player.tier === "Academy" || state.player.club.includes("Academy") ? "Academy League" : state.player.tier;
}

function currentWorldClub() {
  const baseName = state.player.club.replace(" Academy", "");
  return state.world.clubs.find((club) => club.name === baseName) || state.world.clubs[0];
}

function selectedWorldClub() {
  if (!state.ui.club || state.ui.club === "current") return currentWorldClub();
  return state.world.clubs.find((club) => club.id === state.ui.club) || currentWorldClub();
}

function rosterForClub(club) {
  const isCurrentAcademy = club.id === currentWorldClub().id && state.player.club.includes("Academy");
  return isCurrentAcademy ? club.academyRoster : club.roster;
}

function clubDisplayName(club) {
  if (!club) return "";
  return club.id === currentWorldClub().id && state.player.club.includes("Academy") ? `${club.name} Academy` : club.name;
}

function careerPlayerRecord() {
  return {
    name: `${state.player.name} (You)`,
    position: positions[state.player.position].short,
    age: state.player.ageYears,
    overall: round(overall()),
    potential: ageSoftCap() + 8,
    value: Math.round(overall() * overall() * (state.player.stage.includes("Academy") ? 42 : 1000)),
    nationality: state.player.nationality,
    isYou: true
  };
}

function formatMoney(value) {
  if (value >= 1000000) return `${(value / 1000000).toFixed(1)}m`;
  if (value >= 1000) return `${Math.round(value / 1000)}k`;
  return String(value);
}

function currentContractSummary() {
  return {
    club: state.player.club,
    tier: state.player.tier,
    stage: state.player.stage,
    role: state.player.role,
    wage: state.player.wage || 0,
    started: state.player.contractStarted || GAME_START_DATE
  };
}

function ensureActivities() {
  state.activities ||= { investments: [], offers: [], history: [] };
  state.activities.investments ||= [];
  state.activities.history ||= [];
  if (!state.activities.offers?.length || state.activities.offers.length < 3) {
    state.activities.offers = generateInvestmentOptions(4);
  }
}

function generateInvestmentOptions(count = 4) {
  return [...investmentTemplates]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((template) => ({
      ...template,
      id: uid("investment"),
      min: Math.round(template.min * randomBetween(0.86, 1.24)),
      weeks: Math.max(4, Math.round(template.weeks * randomBetween(0.82, 1.18))),
      upside: Math.max(4, Math.round(template.upside * randomBetween(0.78, 1.25))),
      risk: clamp(Math.round(template.risk * randomBetween(0.75, 1.28)), 2, 65),
      downside: clamp(Math.round(template.downside * randomBetween(0.75, 1.25)), 5, 75)
    }));
}

function investInActivity(id) {
  ensureActivities();
  const offer = state.activities.offers.find((item) => item.id === id);
  if (!offer || state.player.savings < offer.min) return;
  state.player.savings -= offer.min;
  state.activities.investments.unshift({
    ...offer,
    amount: offer.min,
    startedWeek: state.career.totalWeeks,
    maturesWeek: state.career.totalWeeks + offer.weeks
  });
  state.activities.offers = state.activities.offers.filter((item) => item.id !== id);
  if (state.activities.offers.length < 3) state.activities.offers.push(...generateInvestmentOptions(1));
  addLog("Investment started", `You put $${formatMoney(offer.min)} into ${offer.name}. It matures in ${offer.weeks} weeks.`, "");
  saveState();
  render();
}

function resolveInvestments() {
  ensureActivities();
  const matured = state.activities.investments.filter((item) => item.maturesWeek <= state.career.totalWeeks);
  if (!matured.length) return;

  matured.forEach((item) => {
    const failed = Math.random() * 100 < item.risk;
    const payout = failed
      ? Math.round(item.amount * (1 - item.downside / 100))
      : Math.round(item.amount * (1 + item.upside / 100));
    state.player.savings += Math.max(0, payout);
    const profit = payout - item.amount;
    const type = failed ? "warning" : "good";
    const title = failed ? "Investment loss" : "Investment return";
    const body = `${item.name} settled at $${formatMoney(payout)} (${profit >= 0 ? "+" : ""}$${formatMoney(profit)}).`;
    state.activities.history.unshift({ title, body, type });
    addLog(title, body, type);
  });

  state.activities.investments = state.activities.investments.filter((item) => item.maturesWeek > state.career.totalWeeks);
}

function weeklyLivingCost() {
  if (state.player.stage.includes("Academy") || state.player.tier === "Academy") return 18;
  if (state.player.stage.includes("Reserve") || state.player.stage.includes("U18")) return 45;
  const level = leagueConfigs[state.player.tier]?.level || 1;
  return level === 1 ? 180 : level === 2 ? 105 : 70;
}

function projectedWeeklyNet() {
  const gross = state.player.wage || 0;
  const agentFee = state.agent.current ? Math.round(gross * (state.agent.current.feeRate || 0) / 100) : 0;
  const livingCost = gross > 0 ? Math.min(gross, weeklyLivingCost()) : 0;
  return {
    gross,
    agentFee,
    livingCost,
    net: Math.max(0, gross - agentFee - livingCost)
  };
}

function processWeeklyPay() {
  const player = state.player;
  const pay = projectedWeeklyNet();
  player.lastGrossPay = pay.gross;
  player.lastAgentFee = pay.agentFee;
  player.lastLivingCost = pay.livingCost;
  player.lastNetPay = pay.net;
  player.totalEarnings = (player.totalEarnings || 0) + pay.gross;
  player.agentFeesPaid = (player.agentFeesPaid || 0) + pay.agentFee;
  player.livingCostsPaid = (player.livingCostsPaid || 0) + pay.livingCost;
  player.savings += pay.net;
  if (pay.gross > 0 && (state.career.totalWeeks || 1) % 4 === 0) {
    addLog("Wallet updated", `Weekly pay is $${formatMoney(pay.gross)} gross, $${formatMoney(pay.net)} after fees and costs.`, "");
  }
}

function ladderStep(number, title, text) {
  return `
    <div class="ladder-step">
      <span class="step-badge">${number}</span>
      <p class="step-copy"><strong>${title}</strong><span>${text}</span></p>
    </div>
  `;
}

function meter(label, value, type = "") {
  return `
    <div class="meter">
      <div class="meter-head"><span>${label}</span><strong>${round(value)}</strong></div>
      <div class="meter-track"><div class="meter-fill ${type}" style="--value:${clamp(value)}%"></div></div>
    </div>
  `;
}

function statLine(label, value, text) {
  return `<div class="stat-line"><strong>${value}</strong><span>${label}<br>${text}</span></div>`;
}

function choiceSection(title, group, options) {
  return `
    <div class="choice-section">
      <h3>${title}</h3>
      <div class="choice-grid">
        ${Object.entries(options).map(([key, option]) => `
          <button class="choice-btn ${selected[group] === key ? "active" : ""}" type="button" data-group="${group}" data-select="${key}">
            <strong>${option.title}</strong>
            <span>${option.text}</span>
          </button>
        `).join("")}
      </div>
    </div>
  `;
}

function candidateTemplate(candidate) {
  return `
    <article class="candidate">
      <h3>${escapeHtml(candidate.name)}</h3>
      <p class="microcopy">${escapeHtml(candidate.style)}</p>
      <div class="candidate-meta">
        <span class="tag">Quality ${candidate.quality}</span>
        <span class="tag">Negotiation ${candidate.negotiation}</span>
        <span class="tag">Connections ${candidate.connections}</span>
        <span class="tag">Care ${candidate.care}</span>
        <span class="tag">${candidate.feeRate}% fee</span>
      </div>
      <button class="small-btn" type="button" data-action="hire-agent" data-id="${candidate.id}">Hire agent</button>
    </article>
  `;
}

function offerTemplate(offer) {
  return `
    <article class="offer">
      <h3>${escapeHtml(offer.club)}</h3>
      <p class="microcopy">${escapeHtml(offer.reason)}</p>
      <div class="offer-meta">
        <span class="tag">${escapeHtml(offer.tier)}</span>
        <span class="tag">${escapeHtml(offer.role)}</span>
        <span class="tag">$${offer.wage}/wk</span>
        <span class="tag">Role fit ${offer.fit}</span>
        <span class="tag">${escapeHtml(offer.distance)}</span>
      </div>
      <div class="offer-actions">
        <button class="small-btn" type="button" data-action="accept-offer" data-id="${offer.id}">Accept</button>
        <button class="secondary-btn" type="button" data-action="reject-offer" data-id="${offer.id}">Reject</button>
      </div>
    </article>
  `;
}

function eventTemplate(event) {
  return `
    <article class="event-item ${event.type}">
      <h3>${escapeHtml(event.title)}</h3>
      <p class="microcopy">${escapeHtml(event.body)}</p>
      <span class="tag">${formatDisplayDate(eventDate(event.week))}</span>
    </article>
  `;
}

function handleAction(action, id) {
  if (action === "tab") {
    state.ui.tab = id;
    saveState();
    render();
  }
  if (action === "league-country") {
    state.ui.leagueCountry = id;
    state.ui.league = firstLeagueForCountry(id);
    state.ui.scoreRound = latestRoundNumber(state.ui.league);
    saveState();
    render();
  }
  if (action === "league-filter") {
    state.ui.league = id;
    state.ui.leagueCountry = activeLeagueCountry(id);
    state.ui.scoreRound = latestRoundNumber(id);
    saveState();
    render();
  }
  if (action === "league-view") {
    state.ui.leagueView = id;
    saveState();
    render();
  }
  if (action === "score-round") {
    state.ui.scoreRound = Number(id);
    saveState();
    render();
  }
  if (action === "leaderboard-filter") {
    state.ui.leaderboard = id;
    saveState();
    render();
  }
  if (action === "activity-choice") {
    selected.activity = id;
    saveState();
    render();
  }
  if (action === "news-filter") {
    state.ui.newsCountry = id;
    saveState();
    render();
  }
  if (action === "accept-academy") acceptAcademy(id);
  if (action === "advance") advanceToMatchday();
  if (action === "proceed-match") proceedMatch();
  if (action === "finish-week") finishWeek();
  if (action === "press") handlePress(id);
  if (action === "save") {
    const saved = saveState({ manual: true });
    addLog("Career saved", saved ? "Your one career slot was updated in this browser." : "This browser blocked the save. Try refreshing or checking storage permissions.", saved ? "good" : "warning");
    if (saved) saveState();
    render();
  }
  if (action === "load-career") {
    const saved = loadState();
    if (!saved) {
      addLog("No saved career", "This browser does not have a career slot to load yet.", "warning");
      render();
      return;
    }
    if (!window.confirm("Load the saved career slot? Any unsaved progress on screen will be replaced.")) return;
    state = saved;
    addLog("Career loaded", "The one saved career slot was loaded from this browser.", "good");
    saveState();
    render();
  }
  if (action === "reset" && window.confirm("Reset this career and clear the save?")) {
    removeSavedCareer();
    state = null;
    render();
  }
  if (action === "new-career" && window.confirm("Start a new career and clear this browser save?")) {
    removeSavedCareer();
    state = null;
    render();
  }
  if (action === "hire-agent") hireAgent(id);
  if (action === "sack-agent") sackAgent();
  if (action === "accept-offer") acceptOffer(id);
  if (action === "reject-offer") rejectOffer(id);
  if (action === "invest") investInActivity(id);
}

function acceptAcademy(id) {
  const offer = state.academyOffers.find((item) => item.id === id);
  if (!offer) return;

  state.player.club = offer.club;
  state.player.tier = offer.tier;
  state.player.role = offer.role;
  state.player.stage = "Academy Scholar";
  state.player.wage = offer.wage;
  state.player.contractStarted = currentGameDate();
  state.career.coachTrust = clamp(offer.fit * 0.55);
  state.career.reputation = clamp(state.career.reputation + offer.quality / 20);

  if (offer.distance === "abroad") {
    state.life.loneliness = clamp(state.life.loneliness + 12);
    state.life.family = clamp(state.life.family - 6);
    state.life.friends = clamp(state.life.friends - 6);
    state.life.stress = clamp(state.life.stress + 5);
  } else if (offer.distance === "regional") {
    state.life.loneliness = clamp(state.life.loneliness + 5);
    state.life.friends = clamp(state.life.friends - 3);
  }

  state.phase = "weekly";
  state.academyOffers = [];
  state.ui.league = "Academy League";
  state.ui.scoreRound = latestRoundNumber("Academy League");
  state.ui.club = "current";
  ensureCurrentAcademyInWorld();
  addLog("Academy contract signed", `You joined ${offer.club}. Fit ${offer.fit}, pathway ${offer.pathway}, wage $${formatMoney(offer.wage)}/wk.`, "good");
  addNews(offer.country, "Academy", `${state.player.name} chooses ${offer.club}`, `The ${state.player.nationality} prospect signed a youth deal after weighing pathway, pressure, and distance.`);
  saveState();
  render();
}

function advanceToMatchday() {
  if (state.phase !== "weekly") return;
  ensureWeekPlan();
  if (currentActivity()) {
    applyDailyActivity();
  }
  if (!currentActivity()) {
    state.pendingMatch = createMatchContext();
    state.phase = "matchday";
  }
  saveState();
  render();
}

function ensureCurrentAcademyInWorld() {
  const league = "Academy League";
  const table = state.world.leagues[league];
  if (!table || table.some((row) => row.club === state.player.club)) return;
  const baseClub = currentWorldClub();
  if (!baseClub) return;
  const row = createTableRow({ ...baseClub, name: state.player.club, overall: clamp(baseClub.overall - 21, 30, 78) }, league, 30);
  table[table.length - 1] = row;
  state.world.leagues[league] = table.sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
  state.world.fixtures[league] = createRoundSchedule(league, state.world.leagues[league].map((item) => item.club), { country: "Global", clubs: state.world.leagues[league].length, matches: 30, level: 0 });
  state.world.leaders[league] = emptyLeaderboards();
}

function applyDailyActivity() {
  const activity = currentActivity();
  if (!activity) return;
  const logs = [];
  const choices = activityChoices(activity);
  const choice = choices.find((item) => item.id === selected.activity) || choices[0];

  if (activity.type === "training") {
    applyTrainingActivity(activity, choice, logs);
  } else {
    const lifeId = (choice.id || "life:family").split(":")[1] || "family";
    selected.life = lifeId;
    applyLife(lifeActions[lifeId], logs, lifeId);
    state.career.lifeChoicesThisWeek += 1;
    logs.push(["Life day used", `${lifeActions[lifeId].title} helped keep the person behind the player stable.`, "good"]);
  }

  applyAgentAction(logs);
  applySupportConsequences(logs);

  state.career.activityIndex += 1;
  selected.activity = "";
  logs.reverse().forEach(([title, body, type]) => addLog(title, body, type));
}

function applyTrainingActivity(activity, choice, logs) {
  const manager = currentWorldClub()?.manager || { strictness: 55 };
  const focusAction = activity.focus === "matchprep" ? { ...careerActions.matchprep, id: "matchprep" } : trainingActionForFocus(activity.focus);

  if (choice.id === "train:attend") {
    selected.career = focusAction.id;
    applyTraining(focusAction, logs);
    state.career.coachTrust = clamp(state.career.coachTrust + 1.4 + (manager.strictness || 50) / 95);
    logs.push(["Training attended", `${activity.title} matched the manager plan. Trust ticked upward.`, "good"]);
    return;
  }

  if (choice.id === "train:extra") {
    selected.career = focusAction.id;
    applyTraining({ ...focusAction, intensity: focusAction.intensity * 1.28, fitness: focusAction.fitness - 4, stress: focusAction.stress + 3, confidence: focusAction.confidence + 1 }, logs);
    state.career.coachTrust = clamp(state.career.coachTrust + 2.5 + (manager.strictness || 50) / 100);
    logs.push(["Extra work", "The staff loved the effort, but your legs paid for it.", "good"]);
    return;
  }

  if (choice.id === "train:life") {
    selected.life = "support";
    applyLife(lifeActions.support, logs, "support");
    state.career.lifeChoicesThisWeek += 1;
    state.career.missedTrainingThisWeek += 1;
    state.career.coachTrust = clamp(state.career.coachTrust - (activity.strict ? 10 : 4.5));
    logs.push(["Training traded for life", "You protected your headspace, but the staff marked the missed session.", "warning"]);
    return;
  }

  state.career.missedTrainingThisWeek += 1;
  state.career.coachTrust = clamp(state.career.coachTrust - 8 - (manager.strictness || 50) / 9);
  state.career.form = clamp(state.career.form - 3);
  state.life.stress = clamp(state.life.stress - 2);
  state.life.loneliness = clamp(state.life.loneliness - 3);
  logs.push(["Did not appear", "You missed training. Trust dropped hard, especially under a strict manager.", "risk"]);
}

function trainingActionForFocus(focus) {
  const map = {
    technical: "technical",
    physical: "physical",
    tactical: "tactical",
    mentality: "matchprep"
  };
  const id = map[focus] || "technical";
  return { ...careerActions[id], id };
}

function applyTraining(action, logs) {
  const player = state.player;
  const career = state.career;
  const life = state.life;
  const wellbeingMod = clamp(0.65 + life.wellbeing / 240 + (100 - life.stress) / 320 - life.loneliness / 360, 0.35, 1.2);
  const fitnessMod = career.fitness < 35 ? 0.55 : career.fitness < 55 ? 0.78 : 1;
  const academyMod = state.player.tier === "Academy" ? 0.93 : 1;
  const mainGain = clamp(randomBetween(0.45, 1.1) * action.intensity * wellbeingMod * fitnessMod * academyMod, 0.1, 1.75);
  const secondaryGain = mainGain * randomBetween(0.12, 0.28);

  addAttribute(action.focus, mainGain);
  Object.keys(player.attributes).forEach((key) => {
    if (key !== action.focus && action.id !== "recovery") addAttribute(key, secondaryGain / 3);
  });

  career.fitness = clamp(career.fitness + action.fitness);
  career.confidence = clamp(career.confidence + action.confidence);
  life.stress = clamp(life.stress + action.stress);

  if (action.id === "recovery") {
    life.wellbeing = clamp(life.wellbeing + (life.supportPlan ? 14 : 7));
    life.supportPlan = false;
    logs.push(["Recovery focus", "You protected your body. That may matter more than a tiny attribute jump.", "good"]);
  }

  if (mainGain < 0.45) {
    logs.push(["Training barely stuck", "Stress, loneliness, fatigue, or age caps limited your development this week.", "warning"]);
  }
}

function addAttribute(key, amount) {
  const cap = ageSoftCap();
  Object.keys(state.player.attributes[key]).forEach((subKey) => {
    const current = state.player.attributes[key][subKey];
    const capPenalty = current > cap ? 0.18 : current > cap - 3 ? 0.45 : 1;
    const elitePenalty = current > 82 ? 0.32 : current > 72 ? 0.62 : 1;
    state.player.attributes[key][subKey] = clamp(current + amount * randomBetween(0.65, 1.18) * capPenalty * elitePenalty);
  });
}

function ageSoftCap() {
  const age = state.player.ageYears + state.player.ageWeeks / 52;
  if (age < 16) return 58;
  if (age < 17) return 63;
  if (age < 18) return 68;
  if (age < 20) return 74;
  if (age < 23) return 82;
  return 90;
}

function applyLife(action, logs, lifeId = selected.life) {
  const life = state.life;
  life.family = clamp(life.family + action.family);
  life.friends = clamp(life.friends + action.friends);
  life.relationship = clamp(life.relationship + action.relationship);
  life.loneliness = clamp(life.loneliness + action.loneliness);
  life.stress = clamp(life.stress + action.stress);
  life.wellbeing = clamp(life.wellbeing + action.wellbeing);

  if (lifeId !== "family") life.family = clamp(life.family - 1.3);
  if (lifeId !== "friends") life.friends = clamp(life.friends - 1.5);
  if (lifeId !== "relationship") life.relationship = clamp(life.relationship - 1.2);

  if (lifeId === "focus") {
    addAttribute("mentality", 0.35);
    logs.push(["Isolation trade-off", "Extra focus helped mentality, but support outside football took a hit.", "warning"]);
  }
}

function applySupportConsequences(logs) {
  const life = state.life;
  const career = state.career;
  const support = average([life.family, life.friends, life.relationship]);

  if (support < 42) life.loneliness = clamp(life.loneliness + 3);
  else life.loneliness = clamp(life.loneliness - support / 75);

  if (life.loneliness > 72 || life.stress > 78) {
    life.wellbeing = clamp(life.wellbeing - 6);
    career.form = clamp(career.form - 4);
    career.confidence = clamp(career.confidence - 4);
    life.supportPlan = true;
    logs.push(["Wellbeing warning", "Isolation and pressure are affecting focus, sleep, and match consistency.", "risk"]);
  }

  if (life.wellbeing < 34) {
    career.coachTrust = clamp(career.coachTrust - 2);
    logs.push(["Support needed", "The staff noticed burnout risk. Rest, support, and honest conversations can recover this.", "risk"]);
  }

  if (life.familyPressure > 65 && state.player.wage > 0 && Math.random() < 0.16) {
    life.stress = clamp(life.stress + 5);
    life.family = clamp(life.family - 3);
    logs.push(["Family money pressure", "Your contract created expectations at home. Support became more complicated.", "warning"]);
  }
}

function createMatchContext() {
  const fixture = nextFixture();
  const opponentName = fixture.opponent.replace(" Academy", "");
  const opponent = state.world.clubs.find((club) => club.name === opponentName) || pickOpponent();
  const isAcademy = state.player.tier === "Academy" || state.player.club.includes("Academy");
  const thought = state.career.fitness < 45
    ? "You are in the squad, but I need you to manage your body. Do not chase every ball if your legs are gone."
    : state.career.form > 62
      ? "You look sharp. Show me that this form is repeatable, not just a good week."
      : "Keep it simple early. I want concentration, discipline, and bravery when the moment arrives.";

  return {
    opponent: fixture.opponent,
    opponentOverall: clamp(clubOverall(opponent) - (isAcademy ? 20 : 0), 28, 96),
    competition: fixture.competition,
    date: fixture.date,
    round: fixture.round,
    home: fixture.home,
    previewThought: thought,
    result: null
  };
}

function pickOpponent() {
  const currentName = state.player.club.replace(" Academy", "");
  const isAcademy = state.player.tier === "Academy" || state.player.club.includes("Academy");
  const target = overall() + state.career.reputation * 0.25 + (isAcademy ? 15 : 0);
  const worldClubs = state.world?.clubs?.length ? state.world.clubs : clubCatalog;
  const leaguePool = isAcademy ? worldClubs : worldClubs.filter((club) => club.tier === state.player.tier);
  const candidates = (leaguePool.length > 1 ? leaguePool : worldClubs)
    .filter((club) => club.name !== currentName)
    .map((club) => {
      const scaledOverall = clubOverall(club) - (isAcademy ? 20 : 0);
      return { ...club, diff: Math.abs(scaledOverall - target - randomBetween(-8, 8)) };
    })
    .sort((a, b) => a.diff - b.diff);
  return candidates[Math.floor(randomBetween(0, Math.min(8, candidates.length)))];
}

function proceedMatch() {
  if (!state.pendingMatch || state.phase !== "matchday") return;
  const result = simulateMatch();
  state.pendingMatch.result = result;
  state.phase = "postmatch";
  saveState();
  render();
}

function simulateMatch() {
  const career = state.career;
  const life = state.life;
  const player = state.player;

  if (career.injuryWeeks > 0) {
    career.injuryWeeks -= 1;
    career.fitness = clamp(career.fitness + 9);
    const scoreline = simulatePlayerFixtureScore(6);
    const result = {
      rating: 0,
      mvp: false,
      ...scoreline,
      teamStats: simulateTeamMatchStats(scoreline),
      playerStats: simulateUserMatchStats(0, {}, "rehab"),
      headline: "Rehab week",
      summary: "You missed the game and stayed with the medical staff.",
      managerThought: "Availability is part of a career. Get fit properly before asking for minutes.",
      highlights: []
    };
    addLog("Injury rehab", "You missed matchday and focused on returning safely.", "warning");
    return result;
  }

  const academySelectionBoost = state.player.tier === "Academy" || state.player.club.includes("Academy") ? 24 : 0;
  const fitnessSelectionDrag = career.fitness < 25 ? 24 : career.fitness < 40 ? 14 : career.fitness < 55 ? 6 : 0;
  const missedTrainingDrag = (career.missedTrainingThisWeek || 0) * 7;
  const chanceToPlay = clamp(34 + academySelectionBoost + career.coachTrust * 0.58 + career.fitness * 0.18 + career.form * 0.12 - life.stress * 0.08 - fitnessSelectionDrag - missedTrainingDrag, 2, 92);
  if (Math.random() * 100 > chanceToPlay) {
    career.form = clamp(career.form - 1);
    career.coachTrust = clamp(career.coachTrust + 0.6);
    const notFit = career.fitness < 42;
    const notTrusted = career.coachTrust < 34 || (career.missedTrainingThisWeek || 0) > 0;
    const scoreline = simulatePlayerFixtureScore(6);
    const result = {
      rating: 0,
      mvp: false,
      ...scoreline,
      teamStats: simulateTeamMatchStats(scoreline),
      playerStats: simulateUserMatchStats(0, {}, notFit || notTrusted ? "not selected" : "unused sub"),
      headline: notFit || notTrusted ? "Not selected" : "Unused substitute",
      summary: notFit ? "Your fitness was too low for the manager to risk you." : notTrusted ? "Trust and missed work kept you outside the plan." : "You did not get meaningful minutes. Your week still counted in training.",
      managerThought: notFit ? "I cannot use you if your body is not ready." : "You are close, but I need to trust the habits before I trust the minutes.",
      highlights: []
    };
    addLog(notFit ? "Fitness cost selection" : "Limited minutes", notFit ? "Low fitness kept you out of the match plan." : "The manager kept you on the edge of the squad. Keep building trust.", notFit || notTrusted ? "warning" : "");
    return result;
  }

  const ability = overall();
  const mentalDrag = life.loneliness / 125 + life.stress / 135 + (100 - life.wellbeing) / 170;
  const fitnessDrag = career.fitness < 35 ? 0.75 : career.fitness < 55 ? 0.35 : 0;
  const prepBonus = selected.career === "matchprep" ? 0.38 : selected.career === "tactical" ? 0.15 : 0;
  const isAcademy = state.player.tier === "Academy" || state.player.club.includes("Academy");
  const academyFloor = isAcademy ? 1.75 : 0;
  const academyAbilityFit = isAcademy ? clamp((ability - 15) / 24, 0, 0.85) : 0;
  const opponentGap = state.pendingMatch.opponentOverall - ability;
  const opponentDrag = isAcademy
    ? clamp((opponentGap - 18) / 110, -0.25, 0.22)
    : clamp((opponentGap - 25) / 55, -0.25, 0.6);
  const rating = clamp(5.0 + academyFloor + academyAbilityFit + (ability - 34) / 18 + career.form / 105 + career.confidence / 150 - mentalDrag - fitnessDrag - opponentDrag + prepBonus + randomBetween(isAcademy ? -0.35 : -0.75, isAcademy ? 0.85 : 0.9), 3.8, 10);
  const mvp = rating >= 8.1 || (rating >= 7.7 && Math.random() < 0.28);
  const seasonTotal = career.avgRating * career.appearances;
  const endProduct = applyEndProduct(rating);
  const playerStats = simulateUserMatchStats(rating, endProduct);
  const scoreline = simulatePlayerFixtureScore(rating, endProduct);
  const teamStats = simulateTeamMatchStats(scoreline);

  career.appearances += 1;
  career.lastRating = rating;
  career.ratingHistory.unshift(rating);
  career.ratingHistory = career.ratingHistory.slice(0, 12);
  career.avgRating = (seasonTotal + rating) / career.appearances;
  career.form = clamp(career.form + (rating - 6.2) * 4.2);
  career.coachTrust = clamp(career.coachTrust + (rating - 6) * 1.9);
  career.reputation = clamp(career.reputation + Math.max(0, rating - 6.5) * 1.1);
  career.confidence = clamp(career.confidence + (rating - 6.1) * 3.2);
  career.fitness = clamp(career.fitness - randomBetween(3, 8));

  const highlights = generateMatchHighlights(rating, mvp, endProduct, playerStats);
  updateFameFromRating(rating, mvp);

  if (rating >= 8) {
    addLog("Breakout performance", `A ${rating.toFixed(1)} rating pushed your name into bigger conversations.`, "good");
    addNews(player.nationality, "Match", `${player.name} lights up academy match`, `A ${rating.toFixed(1)} rating put the ${player.nationality} prospect into the spotlight.`);
  } else if (rating < 5.5) {
    addLog("Difficult match", `A ${rating.toFixed(1)} rating hurt form and trust. The response matters.`, "warning");
  }

  const clubFacilities = currentWorldClub()?.facilities || { medical: 50, hospitality: 50 };
  const careReduction = (clubFacilities.medical + clubFacilities.hospitality) / 4200;
  const injuryRisk = Math.max(0.006, (career.fitness < 30 ? 0.11 : career.fitness < 45 ? 0.05 : 0.015) - careReduction);
  if (Math.random() < injuryRisk) {
    career.injuryWeeks = Math.max(1, Math.ceil(randomBetween(2, 6) - clubFacilities.medical / 38));
    career.fitness = clamp(career.fitness - 17);
    addLog("Injury setback", `You picked up an injury and will miss about ${career.injuryWeeks} weeks.`, "risk");
  }

  return {
    rating,
    mvp,
    ...scoreline,
    teamStats,
    playerStats,
    headline: matchHeadline(rating, mvp),
    summary: matchSummary(rating, mvp),
    managerThought: managerThought(rating),
    highlights
  };
}

function applyEndProduct(rating) {
  const player = state.player;
  const chance = rating + groupOverall("technical") / 18 + Math.random() * 2.8;
  const impact = { goal: false, assist: false, cleanSheet: false };
  if (player.position === "Goalkeeper") {
    if (rating > 6.8 && Math.random() < 0.45) {
      state.career.cleanSheets += 1;
      impact.cleanSheet = true;
    }
  } else {
    if (chance > 11.4) {
      state.career.goals += 1;
      impact.goal = true;
    }
    if (chance > 10.4 && Math.random() < 0.68) {
      state.career.assists += 1;
      impact.assist = true;
    }
  }
  return impact;
}

function simulatePlayerFixtureScore(rating, endProduct = {}) {
  const match = state.pendingMatch;
  const team = state.player.club;
  const opponent = match.opponent;
  const teamStrength = currentPlayerClubStrength();
  const opponentStrength = match.opponentOverall;
  const homeTeam = match.home ? team : opponent;
  const awayTeam = match.home ? opponent : team;
  const score = simulateFixtureScore(homeTeam, awayTeam, teamStrengthForFixture(homeTeam, team, opponent, teamStrength, opponentStrength), teamStrengthForFixture(awayTeam, team, opponent, teamStrength, opponentStrength));
  let homeScore = score.homeScore;
  let awayScore = score.awayScore;
  const playerTeamWon = match.home ? homeScore > awayScore : awayScore > homeScore;

  if (rating >= 8 && !playerTeamWon && Math.random() < 0.65) {
    if (match.home) homeScore = Math.max(homeScore, awayScore + 1);
    else awayScore = Math.max(awayScore, homeScore + 1);
  }

  if (rating < 5.3 && playerTeamWon && Math.random() < 0.55) {
    if (match.home) awayScore = Math.max(awayScore, homeScore);
    else homeScore = Math.max(homeScore, awayScore);
  }

  if (endProduct.goal || endProduct.assist) {
    const minimumTeamGoals = endProduct.goal && endProduct.assist ? 2 : 1;
    if (match.home) homeScore = Math.max(homeScore, minimumTeamGoals);
    else awayScore = Math.max(awayScore, minimumTeamGoals);
  }

  if (endProduct.cleanSheet) {
    if (match.home) awayScore = 0;
    else homeScore = 0;
  }

  const events = generateMatchEvents(homeTeam, awayTeam, homeScore, awayScore, {
    team,
    goal: endProduct.goal,
    assist: endProduct.assist
  });

  return {
    scoreline: `${homeScore}-${awayScore}`,
    homeTeam,
    awayTeam,
    homeScore,
    awayScore,
    events,
    teamScore: match.home ? homeScore : awayScore,
    opponentScore: match.home ? awayScore : homeScore
  };
}

function simulateTeamMatchStats(scoreline) {
  const homeStrength = teamStrengthForStats(scoreline.homeTeam);
  const awayStrength = teamStrengthForStats(scoreline.awayTeam);
  const totalStrength = Math.max(1, homeStrength + awayStrength);
  const baseHomePossession = clamp(Math.round(48 + (homeStrength - awayStrength) / 3 + randomBetween(-6, 6)), 34, 66);
  const homeShots = Math.max(scoreline.homeScore + 2, Math.round(randomBetween(6, 14) + (homeStrength - 55) / 14 + scoreline.homeScore * 1.4));
  const awayShots = Math.max(scoreline.awayScore + 2, Math.round(randomBetween(5, 13) + (awayStrength - 55) / 15 + scoreline.awayScore * 1.35));
  const homeEvents = scoreline.events.filter((event) => event.team === scoreline.homeTeam);
  const awayEvents = scoreline.events.filter((event) => event.team === scoreline.awayTeam);

  return {
    home: teamStatLine(scoreline.homeTeam, homeShots, scoreline.homeScore, baseHomePossession, homeStrength / totalStrength, homeEvents),
    away: teamStatLine(scoreline.awayTeam, awayShots, scoreline.awayScore, 100 - baseHomePossession, awayStrength / totalStrength, awayEvents)
  };
}

function teamStatLine(team, shots, goals, possession, strengthShare, events) {
  const onTarget = clamp(Math.max(goals, Math.round(shots * randomBetween(0.28, 0.52))), goals, shots);
  return {
    team,
    possession,
    shots,
    onTarget,
    passes: Math.round(245 + possession * 4.1 + strengthShare * 120 + randomBetween(-28, 36)),
    passAccuracy: clamp(Math.round(68 + possession / 4 + strengthShare * 11 + randomBetween(-5, 5)), 58, 93),
    corners: Math.max(0, Math.round(shots / 3 + randomBetween(-1, 2))),
    fouls: Math.max(4, Math.round(randomBetween(7, 15))),
    yellow: events.filter((event) => event.type === "yellow").length,
    red: events.filter((event) => event.type === "red").length
  };
}

function simulateUserMatchStats(rating, endProduct, status = "") {
  const position = state.player.position;
  const short = positions[position]?.short || "CM";
  const started = rating > 0 && state.career.fitness > 48 && Math.random() > 0.18;
  const minutes = rating <= 0 ? 0 : started ? Math.round(randomBetween(state.career.fitness < 55 ? 58 : 76, 90)) : Math.round(randomBetween(14, 38));
  const startMinute = !minutes ? 0 : started ? 1 : Math.max(46, 91 - minutes);
  const endMinute = !minutes ? 0 : started ? minutes : 90;
  const ability = overall();
  const role = short;
  const passBase = short === "GK" ? 18 : short === "FB" || short === "CB" ? 42 : short === "CM" ? 55 : short === "WG" ? 34 : 25;
  const passes = minutes ? Math.max(2, Math.round(passBase * (minutes / 90) + ability / 5 + randomBetween(-6, 8))) : 0;
  const shots = minutes && short !== "GK" ? Math.max(endProduct.goal ? 1 : 0, Math.round(randomBetween(0, short === "ST" ? 3.4 : short === "WG" ? 2.3 : 1.2))) : 0;
  const keyPasses = minutes ? Math.max(endProduct.assist ? 1 : 0, Math.round(randomBetween(0, short === "CM" || short === "WG" ? 3.2 : 1.4))) : 0;

  return {
    role: status || role,
    started,
    minutes,
    startMinute,
    endMinute,
    passes,
    passAccuracy: minutes ? clamp(Math.round(64 + rating * 3 + ability / 8 + randomBetween(-6, 6)), 48, 96) : 0,
    keyPasses,
    kmCovered: minutes ? Number(clamp(minutes / 90 * randomBetween(7.2, 11.8), 1.2, 13.2).toFixed(1)) : 0,
    shots,
    shotsOnTarget: Math.min(shots, Math.max(endProduct.goal ? 1 : 0, Math.round(shots * randomBetween(0.25, 0.7)))),
    tackles: minutes ? Math.round(randomBetween(short === "FB" || short === "CB" ? 2 : 0, short === "ST" ? 2.2 : 4.2)) : 0,
    interceptions: minutes ? Math.round(randomBetween(short === "FB" || short === "CB" ? 1 : 0, short === "CM" ? 3.4 : 2.4)) : 0,
    saves: minutes && short === "GK" ? Math.round(randomBetween(1, 6)) : 0
  };
}

function teamStrengthForStats(team) {
  if (team === state.player.club) return currentPlayerClubStrength();
  if (team === state.pendingMatch?.opponent) return state.pendingMatch.opponentOverall;
  return clubStrengthByTableName(team);
}

function currentPlayerClubStrength() {
  const club = currentWorldClub();
  const isAcademy = state.player.tier === "Academy" || state.player.club.includes("Academy");
  if (!club) return overall();
  return isAcademy ? clamp(club.overall - 21, 28, 78) : club.overall;
}

function teamStrengthForFixture(name, playerTeam, opponent, teamStrength, opponentStrength) {
  if (name === playerTeam) return teamStrength;
  if (name === opponent) return opponentStrength;
  return clubStrengthByTableName(name);
}

function updateFameFromRating(rating, mvp) {
  if (rating <= 0) return;
  const player = state.player;
  const fameGain = Math.max(0, rating - 6.4) * (mvp ? 1.1 : 0.65) * player.countrySpotlight;
  player.fame = clamp(player.fame + fameGain);

  if (player.nationRank > 70 && rating >= 8.1) {
    player.countryAwards += 1;
    player.fame = clamp(player.fame + 2.5);
    addLog("National spotlight", `${player.nationality} media framed you as a reason people are watching the country more closely.`, "good");
  }
}

function generateMatchHighlights(rating, mvp, endProduct, playerStats = null) {
  if (playerStats && playerStats.minutes <= 0) return [];
  const player = state.player;
  const role = positions[player.position]?.short || "CM";
  const minutes = uniqueMinutes(rating >= 8 ? 5 : rating >= 6.5 ? 4 : 3, playerStats);
  const quality = rating >= 7.6 ? "good" : rating < 5.7 ? "warning" : "";
  const moments = [];

  if (endProduct.goal) {
    moments.push(highlight(minutes.shift() || fallbackHighlightMinute(playerStats), "Goal", "You attack the box, take one touch away from pressure, and finish before the defender can block.", "good"));
  }

  if (endProduct.assist) {
    moments.push(highlight(minutes.shift() || fallbackHighlightMinute(playerStats), "Assist", "You receive between lines, wait for the runner, and slide the pass through before the move ends with a finish.", "good"));
  }

  if (endProduct.cleanSheet) {
    moments.push(highlight(minutes.shift() || fallbackHighlightMinute(playerStats), "Key save", "You set early, read the striker's body shape, and push the shot wide for a corner.", "good"));
  }

  const library = role === "GK" ? goalkeeperHighlights(rating) : outfieldHighlights(player.position, rating);
  while (moments.length < (mvp ? 5 : rating >= 6.5 ? 4 : 3) && library.length) {
    const index = Math.floor(randomBetween(0, library.length));
    const [title, body, type] = library.splice(index, 1)[0];
    moments.push(highlight(minutes.shift() || fallbackHighlightMinute(playerStats), title, body, type || quality));
  }

  return moments
    .sort((a, b) => a.minute - b.minute)
    .map((item, index) => ({ ...item, id: `hl-${state.career.totalWeeks}-${index}` }));
}

function uniqueMinutes(count, playerStats = null) {
  const totalMinutes = playerStats?.minutes || 90;
  const start = playerStats?.startMinute || (playerStats && playerStats.minutes > 0 && !playerStats.started ? Math.max(1, 91 - totalMinutes) : 1);
  const end = playerStats?.endMinute || (playerStats && playerStats.minutes > 0 ? Math.min(90, start + totalMinutes - 1) : 90);
  const target = end - start < 30 ? Math.min(count, 2) : count;
  const minutes = [];
  let guard = 0;
  while (minutes.length < target && guard < 80) {
    guard += 1;
    const minute = Math.floor(randomBetween(Math.max(2, start + 1), Math.max(start + 2, end - 1)));
    if (!minutes.some((existing) => Math.abs(existing - minute) < 8)) minutes.push(minute);
  }
  return minutes.sort((a, b) => a - b);
}

function fallbackHighlightMinute(playerStats = null) {
  if (!playerStats || playerStats.minutes >= 88) return Math.floor(randomBetween(9, 88));
  const start = playerStats.startMinute || (playerStats.started ? 1 : Math.max(1, 91 - playerStats.minutes));
  const end = playerStats.endMinute || Math.min(90, start + Math.max(1, playerStats.minutes) - 1);
  return Math.floor(randomBetween(start, end));
}

function highlight(minute, title, body, type = "") {
  return { minute, title, body, type };
}

function outfieldHighlights(position, rating) {
  const strong = rating >= 7.4;
  const weak = rating < 5.8;
  const shared = [
    ["First touch under pressure", "You take the ball on the half-turn, protect it with your body, and win a foul as the challenge arrives.", strong ? "good" : ""],
    ["Loose pass warning", "You try to force a forward pass, the angle closes, and the ball rolls out before the attack can build.", weak ? "warning" : ""],
    ["Pressing trigger", "You jump onto a heavy touch, force the defender backward, and the crowd reacts as the ball is cleared out.", strong ? "good" : ""],
    ["Recovery run", "You sprint back after possession is lost and slow the counter long enough for teammates to reset.", strong ? "good" : ""]
  ];
  const byPosition = {
    Goalkeeper: [
      ["Claimed cross", "You step through traffic, catch the cross cleanly, and slow the match down before distributing.", strong ? "good" : ""],
      ["Distribution risk", "You look for the quick throw, hesitate, and the safe pass goes out under pressure.", weak ? "warning" : ""]
    ],
    "Full-back": [
      ["Overlap", "You time the overlap, receive near the touchline, and whip a cross that is cleared for a corner.", strong ? "good" : ""],
      ["One-v-one defending", "You show the winger outside and block the cross off his shin for a throw.", strong ? "good" : ""]
    ],
    "Centre-back": [
      ["Aerial duel", "You attack the long ball first and head it into midfield before the striker can settle.", strong ? "good" : ""],
      ["Late tackle", "You step out aggressively, miss the ball by inches, and give away a free kick in a dangerous lane.", weak ? "warning" : ""]
    ],
    Midfielder: [
      ["Switch of play", "You scan before receiving, open your hips, and hit the far-side runner to break the press.", strong ? "good" : ""],
      ["Second ball", "You arrive first after a clearance and recycle possession before the opponent can counter.", strong ? "good" : ""]
    ],
    Winger: [
      ["Dribble attempt", "You isolate the full-back, push the ball outside, and win a corner when the cross is blocked.", strong ? "good" : ""],
      ["Cut inside", "You cut onto your stronger foot and shoot, but the keeper sees it early and holds.", weak ? "warning" : ""]
    ],
    Striker: [
      ["Near-post run", "You dart across the centre-back and glance a shot just wide before the flag stays down.", strong ? "good" : ""],
      ["Hold-up play", "You pin the defender, bring the ball down, and lay it off before being clipped from behind.", strong ? "good" : ""]
    ]
  };
  return [...(byPosition[position] || []), ...shared];
}

function goalkeeperHighlights(rating) {
  const strong = rating >= 7.4;
  const weak = rating < 5.8;
  return [
    ["Early save", "You stay big at the near post and turn the shot behind for a corner.", strong ? "good" : ""],
    ["Claimed cross", "You come through traffic, catch cleanly, and calm the back line before restarting play.", strong ? "good" : ""],
    ["Pass under pressure", "You receive a back pass, open your body, and clip it wide before the striker closes.", strong ? "good" : ""],
    ["Handling scare", "A low shot skids awkwardly, you spill it for a second, then smother before anyone can tap in.", weak ? "warning" : ""]
  ];
}

function matchHeadline(rating, mvp) {
  if (mvp) return "MVP performance";
  if (rating >= 7.5) return "Strong performance";
  if (rating >= 6.2) return "Solid shift";
  if (rating >= 5.4) return "Mixed performance";
  return "Difficult game";
}

function matchSummary(rating, mvp) {
  if (mvp) return "You were the story of the match. Reporters want to hear from you.";
  if (rating >= 7.5) return "You improved your standing with the manager and the crowd.";
  if (rating >= 6.2) return "You did your job without changing the whole conversation.";
  if (rating >= 5.4) return "There were useful moments, but the staff still saw gaps.";
  return "The match exposed weaknesses and put pressure on next week.";
}

function managerThought(rating) {
  if (rating >= 8.4) return "That is the standard. Talent gets attention, but repeatability gets a career.";
  if (rating >= 7.5) return "Good work. I saw courage, but I also want better decisions when tired.";
  if (rating >= 6.2) return "You were reliable. Now show me you can affect the game, not just survive it.";
  if (rating >= 5.4) return "You kept going, but you looked unsure in key moments. Train with purpose.";
  return "I need a response. Bad games happen, but habits after bad games tell me who you are.";
}

function handlePress(choice) {
  const result = state.pendingMatch.result;
  if (!result || !result.mvp) return;
  const player = state.player;
  let title = "Press conference";
  let body = "";
  let type = "good";

  if (choice === "humble") {
    player.attitude = clamp(player.attitude - 5);
    player.fame = clamp(player.fame + 1.2);
    state.career.coachTrust = clamp(state.career.coachTrust + 2);
    body = "You credited teammates and staff. Fame rose steadily without feeding an arrogant image.";
  }

  if (choice === "confident") {
    const arroganceRisk = player.attitude > 66 || player.fame > 70;
    player.attitude = clamp(player.attitude + 7);
    player.fame = clamp(player.fame + (result.rating > 8.5 && !arroganceRisk ? 4 : arroganceRisk ? -3 : 2));
    type = arroganceRisk ? "warning" : "good";
    body = arroganceRisk
      ? "The quotes sounded arrogant to some outlets. High fame turned confidence into backlash."
      : "You owned the moment and the headlines gave you a lift.";
  }

  if (choice === "country") {
    player.attitude = clamp(player.attitude - 1);
    player.fame = clamp(player.fame + 1.5 + player.countrySpotlight);
    state.career.reputation = clamp(state.career.reputation + player.countrySpotlight / 2);
    body = `You spoke about ${player.nationality}. The lower-ranked nation spotlight made the story travel further at home.`;
    addNews(player.nationality, "National", `${player.name} speaks for ${player.nationality}`, `The post-match message resonated at home and added to the home-hero story.`);
  }

  if (choice === "skip") {
    const swing = player.fame > 60 && player.attitude > 62 ? -5 : result.rating >= 8.4 ? 1.5 : -1.8;
    player.fame = clamp(player.fame + swing);
    player.attitude = clamp(player.attitude + 1);
    type = swing < 0 ? "warning" : "";
    title = "Skipped media";
    body = swing < 0
      ? "The outlet framed it as arrogance. Fame dipped because your public image is already sharp-edged."
      : "The outlet kept the focus on your performance, so the damage was small.";
  }

  addLog(title, body, type);
  finishWeek();
}

function finishWeek() {
  maybeAgentApproach();
  evaluateContractsAndMilestones();
  updateLeagueTables();
  updateClubEconomies();
  updateClubPolitics();
  applyPlayerManagerPressure();
  advanceCalendar();
  state.phase = "weekly";
  state.pendingMatch = null;
  saveState();
  render();
}

function applyPlayerManagerPressure() {
  const result = state.pendingMatch?.result;
  const club = currentWorldClub();
  if (!result || !club?.manager) return;
  const playerTeamLost = result.teamScore < result.opponentScore;
  const important = /Important|First-team|Starter/i.test(state.player.role) || state.career.reputation > 52;
  const excluded = result.rating === 0 || state.career.missedTrainingThisWeek > 1 || state.career.coachTrust < 22;
  const heat = (club.manager.fanPressure || 50) + (club.chairman?.pressure || 50) / 2 - (club.manager.patience || 50) / 2;
  if (playerTeamLost && important && excluded && Math.random() < clamp((heat - 45) / 80, 0.04, 0.38)) {
    const oldManager = club.manager.name;
    club.manager = createManager(club, Math.floor(randomBetween(1, 999)));
    state.career.coachTrust = clamp(state.career.coachTrust + 8);
    addLog("Manager changed", `${oldManager} paid for poor results and selection decisions. A new manager resets part of the trust picture.`, "warning");
    addNews(club.country, "Manager", `${club.name} replace ${oldManager}`, `Fan pressure rose after a loss where key selection calls were questioned.`);
  }
}

function updateLeagueTables() {
  state.world.fixtures ||= buildMatchSchedules(state.world.leagues, state.world.competitions);
  Object.keys(state.world.leagues).forEach((league) => {
    state.world.leagues[league] = simulateScheduledRound(league, state.world.leagues[league]);
  });
  Object.keys(state.world.competitions).forEach((competition) => {
    state.world.competitions[competition].table = simulateScheduledRound(competition, state.world.competitions[competition].table);
  });
  refreshLeaderboards();
}

function simulateScheduledRound(league, table) {
  const rounds = state.world.fixtures?.[league] || [];
  const round = rounds.find((item) => item.matches.some((match) => !match.played));
  if (!round) return table;
  const rows = new Map(table.map((row) => [row.club, { ...row }]));
  round.matches.forEach((match) => {
    if (match.played) return;
    const injected = playerResultForFixture(league, round.round, match);
    const score = injected || simulateFixtureScore(match.home, match.away);
    match.homeScore = score.homeScore;
    match.awayScore = score.awayScore;
    match.events = score.events?.length ? score.events : generateMatchEvents(match.home, match.away, match.homeScore, match.awayScore);
    match.played = true;
    applyMatchToRows(rows, match.home, match.away, match.homeScore, match.awayScore);
  });
  state.ui.scoreRound = round.round;
  return [...rows.values()].sort((a, b) => b.pts - a.pts || b.gd - a.gd || b.gf - a.gf);
}

function playerResultForFixture(league, round, match) {
  const result = state.pendingMatch?.result;
  if (!result || state.pendingMatch.competition !== league || state.pendingMatch.round !== round) return null;
  const teams = [state.player.club, state.pendingMatch.opponent];
  if (!teams.includes(match.home) || !teams.includes(match.away)) return null;
  if (match.home === result.homeTeam && match.away === result.awayTeam) {
    return { homeScore: result.homeScore, awayScore: result.awayScore, events: result.events || [] };
  }
  return { homeScore: result.awayScore, awayScore: result.homeScore, events: flipMatchEvents(result.events || [], result.homeTeam, result.awayTeam) };
}

function applyMatchToRows(rows, home, away, homeScore, awayScore) {
  const homeRow = rows.get(home);
  const awayRow = rows.get(away);
  if (!homeRow || !awayRow) return;
  updateRowFromScore(homeRow, homeScore, awayScore);
  updateRowFromScore(awayRow, awayScore, homeScore);
}

function updateRowFromScore(row, gf, ga) {
  row.p += 1;
  row.gf += gf;
  row.ga += ga;
  row.gd = row.gf - row.ga;
  if (gf > ga) {
    row.w += 1;
    row.pts += 3;
    row.form = `W${row.form}`.slice(0, 5);
  } else if (gf === ga) {
    row.d += 1;
    row.pts += 1;
    row.form = `D${row.form}`.slice(0, 5);
  } else {
    row.l += 1;
    row.form = `L${row.form}`.slice(0, 5);
  }
}

function simulateFixtureScore(home, away, homeOverride = null, awayOverride = null) {
  const homeStrength = homeOverride ?? clubStrengthByTableName(home);
  const awayStrength = awayOverride ?? clubStrengthByTableName(away);
  const homeNoise = randomBetween(-12, 12);
  const awayNoise = randomBetween(-12, 12);
  const homeExpected = clamp(1.22 + (homeStrength + homeNoise - awayStrength) / 42 + 0.18, 0.12, 3.2);
  const awayExpected = clamp(1.04 + (awayStrength + awayNoise - homeStrength) / 44, 0.1, 2.9);
  const homeScore = poisson(homeExpected);
  const awayScore = poisson(awayExpected);
  return {
    homeScore,
    awayScore,
    events: generateMatchEvents(home, away, homeScore, awayScore)
  };
}

function flipMatchEvents(events) {
  return events.map((event) => ({ ...event }));
}

function generateMatchEvents(home, away, homeScore, awayScore, forced = {}) {
  const events = [];
  const homeGoalMinutes = goalMinutes(homeScore);
  const awayGoalMinutes = goalMinutes(awayScore);
  const forcedUsed = { playerGoal: false, playerAssist: false };

  homeGoalMinutes.forEach((minute, index) => {
    events.push(goalEvent(home, minute, forcedForTeam(home, forced, forcedUsed, index)));
  });
  awayGoalMinutes.forEach((minute, index) => {
    events.push(goalEvent(away, minute, forcedForTeam(away, forced, forcedUsed, index)));
  });

  const yellowCount = randomCardCount(homeScore + awayScore);
  for (let index = 0; index < yellowCount; index += 1) {
    const team = Math.random() < 0.5 ? home : away;
    events.push(cardEvent(team, "yellow"));
  }

  if (Math.random() < 0.11) {
    events.push(cardEvent(Math.random() < 0.5 ? home : away, "red"));
  }

  return events.sort((a, b) => a.minute - b.minute || eventOrder(a.type) - eventOrder(b.type));
}

function forcedForTeam(team, forced, forcedUsed, index) {
  if (!forced.team || forced.team !== team) return null;
  if (forced.goal && !forcedUsed.playerGoal) {
    forcedUsed.playerGoal = true;
    return { scorer: state.player.name };
  }
  if (forced.assist && !forcedUsed.playerAssist && (forced.goal ? index > 0 : true)) {
    forcedUsed.playerAssist = true;
    return { assist: state.player.name };
  }
  return null;
}

function goalMinutes(count) {
  return Array.from({ length: count }, () => randomBetween(7, 90))
    .map((minute) => Math.round(minute))
    .sort((a, b) => a - b);
}

function goalEvent(team, minute, forced = null) {
  const scorer = forced?.scorer || pickMatchPlayer(team, "scorer").name;
  const assist = forced?.assist || (Math.random() < 0.72 ? pickMatchPlayer(team, "assist", scorer).name : "");
  return {
    minute,
    team,
    type: "goal",
    player: scorer,
    assist
  };
}

function cardEvent(team, type) {
  const player = pickMatchPlayer(team, "card").name;
  return {
    minute: Math.round(randomBetween(12, 89)),
    team,
    type,
    player,
    assist: ""
  };
}

function pickMatchPlayer(team, role, avoidName = "") {
  const roster = playersForMatchTeam(team);
  const weighted = roster
    .filter((player) => player.name !== avoidName)
    .map((player) => ({ ...player, weight: Math.max(1, matchPlayerWeight(player, role) - 38) }));
  const total = weighted.reduce((sum, player) => sum + player.weight, 0);
  let draw = randomBetween(0, total || 1);
  for (const player of weighted) {
    draw -= player.weight;
    if (draw <= 0) return player;
  }
  return weighted[0] || { name: "Academy Player", position: "CM", overall: 50 };
}

function playersForMatchTeam(team) {
  const baseName = team.replace(" Academy", "");
  const club = state.world.clubs.find((item) => item.name === baseName);
  if (!club) return fallbackMatchPlayers(team);
  const roster = team.includes("Academy") ? club.academyRoster : club.roster;
  return roster.slice(0, 18).map((player) => ({
    name: player.name,
    position: player.position,
    overall: player.overall
  }));
}

function fallbackMatchPlayers(team) {
  const seed = team.length;
  return Array.from({ length: 11 }, (_, index) => ({
    name: `${["Ari", "Leo", "Mika", "Noah", "Yusuf", "Oscar", "Theo", "Joao", "Kenji", "Adam", "Ryan"][(seed + index) % 11]} ${["Halim", "Silva", "Turner", "Park", "Lim", "Mendoza", "Dubois", "Foden", "Yamada", "Khan", "Moreno"][(seed + index * 2) % 11]}`,
    position: ["GK", "FB", "CB", "CB", "FB", "CM", "CM", "WG", "WG", "ST", "ST"][index],
    overall: 50 + ((seed + index * 3) % 24)
  }));
}

function matchPlayerWeight(player, role) {
  const pos = player.position;
  if (role === "scorer") {
    return player.overall + (pos === "ST" ? 26 : pos === "WG" ? 18 : pos === "CM" ? 9 : pos === "CB" ? 3 : 1);
  }
  if (role === "assist") {
    return player.overall + (pos === "CM" ? 22 : pos === "WG" ? 18 : pos === "FB" ? 12 : pos === "ST" ? 6 : 2);
  }
  return player.overall + (pos === "CB" ? 18 : pos === "FB" ? 14 : pos === "CM" ? 8 : pos === "GK" ? 3 : 5);
}

function randomCardCount(goals) {
  const base = Math.floor(randomBetween(0, 3.2));
  const heated = goals >= 4 && Math.random() < 0.28 ? 1 : 0;
  return clamp(base + heated, 0, 5);
}

function eventOrder(type) {
  if (type === "goal") return 1;
  if (type === "yellow") return 2;
  return 3;
}

function poisson(lambda) {
  const limit = Math.exp(-lambda);
  let product = 1;
  let goals = 0;
  do {
    goals += 1;
    product *= Math.random();
  } while (product > limit && goals < 8);
  return goals - 1;
}

function refreshLeaderboards() {
  const leaders = buildLeaderboards();
  Object.entries(state.world.leagues).forEach(([league, table]) => {
    leaders[league] = generatedLeadersForTable(league, table);
  });
  Object.entries(state.world.competitions).forEach(([competition, config]) => {
    leaders[competition] = generatedLeadersForTable(competition, config.table);
  });

  const careerPlayer = {
    name: state.player.name,
    club: state.player.club,
    league: currentLeagueName(),
    position: positions[state.player.position].short,
    value: state.career.goals
  };
  const current = leaders[currentLeagueName()] || emptyLeaderboards();
  if (state.career.goals > 0) current.scorers.unshift(careerPlayer);
  if (state.career.assists > 0) current.assists.unshift({ ...careerPlayer, value: state.career.assists });
  if (state.career.avgRating > 0) current.ratings.unshift({ ...careerPlayer, value: Number(state.career.avgRating.toFixed(2)) });
  leaders[currentLeagueName()] = sortLeaderSet(current);
  state.world.leaders = leaders;
}

function generatedLeadersForTable(league, table) {
  const played = Math.max(0, ...table.map((row) => row.p || 0));
  if (!played) return emptyLeaderboards();
  const scorers = [];
  const assists = [];
  const redCards = [];
  const ratings = [];

  table.forEach((row, rowIndex) => {
    const club = state.world.clubs.find((item) => item.name === row.club.replace(" Academy", ""));
    if (!club) return;
    const academy = league === "Academy League";
    const roster = academy ? club.academyRoster : club.roster;
    const players = roster.slice(0, 16).map((player) => ({
      ...player,
      club: academy ? `${club.name} Academy` : club.name,
      league
    }));
    const attacking = [...players].sort((a, b) => attackingWeight(b) - attackingWeight(a));
    const creators = [...players].sort((a, b) => creatorWeight(b) - creatorWeight(a));

    let remainingGoals = row.gf;
    let scorerIndex = 0;
    while (remainingGoals > 0 && scorerIndex < Math.min(5, attacking.length)) {
      const maxShare = Math.max(1, Math.ceil(row.gf * (0.48 - scorerIndex * 0.08)));
      const value = Math.min(remainingGoals, maxShare, Math.max(1, played * 2));
      scorers.push({ ...leaderRecord(attacking[scorerIndex], "goals", played), value });
      remainingGoals -= value;
      scorerIndex += 1;
    }

    const assistTotal = Math.max(0, row.gf - Math.round(row.gf * 0.24));
    let remainingAssists = assistTotal;
    let assistIndex = 0;
    while (remainingAssists > 0 && assistIndex < Math.min(4, creators.length)) {
      const value = Math.min(remainingAssists, Math.max(1, Math.ceil(assistTotal * (0.45 - assistIndex * 0.08))));
      assists.push({ ...leaderRecord(creators[assistIndex], "assists", played), value });
      remainingAssists -= value;
      assistIndex += 1;
    }

    if (rowIndex % 7 === 0 && row.p > 0 && Math.random() < 0.22) {
      const defender = players.find((player) => player.position === "CB" || player.position === "FB") || players[0];
      redCards.push({ ...leaderRecord(defender, "redCards", played), value: 1 });
    }
    players.slice(0, 8).forEach((player) => ratings.push(leaderRecord(player, "rating", played)));
  });

  return sortLeaderSet({ scorers, assists, redCards, ratings });
}

function sortLeaderSet(leaders) {
  return {
    scorers: [...leaders.scorers].sort((a, b) => b.value - a.value).slice(0, 15),
    assists: [...leaders.assists].sort((a, b) => b.value - a.value).slice(0, 15),
    redCards: [...leaders.redCards].sort((a, b) => b.value - a.value).slice(0, 15),
    ratings: [...leaders.ratings].sort((a, b) => b.value - a.value).slice(0, 15)
  };
}

function attackingWeight(player) {
  const role = player.position === "ST" ? 16 : player.position === "WG" ? 12 : player.position === "CM" ? 6 : 2;
  return player.overall + role;
}

function creatorWeight(player) {
  const role = player.position === "CM" ? 15 : player.position === "WG" ? 13 : player.position === "FB" ? 7 : 3;
  return player.overall + role;
}

function clubStrengthByTableName(name) {
  const baseName = name.replace(" Academy", "");
  const club = state.world.clubs.find((item) => item.name === baseName);
  if (!club) return 55;
  return name.includes("Academy") ? club.overall - 21 : club.overall;
}

function currentGameDate() {
  return addDays(state.career.startDate || GAME_START_DATE, ((state.career.totalWeeks || 1) - 1) * 7);
}

function eventDate(weekNumber) {
  return addDays(state.career.startDate || GAME_START_DATE, (Math.max(1, weekNumber || 1) - 1) * 7);
}

function nextFixture(opponent = null) {
  const isAcademy = state.player.tier === "Academy" || state.player.club.includes("Academy");
  const competition = isAcademy ? "Academy League" : state.player.tier;
  const config = isAcademy ? { matches: 30, clubs: 20, country: state.player.nationality, level: 0 } : leagueConfigs[competition] || { matches: 30, clubs: 20 };
  const round = Math.min(config.matches, Math.max(1, state.career.week || 1));
  const scheduled = scheduledFixtureForPlayer(competition, round);
  if (scheduled) return scheduled;
  const calendar = leagueCalendar(config);
  const fixtureDate = addDays(calendar.start, (round - 1) * 7);
  const chosenOpponent = opponent || pickOpponent();
  const opponentName = isAcademy ? `${chosenOpponent.name} Academy` : chosenOpponent.name;
  return {
    date: fixtureDate,
    opponent: opponentName,
    competition,
    round,
    maxMatches: config.matches,
    home: round % 2 === 1
  };
}

function scheduledFixtureForPlayer(competition, roundNumber) {
  const rounds = state.world.fixtures?.[competition] || [];
  const round = rounds[Math.max(0, roundNumber - 1)] || rounds.find((item) => item.matches.some((match) => !match.played));
  if (!round) return null;
  const teamName = state.player.club;
  const match = round.matches.find((item) => item.home === teamName || item.away === teamName);
  if (!match) return null;
  return {
    date: round.date,
    opponent: match.home === teamName ? match.away : match.home,
    competition,
    round: round.round,
    maxMatches: rounds.length,
    home: match.home === teamName
  };
}

function upcomingFixtures(count = 6) {
  const isAcademy = state.player.tier === "Academy" || state.player.club.includes("Academy");
  const competition = isAcademy ? "Academy League" : state.player.tier;
  const config = isAcademy ? { matches: 30, clubs: 20, country: state.player.nationality, level: 0 } : leagueConfigs[competition] || { matches: 30, clubs: 20 };
  const calendar = leagueCalendar(config);
  const baseRound = Math.max(1, state.career.week || 1);
  return Array.from({ length: count }, (_, index) => {
    const round = Math.min(config.matches, baseRound + index);
    const scheduled = scheduledFixtureForPlayer(competition, round);
    if (scheduled) return scheduled;
    const opponent = pickOpponent();
    return {
      date: addDays(calendar.start, (round - 1) * 7),
      opponent: isAcademy ? `${opponent.name} Academy` : opponent.name,
      competition,
      round,
      maxMatches: config.matches,
      home: round % 2 === 1
    };
  });
}

function leagueCalendar(config) {
  const year = Number((state?.career?.startDate || GAME_START_DATE).slice(0, 4));
  const country = config.country;
  let start = `${year}-08-10`;
  if (["Brazil", "Argentina", "Japan", "Korea Republic", "Malaysia"].includes(country)) start = `${year}-02-15`;
  if (country === "Malaysia") start = `${year}-05-10`;
  if (config.level === 0) start = `${year}-07-20`;
  const end = addDays(start, Math.max(0, (config.matches || 30) - 1) * 7);
  return { start, end };
}

function continentalCalendar(config) {
  const year = Number((state?.career?.startDate || GAME_START_DATE).slice(0, 4));
  const start = config.region === "South America" ? `${year}-03-05` : `${year}-09-10`;
  const end = addDays(start, Math.max(0, (config.matches || 8) - 1) * 21);
  return { start, end };
}

function addDays(dateString, days) {
  const date = new Date(`${dateString}T00:00:00Z`);
  date.setUTCDate(date.getUTCDate() + days);
  return date.toISOString().slice(0, 10);
}

function formatDisplayDate(dateString) {
  const date = new Date(`${dateString}T00:00:00Z`);
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric", timeZone: "UTC" });
}

function formatDateTime(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Not recorded";
  return date.toLocaleString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit"
  });
}

function updateClubPolitics() {
  Object.entries(state.world.leagues).forEach(([league, table]) => {
    if (league === "Academy League") return;
    table.forEach((row, index) => {
      const club = state.world.clubs.find((item) => item.name === row.club);
      if (!club || row.p < 8) return;
      const expectedTop = club.overall >= 86 ? 4 : club.overall >= 80 ? 7 : 12;
      const badPosition = index + 1 > expectedTop;
      const fanHeat = club.manager.fanPressure + club.chairman.ambition - club.chairman.patience;
      if (badPosition && fanHeat > 78 && Math.random() < 0.025) {
        const oldManager = club.manager.name;
        club.manager = createManager(club, Math.floor(randomBetween(1, 999)));
        addNews(club.country, "Manager", `${club.name} replace ${oldManager}`, `Fans demanded action after poor results. ${club.chairman.name} appointed ${club.manager.name} to steady the club.`);
      }
      if (badPosition && club.chairman.stability < 38 && row.p > 14 && Math.random() < 0.006) {
        const oldChairman = club.chairman.name;
        club.chairman = createChairman(club, Math.floor(randomBetween(1, 999)));
        addNews(club.country, "Boardroom", `${club.name} boardroom changes`, `${oldChairman} left after fan unrest and poor results. ${club.chairman.name} now sets the club direction.`);
      }
    });
  });
}

function updateClubEconomies() {
  Object.values(state.world.leagues).forEach((table) => {
    table.slice(0, 4).forEach((row, index) => {
      const club = state.world.clubs.find((item) => item.name === row.club);
      if (!club) return;
      club.fame = clamp(club.fame + (4 - index) * 0.08);
      club.finance = clamp(club.finance + (4 - index) * 0.04);
      if (index === 0 && row.p === row.maxMatches) {
        club.fame = clamp(club.fame + 4);
        club.finance = clamp(club.finance + 3);
        addNews(club.country, "Trophy", `${club.name} win ${row.league}`, `Trophy exposure lifted club fame and finances. The board can now invest more aggressively.`);
      }
    });
  });
}

function applyAgentAction(logs) {
  const agent = state.agent.current;

  if (!agent) {
    ensureAgentCandidates();
    return;
  }

  if (agent.care > 68 && Math.random() < agent.care / 450) {
    state.life.stress = clamp(state.life.stress - 2);
    state.life.familyPressure = clamp(state.life.familyPressure - 1);
  }

  const chance = clamp((agent.connections + agent.negotiation + state.career.reputation * 0.7 + state.player.fame * 0.35 + overall() * 0.4) / 430, 0.08, 0.64);
  if (state.agent.offers.length < 3 && Math.random() < chance) {
    createOffer("Agent pathway work", true);
    logs.push(["Agent update", `${agent.name} found a role conversation. Check the contract fit and wages before deciding.`, "good"]);
  }

  ensureAgentCandidates();
}

function maybeAgentApproach() {
  const previousBest = Math.max(0, ...(state.agent.candidates || []).map((agent) => agent.quality || 0));
  ensureAgentCandidates();
  const newBest = Math.max(0, ...(state.agent.candidates || []).map((agent) => agent.quality || 0));
  if (newBest > previousBest + 6 && recentAverage() >= 6.8) {
    addLog("Agent list improved", "Your ratings attracted stronger representation options with better negotiation and connections.", "good");
  }
}

function createAgentCandidates(count = 3) {
  const attraction = overall() + state.career.reputation * 0.35 + state.player.fame * 0.22 + recentAverage() * 2.4;
  const eligible = agentPool
    .filter((agent) => agent.minOverall <= attraction + 12)
    .map((agent) => ({
      ...agent,
      draw: agent.quality + agent.negotiation + agent.connections - agent.feeRate * 1.4 - Math.max(0, agent.minOverall - attraction) * 2 + randomBetween(-6, 6)
    }))
    .sort((a, b) => b.draw - a.draw);

  return eligible
    .slice(0, count)
    .map((agent) => ({
      ...agent,
      id: uid("agent")
    }));
}

function ensureAgentCandidates() {
  const currentName = state.agent.current?.name;
  const candidates = createAgentCandidates(4).filter((agent) => agent.name !== currentName);
  state.agent.candidates = candidates;
}

function hireAgent(id) {
  const candidate = state.agent.candidates.find((item) => item.id === id);
  if (!candidate) return;
  state.agent.current = { ...candidate };
  ensureAgentCandidates();
  addLog("Agent hired", `${candidate.name} now represents you for a ${candidate.feeRate}% salary fee. Their strengths will shape offers.`, "good");
  saveState();
  render();
}

function sackAgent() {
  const agent = state.agent.current;
  if (!agent) return;
  const damage = agent.connections > 72 ? 5 : 2;
  state.agent.current = null;
  ensureAgentCandidates();
  state.career.reputation = clamp(state.career.reputation - damage);
  state.life.stress = clamp(state.life.stress + 5);
  addLog("Agent sacked", `${agent.name} was dismissed. You took back control, but the market may cool briefly.`, "warning");
  saveState();
  render();
}

function evaluateContractsAndMilestones() {
  const player = state.player;
  const career = state.career;
  const avg = recentAverage();
  const level = overall();

  if (career.totalWeeks > 6 && avg > 7.0 && state.agent.offers.length < 2 && Math.random() < 0.28) {
    createOffer("Academy performance review", Boolean(state.agent.current));
    addLog("Contract conversation", "Your ratings triggered a better contract conversation. Staying can be as valuable as moving.", "good");
  }

  if (player.stage === "Academy Scholar" && career.coachTrust > 46 && level > 39) {
    player.stage = "U18 Rotation";
    player.role = "U18 rotation player";
    career.reputation = clamp(career.reputation + 4);
    addLog("U18 pathway", "The academy moved you toward regular U18 minutes.", "good");
  }

  if (player.stage === "U18 Rotation" && career.coachTrust > 58 && level > 46 && avg > 6.5) {
    player.stage = "U18 Starter";
    player.role = "U18 starter";
    career.reputation = clamp(career.reputation + 7);
    addLog("Youth starter", "You became a regular youth starter. Scouts begin to notice consistency.", "good");
  }

  if (player.stage === "U18 Starter" && player.ageYears >= 17 && career.reputation > 28 && level > 53) {
    player.stage = "Reserve Prospect";
    player.role = "Reserve prospect";
    player.wage = Math.max(player.wage, 260);
    player.contractStarted = currentGameDate();
    addLog("First pro development deal", "The club gave you money and expectation. Family pressure may change now.", "good");
  }

  if (player.stage === "Reserve Prospect" && player.ageYears >= 18 && career.coachTrust > 64 && level > 60) {
    const seniorClub = currentWorldClub();
    player.stage = "First-team Breakthrough";
    player.role = "First-team rotation";
    if (seniorClub) {
      player.club = seniorClub.name;
      player.tier = seniorClub.tier;
      state.ui.league = seniorClub.tier;
    }
    player.wage = Math.max(player.wage, 900);
    player.contractStarted = currentGameDate();
    career.reputation = clamp(career.reputation + 10);
    addLog("First-team breakthrough", `Senior staff gave you a real role${seniorClub ? ` in ${seniorClub.tier}` : ""}. Every choice is louder now.`, "good");
  }
}

function createOffer(reason, viaAgent) {
  const player = state.player;
  const career = state.career;
  const agent = state.agent.current;
  const marketPower = overall() + career.reputation * 0.45 + player.fame * 0.22 + career.form * 0.14 + (agent ? (agent.connections + agent.negotiation) * 0.11 : 0);
  const worldClubs = state.world?.clubs?.length ? state.world.clubs : clubCatalog;
  const possible = worldClubs
    .map((club) => ({ ...club, adjustedOverall: clubOverall(club) }))
    .filter((club) => club.adjustedOverall <= marketPower + randomBetween(22, 42))
    .sort((a, b) => b.adjustedOverall - a.adjustedOverall);

  const club = possible[Math.floor(randomBetween(0, Math.min(6, possible.length)))] || worldClubs[worldClubs.length - 1];
  const fit = clamp(round(42 + club.pathway * 0.22 + (marketPower - clubOverall(club)) * 0.45 + randomBetween(-10, 12)));
  const role = offerRole(club, fit, player.ageYears);
  const wage = logicalWageOffer(club, fit, marketPower);
  const pressureReason = viaAgent && agent ? `${agent.name} helped improve the package, but role fit still matters.` : "The club explained a possible pathway.";

  state.agent.offers.unshift({
    id: uid("offer"),
    club: player.stage.includes("Academy") || player.ageYears < 18 ? `${club.name} Academy` : club.name,
    tier: player.stage.includes("Academy") || player.ageYears < 18 ? "Academy" : club.tier,
    distance: club.country === player.nationality ? "home country" : "abroad",
    role,
    wage,
    fit,
    reason: `${reason}. ${pressureReason}`
  });

  state.agent.offers = state.agent.offers.slice(0, 4);
  addNews(club.country, "Transfer", `Ramano Fabio: ${club.name} monitor ${player.name}`, `${club.name} have discussed a ${role.toLowerCase()} pathway. Value and role fit remain the key questions.`, "Ramano Fabio");
}

function offerRole(club, fit, age) {
  if (age < 17) return fit > 68 ? "U18 starter pathway" : "Academy prospect";
  if (age < 18) return fit > 63 ? "U21 and cup pathway" : "U18 rotation";
  if (fit < 50) return "Bench prospect";
  if (fit < 64) return "Rotation option";
  if (clubOverall(club) > overall() + 10) return "Loan pathway";
  return "Important player";
}

function logicalWageOffer(club, fit, marketPower) {
  const level = leagueConfigs[club.tier]?.level || 1;
  if (state.player.stage.includes("Academy") || state.player.ageYears < 17) {
    return Math.max(state.player.wage + 25, round(randomBetween(80, 320) + fit * 2 + (club.finance || club.base) * 1.2));
  }
  if (state.player.ageYears < 18 || state.player.stage.includes("U18")) {
    return Math.max(state.player.wage + 45, round(randomBetween(180, 650) + fit * 4 + (club.finance || club.base) * 2));
  }
  const tierMultiplier = level === 1 ? randomBetween(11, 36) : level === 2 ? randomBetween(5, 15) : randomBetween(2.2, 7);
  const overspend = club.chairman?.spending > 82 && Math.random() < 0.12 ? randomBetween(1.25, 1.8) : 1;
  return Math.max(state.player.wage + 80, round((marketPower + fit + (club.finance || club.base)) * tierMultiplier * overspend));
}

function acceptOffer(id) {
  const offer = state.agent.offers.find((item) => item.id === id);
  if (!offer) return;
  const oldClub = state.player.club;
  state.player.club = offer.club;
  state.player.tier = offer.tier;
  state.player.role = offer.role;
  state.player.wage = Math.max(state.player.wage, offer.wage);
  state.player.contractStarted = currentGameDate();
  state.career.coachTrust = clamp(offer.fit + randomBetween(-6, 7));
  state.career.reputation = clamp(state.career.reputation + offer.fit / 13);
  state.career.form = clamp(state.career.form - (offer.fit < 55 ? 7 : 1));

  if (offer.distance === "abroad") {
    state.life.loneliness = clamp(state.life.loneliness + 11);
    state.life.family = clamp(state.life.family - 6);
    state.life.friends = clamp(state.life.friends - 7);
  }

  if (offer.fit < 52) {
    state.life.stress = clamp(state.life.stress + 8);
    addLog("Risky move accepted", `You left ${oldClub} for ${offer.club}, but the role fit is weak.`, "warning");
  } else {
    addLog("Contract accepted", `You joined ${offer.club} as ${offer.role}. A new environment means new pressure.`, "good");
  }
  addNews(offer.distance === "home country" ? state.player.nationality : "Global", "Transfer", `${state.player.name} agrees ${offer.club} move`, `The deal gives him a ${offer.role.toLowerCase()} role with a fit score of ${offer.fit}.`, "Ramano Fabio");

  state.agent.offers = state.agent.offers.filter((item) => item.id !== id);
  saveState();
  render();
}

function rejectOffer(id) {
  const offer = state.agent.offers.find((item) => item.id === id);
  if (!offer) return;
  state.agent.offers = state.agent.offers.filter((item) => item.id !== id);
  addLog("Offer rejected", `You turned down ${offer.club}. Fit, timing, and life balance still matter.`, "");
  saveState();
  render();
}

function advanceCalendar() {
  const player = state.player;
  const career = state.career;

  career.totalWeeks += 1;
  career.week += 1;
  player.ageWeeks += 1;
  processWeeklyPay();
  resolveInvestments();

  if (player.ageWeeks >= 52) {
    player.ageYears += 1;
    player.ageWeeks = 0;
    addLog("Birthday", `${player.name} turned ${player.ageYears}. Development time is precious.`, "");
  }

  if (career.week > 44) endSeason();
}

function endSeason() {
  const career = state.career;
  const avg = career.avgRating || 0;

  if (avg > 7.2 || career.goals + career.assists > 18 || career.cleanSheets > 12) {
    const award = `Season ${career.season} youth award`;
    career.awards.push(award);
    career.reputation = clamp(career.reputation + 8);
    state.player.fame = clamp(state.player.fame + state.player.countrySpotlight * 2);
    addLog("Season recognition", "Your season earned formal recognition and a fame boost.", "good");
  } else {
    addLog("Season finished", "The season reset the table, but your relationships and habits carried forward.", "");
  }

  career.season += 1;
  career.week = 1;
  career.appearances = 0;
  career.goals = 0;
  career.assists = 0;
  career.cleanSheets = 0;
  career.avgRating = 0;
  career.lastRating = null;
  career.ratingHistory = [];
  career.form = clamp(career.form * 0.78 + 12);
  state.life.stress = clamp(state.life.stress - 8);
  applyPromotionRelegation();
  state.world.leagues = buildLeagueTables(state.world.clubs);
  state.world.competitions = buildContinentalCompetitions(state.world.clubs);
  state.world.fixtures = buildMatchSchedules(state.world.leagues, state.world.competitions);
  state.world.leaders = buildLeaderboards();
}

function applyPromotionRelegation() {
  const pairs = Object.entries(leagueConfigs)
    .filter(([, config]) => config.level && config.level > 1 && config.promotion > 0)
    .map(([lower, config]) => {
      const upper = Object.entries(leagueConfigs)
        .find(([, upperConfig]) => upperConfig.country === config.country && upperConfig.level === config.level - 1)?.[0];
      return upper ? [upper, lower] : null;
    })
    .filter(Boolean);
  pairs.forEach(([upper, lower]) => {
    const upperTable = state.world.leagues[upper];
    const lowerTable = state.world.leagues[lower];
    if (!upperTable || !lowerTable) return;
    const relegationCount = leagueConfigs[upper]?.relegation || 0;
    const promotionCount = leagueConfigs[lower]?.promotion || 0;
    const movementCount = Math.min(relegationCount, promotionCount);
    if (!movementCount) return;
    const relegated = upperTable.slice(-movementCount).map((row) => row.club);
    const promoted = lowerTable.slice(0, movementCount).map((row) => row.club);
    state.world.clubs.forEach((club) => {
      if (relegated.includes(club.name)) {
        club.tier = lower;
        club.finance = clamp(club.finance - 8);
        club.fame = clamp(club.fame - 5);
        addNews(club.country, "Relegation", `${club.name} drop to ${lower}`, "Poor results forced a reset. Contracts, morale, and transfer desire will shift.");
      }
      if (promoted.includes(club.name)) {
        club.tier = upper;
        club.finance = clamp(club.finance + 9);
        club.fame = clamp(club.fame + 7);
        addNews(club.country, "Promotion", `${club.name} promoted to ${upper}`, "Promotion money and exposure make the club more attractive.");
      }
    });
  });
}

function addLog(title, body, type = "") {
  state.log.unshift({
    title,
    body,
    type,
    week: state.career.totalWeeks
  });
  state.log = state.log.slice(0, 50);
}

function addNews(country, category, headline, body, sourceName = null) {
  const source = sourceName ? { name: sourceName } : pickBroadcaster(country, state.world.news.length);
  state.world.news.unshift({
    id: uid("news"),
    week: state.career.totalWeeks,
    country,
    source: source.name,
    category,
    headline,
    body
  });
  state.world.news = state.world.news.slice(0, 120);
}

function pickBroadcaster(country, offset = 0) {
  const countrySources = broadcasters.filter((source) => source.country === country);
  if (countrySources.length) return countrySources[offset % countrySources.length];
  return broadcasters[offset % broadcasters.length];
}

function lifeLabel() {
  const life = state.life;
  if (life.wellbeing < 35 || life.loneliness > 75) return "High risk";
  if (life.stress > 68 || life.loneliness > 58) return "Under strain";
  if (life.wellbeing > 70 && average([life.family, life.friends, life.relationship]) > 58) return "Well supported";
  return "Managing";
}

function attitudeLabel() {
  const value = state.player.attitude;
  if (value > 72) return "arrogant";
  if (value > 56) return "confident";
  if (value < 30) return "humble";
  return "balanced";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

render();
