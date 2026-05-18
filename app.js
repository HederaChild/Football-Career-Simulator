const SAVE_KEY = "full-time-life-save-v3";
const RANKING_NOTE = "FIFA/Coca-Cola Men's World Ranking baseline: 1 April 2026.";

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
  Goalkeeper: { short: "GK", x: "12%", y: "50%", technical: 28, physical: 32, tactical: 35, mentality: 35 },
  "Full-back": { short: "FB", x: "32%", y: "24%", technical: 32, physical: 35, tactical: 32, mentality: 31 },
  "Centre-back": { short: "CB", x: "26%", y: "50%", technical: 29, physical: 37, tactical: 35, mentality: 33 },
  Midfielder: { short: "CM", x: "50%", y: "50%", technical: 36, physical: 32, tactical: 36, mentality: 33 },
  Winger: { short: "WG", x: "68%", y: "24%", technical: 36, physical: 35, tactical: 30, mentality: 31 },
  Striker: { short: "ST", x: "80%", y: "50%", technical: 35, physical: 34, tactical: 31, mentality: 34 }
};

const clubCatalog = [
  { name: "London Blue", country: "England", city: "London", tier: "Premier Division", base: 82, pathway: 58, pressure: 82 },
  { name: "London Red", country: "England", city: "London", tier: "Premier Division", base: 88, pathway: 63, pressure: 78 },
  { name: "North London Lily", country: "England", city: "London", tier: "Premier Division", base: 84, pathway: 66, pressure: 70 },
  { name: "Manchester Sky", country: "England", city: "Manchester", tier: "Premier Division", base: 94, pathway: 45, pressure: 88 },
  { name: "Manchester Red", country: "England", city: "Manchester", tier: "Premier Division", base: 83, pathway: 62, pressure: 86 },
  { name: "Merseyside Red", country: "England", city: "Liverpool", tier: "Premier Division", base: 91, pathway: 54, pressure: 84 },
  { name: "Tyneside Black White", country: "England", city: "Newcastle", tier: "Premier Division", base: 80, pathway: 70, pressure: 68 },
  { name: "Birmingham Claret", country: "England", city: "Birmingham", tier: "Premier Division", base: 78, pathway: 72, pressure: 61 },
  { name: "Madrid White", country: "Spain", city: "Madrid", tier: "La Liga", base: 94, pathway: 44, pressure: 90 },
  { name: "Madrid Red White", country: "Spain", city: "Madrid", tier: "La Liga", base: 86, pathway: 58, pressure: 76 },
  { name: "Catalonia Garnet", country: "Spain", city: "Barcelona", tier: "La Liga", base: 89, pathway: 57, pressure: 84 },
  { name: "Basque Red White", country: "Spain", city: "Bilbao", tier: "La Liga", base: 80, pathway: 76, pressure: 62 },
  { name: "Seville Green White", country: "Spain", city: "Seville", tier: "La Liga", base: 77, pathway: 73, pressure: 58 },
  { name: "Milan Red Black", country: "Italy", city: "Milan", tier: "Serie A", base: 86, pathway: 61, pressure: 76 },
  { name: "Milan Blue Black", country: "Italy", city: "Milan", tier: "Serie A", base: 89, pathway: 56, pressure: 83 },
  { name: "Turin Stripes", country: "Italy", city: "Turin", tier: "Serie A", base: 84, pathway: 59, pressure: 80 },
  { name: "Naples Blue", country: "Italy", city: "Naples", tier: "Serie A", base: 87, pathway: 62, pressure: 81 },
  { name: "Rome Maroon", country: "Italy", city: "Rome", tier: "Serie A", base: 80, pathway: 70, pressure: 66 },
  { name: "Munich Red", country: "Germany", city: "Munich", tier: "Bundesliga", base: 92, pathway: 51, pressure: 86 },
  { name: "Dortmund Yellow", country: "Germany", city: "Dortmund", tier: "Bundesliga", base: 85, pathway: 75, pressure: 72 },
  { name: "Leverkusen Works", country: "Germany", city: "Leverkusen", tier: "Bundesliga", base: 87, pathway: 72, pressure: 68 },
  { name: "Saxony Red", country: "Germany", city: "Leipzig", tier: "Bundesliga", base: 82, pathway: 73, pressure: 65 },
  { name: "Paris Capital", country: "France", city: "Paris", tier: "Ligue 1", base: 91, pathway: 49, pressure: 88 },
  { name: "Marseille Sky", country: "France", city: "Marseille", tier: "Ligue 1", base: 81, pathway: 68, pressure: 74 },
  { name: "Lyon White", country: "France", city: "Lyon", tier: "Ligue 1", base: 78, pathway: 75, pressure: 64 },
  { name: "Monaco Red White", country: "France", city: "Monaco", tier: "Ligue 1", base: 80, pathway: 72, pressure: 61 },
  { name: "Lisbon Green White", country: "Portugal", city: "Lisbon", tier: "Primeira", base: 84, pathway: 74, pressure: 67 },
  { name: "Lisbon Red", country: "Portugal", city: "Lisbon", tier: "Primeira", base: 85, pathway: 69, pressure: 73 },
  { name: "Porto Blue", country: "Portugal", city: "Porto", tier: "Primeira", base: 83, pathway: 70, pressure: 71 },
  { name: "Amsterdam Red White", country: "Netherlands", city: "Amsterdam", tier: "Eredivisie", base: 80, pathway: 82, pressure: 62 },
  { name: "Eindhoven Red White", country: "Netherlands", city: "Eindhoven", tier: "Eredivisie", base: 83, pathway: 78, pressure: 66 },
  { name: "Rotterdam Red White", country: "Netherlands", city: "Rotterdam", tier: "Eredivisie", base: 79, pathway: 77, pressure: 63 },
  { name: "Seoul Red Black", country: "Korea Republic", city: "Seoul", tier: "K League", base: 69, pathway: 82, pressure: 50 },
  { name: "Ulsan Blue", country: "Korea Republic", city: "Ulsan", tier: "K League", base: 72, pathway: 79, pressure: 56 },
  { name: "Jeonbuk Green", country: "Korea Republic", city: "Jeonju", tier: "K League", base: 71, pathway: 80, pressure: 55 },
  { name: "Kuala Lumpur Stripes", country: "Malaysia", city: "Kuala Lumpur", tier: "Malaysia Super League", base: 55, pathway: 88, pressure: 42 },
  { name: "Johor Southern", country: "Malaysia", city: "Johor Bahru", tier: "Malaysia Super League", base: 62, pathway: 77, pressure: 55 },
  { name: "Klang Valley Red", country: "Malaysia", city: "Shah Alam", tier: "Malaysia Super League", base: 56, pathway: 84, pressure: 44 },
  { name: "Penang Island", country: "Malaysia", city: "George Town", tier: "Malaysia Super League", base: 53, pathway: 86, pressure: 39 },
  { name: "Tokyo Blue Red", country: "Japan", city: "Tokyo", tier: "J League", base: 72, pathway: 80, pressure: 56 },
  { name: "Yokohama Navy", country: "Japan", city: "Yokohama", tier: "J League", base: 73, pathway: 78, pressure: 58 },
  { name: "Saitama Red", country: "Japan", city: "Saitama", tier: "J League", base: 72, pathway: 76, pressure: 60 },
  { name: "Rio Red Black", country: "Brazil", city: "Rio de Janeiro", tier: "Serie A Brazil", base: 80, pathway: 82, pressure: 69 },
  { name: "Sao Paulo Green", country: "Brazil", city: "Sao Paulo", tier: "Serie A Brazil", base: 78, pathway: 82, pressure: 66 },
  { name: "Buenos Aires Blue Gold", country: "Argentina", city: "Buenos Aires", tier: "Primera Argentina", base: 80, pathway: 83, pressure: 72 },
  { name: "Buenos Aires Red White", country: "Argentina", city: "Buenos Aires", tier: "Primera Argentina", base: 79, pathway: 83, pressure: 70 }
];

const academyPrograms = clubCatalog.map((club) => ({
  ...club,
  name: `${club.name} Academy`,
  tier: "Academy",
  academyQuality: clamp(Math.round(club.base + club.pathway / 10), 45, 96),
  wage: 0
}));

const agentPool = [
  { name: "Maya Fernandes", style: "Patient builder", quality: 62, loyalty: 78, connections: 55, pushiness: 23, patience: 82 },
  { name: "Leon Clarke", style: "Connected negotiator", quality: 72, loyalty: 58, connections: 78, pushiness: 44, patience: 55 },
  { name: "Bruno Silva", style: "Commission hunter", quality: 67, loyalty: 34, connections: 74, pushiness: 82, patience: 27 },
  { name: "Samira Holt", style: "Family-first adviser", quality: 58, loyalty: 82, connections: 47, pushiness: 18, patience: 74 },
  { name: "Owen Mercer", style: "Big move specialist", quality: 76, loyalty: 45, connections: 86, pushiness: 70, patience: 38 }
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

const agentActions = {
  none: { title: "Stay Patient", text: "Let football speak. Agents may approach if ratings rise." },
  ask: { title: "Ask Around", text: "Quietly let people know you would listen." },
  pathway: { title: "Demand a Pathway", text: "Push for a role, loan, or better minutes." },
  boundaries: { title: "Set Boundaries", text: "Tell the agent not to force a move." },
  market: { title: "Explore Market", text: "Ask for offers and interest." }
};

let state = loadState();
let selected = { career: "technical", life: "family", agent: "none" };

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

function overall(player = state.player) {
  const attr = player.attributes;
  return average([attr.technical, attr.physical, attr.tactical, attr.mentality]);
}

function recentAverage() {
  const ratings = state.career.ratingHistory.slice(0, 5);
  if (!ratings.length) return 0;
  return average(ratings);
}

function saveState() {
  localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

function loadState() {
  try {
    const stored = localStorage.getItem(SAVE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
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
      fame: clamp(8 + (nation.rank > 80 ? 6 : 0)),
      attitude: 42,
      countryAwards: 0,
      attributes: {
        technical: template.technical,
        physical: template.physical,
        tactical: template.tactical,
        mentality: template.mentality
      }
    },
    career: {
      totalWeeks: 1,
      season: 1,
      week: 1,
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
      awards: []
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
    log: []
  };

  state.academyOffers = generateAcademyContracts();
  addLog("Academy contracts arrived", "Choose your first academy carefully. Pathway, pressure, and distance will shape your early years.", "good");
  selected = { career: "technical", life: "family", agent: "none" };
  saveState();
  render();
}

function generateAcademyContracts() {
  const homeCountry = state.player.nationality;
  const weighted = academyPrograms.map((program) => {
    const sameCountry = program.country === homeCountry;
    const sameRegion = ["Malaysia", "Japan", "Korea Republic"].includes(program.country) && ["Malaysia", "Japan", "Korea Republic", "Indonesia", "Thailand", "Philippines", "Singapore"].includes(homeCountry);
    const fit = clamp(round(44 + program.pathway * 0.28 + program.academyQuality * 0.18 + (sameCountry ? 17 : 0) + (sameRegion ? 7 : 0) - program.pressure * 0.08 + randomBetween(-8, 8)));
    return {
      id: uid("academy"),
      club: program.name,
      country: program.country,
      city: program.city,
      tier: "Academy",
      role: fit > 72 ? "U16 scholar with early U18 pathway" : fit > 58 ? "U16 academy scholar" : "Development prospect",
      wage: 0,
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
      createCareer(new FormData(startForm));
    });
  }

  const continueButton = document.querySelector("[data-continue]");
  if (continueButton) {
    continueButton.addEventListener("click", () => {
      state = loadState();
      render();
    });
  }

  document.querySelectorAll("[data-select]").forEach((button) => {
    button.addEventListener("click", () => {
      selected[button.dataset.group] = button.dataset.select;
      render();
    });
  });

  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => handleAction(button.dataset.action, button.dataset.id));
  });
}

function setupTemplate() {
  const hasSave = Boolean(loadState());
  return `
    <section class="app-shell">
      <header class="topbar">
        <div class="brand">
          <h1>Full Time Life</h1>
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
          <button class="primary-btn" type="submit">Start academy offers</button>
          ${hasSave ? `<button class="secondary-btn" type="button" data-continue>Continue saved career</button>` : ""}
          <p class="footer-note">${RANKING_NOTE} Lower-ranked nations give bigger home-hero fame when you perform.</p>
        </form>

        <div class="intro-board">
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
        </div>
      </div>
    </section>
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

  return `
    <section class="app-shell">
      ${topbarTemplate()}
      <div class="dashboard">
        <div class="column">
          ${notificationsPanel()}
          ${matchCenterPanel()}
          ${playerPanel(age, ratingText)}
        </div>

        <div class="column">
          <section class="panel">
            <div class="panel-header">
              <div>
                <h2>This week</h2>
                <p>Set your routine, then enter matchday.</p>
              </div>
            </div>
            ${choiceSection("Career focus", "career", careerActions)}
            ${choiceSection("Life focus", "life", lifeActions)}
            ${choiceSection("Agent stance", "agent", availableAgentActions())}
            <div class="week-actions">
              <button class="primary-btn" type="button" data-action="advance">Advance to matchday</button>
              <button class="secondary-btn" type="button" data-action="save">Save</button>
            </div>
            <p class="footer-note">Growth is capped by age and level. Most weeks add about 1 point to the main focus, and less when stress is high.</p>
          </section>

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
        </div>

        <div class="column">
          ${footballPanel()}
          ${agentPanel()}
          ${offersPanel()}
          <section class="panel">
            <h2>Save controls</h2>
            <div class="save-actions">
              <button class="secondary-btn" type="button" data-action="save">Save career</button>
              <button class="danger-btn" type="button" data-action="reset">Reset career</button>
            </div>
          </section>
        </div>
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
            <div class="manager-note">
              <strong>Manager before the game</strong>
              <p>${escapeHtml(match.previewThought)}</p>
            </div>
            <div class="offer-meta">
              <span class="tag">Selected focus: ${careerActions[selected.career].title}</span>
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
            <div class="rating-big">${result.rating.toFixed(1)}</div>
            <div class="manager-note">
              <strong>Manager thoughts</strong>
              <p>${escapeHtml(result.managerThought)}</p>
            </div>
            <div class="event-item ${result.rating >= 7.6 ? "good" : result.rating < 5.7 ? "warning" : ""}">
              <h3>${escapeHtml(result.headline)}</h3>
              <p class="microcopy">${escapeHtml(result.summary)}</p>
            </div>
            ${result.mvp ? pressOptionsTemplate(result) : `<button class="primary-btn" type="button" data-action="finish-week">Continue career</button>`}
          </section>
        </div>
      </div>
    </section>
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
        <span class="pill">Season ${state.career.season}, Week ${state.career.week}</span>
        <span class="pill">Fame ${round(player.fame)}</span>
        <span class="pill">Attitude ${attitudeLabel()}</span>
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
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Next match</h2>
          <p>Prepare first, then proceed to game.</p>
        </div>
      </div>
      <div class="stat-grid">
        ${statLine("Recent avg", recentAverage() ? recentAverage().toFixed(2) : "none", "Last five ratings")}
        ${statLine("Manager trust", round(state.career.coachTrust), "Selection confidence")}
        ${statLine("Fame", round(state.player.fame), "Public attention")}
        ${statLine("Nation OVR", state.player.nationOverall, `${state.player.nationality} strength`)}
      </div>
    </section>
  `;
}

function playerPanel(age, ratingText) {
  const pos = positions[state.player.position];
  return `
    <section class="panel">
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

function footballPanel() {
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Football</h2>
          <p>Growth slows with age caps, stress, and high attributes.</p>
        </div>
      </div>
      <div class="meters">
        ${meter("Technical", state.player.attributes.technical)}
        ${meter("Physical", state.player.attributes.physical)}
        ${meter("Tactical", state.player.attributes.tactical, "blue")}
        ${meter("Mentality", state.player.attributes.mentality, "purple")}
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

function agentPanel() {
  const agent = state.agent.current;
  const candidates = state.agent.candidates;
  return `
    <section class="panel">
      <div class="panel-header">
        <div>
          <h2>Agent room</h2>
          <p>Agents approach automatically when ratings and fame rise.</p>
        </div>
      </div>
      ${agent ? `
        <div class="agent-card">
          <strong>${escapeHtml(agent.name)}</strong>
          <span class="microcopy">${escapeHtml(agent.style)}</span>
          ${meter("Quality", agent.quality)}
          ${meter("Loyalty", agent.loyalty, "blue")}
          ${meter("Connections", agent.connections, "purple")}
          ${meter("Pressure to move", agent.pressure, agent.pressure > 70 ? "risk" : agent.pressure > 45 ? "warn" : "")}
          <button class="danger-btn" type="button" data-action="sack-agent">Sack agent</button>
        </div>
      ` : `<div class="empty">No agent yet. Strong academy ratings will make agents approach you.</div>`}
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

function availableAgentActions() {
  if (!state.agent.current) {
    return {
      none: agentActions.none,
      ask: agentActions.ask
    };
  }
  return {
    pathway: agentActions.pathway,
    boundaries: agentActions.boundaries,
    market: agentActions.market
  };
}

function candidateTemplate(candidate) {
  return `
    <article class="candidate">
      <h3>${escapeHtml(candidate.name)}</h3>
      <p class="microcopy">${escapeHtml(candidate.style)}</p>
      <div class="candidate-meta">
        <span class="tag">Quality ${candidate.quality}</span>
        <span class="tag">Loyalty ${candidate.loyalty}</span>
        <span class="tag">Connections ${candidate.connections}</span>
        <span class="tag">Pushiness ${candidate.pushiness}</span>
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
      <span class="tag">Week ${event.week}</span>
    </article>
  `;
}

function handleAction(action, id) {
  if (action === "accept-academy") acceptAcademy(id);
  if (action === "advance") advanceToMatchday();
  if (action === "proceed-match") proceedMatch();
  if (action === "finish-week") finishWeek();
  if (action === "press") handlePress(id);
  if (action === "save") {
    saveState();
    addLog("Career saved", "Your progress is stored in this browser.", "good");
    render();
  }
  if (action === "reset" && window.confirm("Reset this career and clear the save?")) {
    localStorage.removeItem(SAVE_KEY);
    state = null;
    render();
  }
  if (action === "hire-agent") hireAgent(id);
  if (action === "sack-agent") sackAgent();
  if (action === "accept-offer") acceptOffer(id);
  if (action === "reject-offer") rejectOffer(id);
}

function acceptAcademy(id) {
  const offer = state.academyOffers.find((item) => item.id === id);
  if (!offer) return;

  state.player.club = offer.club;
  state.player.tier = offer.tier;
  state.player.role = offer.role;
  state.player.stage = "Academy Scholar";
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
  addLog("Academy contract signed", `You joined ${offer.club}. Fit ${offer.fit}, pathway ${offer.pathway}, pressure ${offer.pressure}.`, "good");
  saveState();
  render();
}

function advanceToMatchday() {
  if (state.phase !== "weekly") return;
  applyWeeklyRoutine();
  state.pendingMatch = createMatchContext();
  state.phase = "matchday";
  saveState();
  render();
}

function applyWeeklyRoutine() {
  const careerAction = careerActions[selected.career];
  const lifeAction = lifeActions[selected.life];
  const logs = [];

  applyTraining(careerAction, logs);
  applyLife(lifeAction, logs);
  applyAgentAction(logs);
  applySupportConsequences(logs);

  logs.reverse().forEach(([title, body, type]) => addLog(title, body, type));
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
    if (key !== action.focus && selected.career !== "recovery") addAttribute(key, secondaryGain / 3);
  });

  career.fitness = clamp(career.fitness + action.fitness);
  career.confidence = clamp(career.confidence + action.confidence);
  life.stress = clamp(life.stress + action.stress);

  if (selected.career === "recovery") {
    life.wellbeing = clamp(life.wellbeing + (life.supportPlan ? 14 : 7));
    life.supportPlan = false;
    logs.push(["Recovery focus", "You protected your body. That may matter more than a tiny attribute jump.", "good"]);
  }

  if (mainGain < 0.45) {
    logs.push(["Training barely stuck", "Stress, loneliness, fatigue, or age caps limited your development this week.", "warning"]);
  }
}

function addAttribute(key, amount) {
  const current = state.player.attributes[key];
  const cap = ageSoftCap();
  const capPenalty = current > cap ? 0.18 : current > cap - 3 ? 0.45 : 1;
  const elitePenalty = current > 82 ? 0.32 : current > 72 ? 0.62 : 1;
  state.player.attributes[key] = clamp(current + amount * capPenalty * elitePenalty);
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

function applyLife(action, logs) {
  const life = state.life;
  life.family = clamp(life.family + action.family);
  life.friends = clamp(life.friends + action.friends);
  life.relationship = clamp(life.relationship + action.relationship);
  life.loneliness = clamp(life.loneliness + action.loneliness);
  life.stress = clamp(life.stress + action.stress);
  life.wellbeing = clamp(life.wellbeing + action.wellbeing);

  if (selected.life !== "family") life.family = clamp(life.family - 1.3);
  if (selected.life !== "friends") life.friends = clamp(life.friends - 1.5);
  if (selected.life !== "relationship") life.relationship = clamp(life.relationship - 1.2);

  if (selected.life === "focus") {
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
  const opponent = pickOpponent();
  const isAcademy = state.player.tier === "Academy" || state.player.club.includes("Academy");
  const thought = state.career.fitness < 45
    ? "You are in the squad, but I need you to manage your body. Do not chase every ball if your legs are gone."
    : state.career.form > 62
      ? "You look sharp. Show me that this form is repeatable, not just a good week."
      : "Keep it simple early. I want concentration, discipline, and bravery when the moment arrives.";

  return {
    opponent: isAcademy ? `${opponent.name} Academy` : opponent.name,
    opponentOverall: clamp(clubOverall(opponent) - (isAcademy ? 20 : 0), 28, 96),
    competition: isAcademy ? "Academy League" : opponent.tier,
    previewThought: thought,
    result: null
  };
}

function pickOpponent() {
  const currentName = state.player.club.replace(" Academy", "");
  const isAcademy = state.player.tier === "Academy" || state.player.club.includes("Academy");
  const target = overall() + state.career.reputation * 0.25 + (isAcademy ? 15 : 0);
  const candidates = clubCatalog
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
    const result = {
      rating: 0,
      mvp: false,
      headline: "Rehab week",
      summary: "You missed the game and stayed with the medical staff.",
      managerThought: "Availability is part of a career. Get fit properly before asking for minutes."
    };
    addLog("Injury rehab", "You missed matchday and focused on returning safely.", "warning");
    return result;
  }

  const chanceToPlay = clamp(34 + career.coachTrust * 0.5 + career.fitness * 0.16 + career.form * 0.12 - life.stress * 0.08);
  if (Math.random() * 100 > chanceToPlay) {
    career.form = clamp(career.form - 1);
    career.coachTrust = clamp(career.coachTrust + 0.6);
    const result = {
      rating: 0,
      mvp: false,
      headline: "Unused substitute",
      summary: "You did not get meaningful minutes. Your week still counted in training.",
      managerThought: "You are close, but I need to trust the habits before I trust the minutes."
    };
    addLog("Limited minutes", "The manager kept you on the edge of the squad. Keep building trust.", "");
    return result;
  }

  const ability = overall();
  const mentalDrag = life.loneliness / 125 + life.stress / 135 + (100 - life.wellbeing) / 170;
  const fitnessDrag = career.fitness < 35 ? 0.75 : career.fitness < 55 ? 0.35 : 0;
  const prepBonus = selected.career === "matchprep" ? 0.38 : selected.career === "tactical" ? 0.15 : 0;
  const opponentDrag = clamp((state.pendingMatch.opponentOverall - ability - 25) / 55, -0.25, 0.6);
  const rating = clamp(5.0 + (ability - 34) / 18 + career.form / 105 + career.confidence / 150 - mentalDrag - fitnessDrag - opponentDrag + prepBonus + randomBetween(-0.75, 0.9), 3.8, 10);
  const mvp = rating >= 8.1 || (rating >= 7.7 && Math.random() < 0.28);
  const seasonTotal = career.avgRating * career.appearances;

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

  applyEndProduct(rating);
  updateFameFromRating(rating, mvp);

  if (rating >= 8) addLog("Breakout performance", `A ${rating.toFixed(1)} rating pushed your name into bigger conversations.`, "good");
  else if (rating < 5.5) addLog("Difficult match", `A ${rating.toFixed(1)} rating hurt form and trust. The response matters.`, "warning");

  const injuryRisk = career.fitness < 30 ? 0.11 : career.fitness < 45 ? 0.05 : 0.015;
  if (Math.random() < injuryRisk) {
    career.injuryWeeks = Math.ceil(randomBetween(2, 6));
    career.fitness = clamp(career.fitness - 17);
    addLog("Injury setback", `You picked up an injury and will miss about ${career.injuryWeeks} weeks.`, "risk");
  }

  return {
    rating,
    mvp,
    headline: matchHeadline(rating, mvp),
    summary: matchSummary(rating, mvp),
    managerThought: managerThought(rating)
  };
}

function applyEndProduct(rating) {
  const player = state.player;
  const chance = rating + player.attributes.technical / 18 + Math.random() * 2.8;
  if (player.position === "Goalkeeper") {
    if (rating > 6.8 && Math.random() < 0.45) state.career.cleanSheets += 1;
  } else {
    if (chance > 11.4) state.career.goals += 1;
    if (chance > 10.4 && Math.random() < 0.68) state.career.assists += 1;
  }
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
  advanceCalendar();
  state.phase = "weekly";
  state.pendingMatch = null;
  saveState();
  render();
}

function applyAgentAction(logs) {
  const agent = state.agent.current;

  if (!agent) {
    if (selected.agent === "ask" && Math.random() < 0.18 + state.player.fame / 500) {
      state.agent.candidates = createAgentCandidates(2);
      logs.push(["Agent interest", "Word got around that you would listen. A couple of agents made contact.", "good"]);
    }
    return;
  }

  if (selected.agent === "boundaries") {
    agent.pressure = clamp(agent.pressure - agent.loyalty / 10 - agent.patience / 14);
    agent.loyalty = clamp(agent.loyalty + 2);
    logs.push(["Agent boundaries", "You made it clear that role fit and wellbeing matter. A loyal agent respects that.", "good"]);
  }

  if (selected.agent === "pathway") {
    const successChance = (agent.quality + agent.connections + state.career.reputation + state.player.fame * 0.4) / 350;
    if (Math.random() < successChance) {
      createOffer("Pathway request", true);
      agent.pressure = clamp(agent.pressure + agent.pushiness / 20);
      logs.push(["Pathway found", "Your agent found a concrete role conversation. Judge the fit, not only the badge.", "good"]);
    } else {
      agent.pressure = clamp(agent.pressure + 6 + agent.pushiness / 16);
      logs.push(["No clear pathway", "Your agent could not find a better role this week. Pressure started to build.", "warning"]);
    }
  }

  if (selected.agent === "market") {
    const chance = (agent.connections + agent.quality + state.career.reputation * 0.7 + state.player.fame * 0.35) / 310;
    if (Math.random() < chance) {
      createOffer("Market exploration", true);
      logs.push(["Offer generated", "Your agent brought an option to the table. Bigger is not always better.", "good"]);
    } else {
      agent.pressure = clamp(agent.pressure + 4);
      logs.push(["Quiet market", "There was not much interest this week. Ratings change the conversation.", ""]);
    }
  }

  agent.pressure = clamp(agent.pressure + agent.pushiness / 44 - agent.loyalty / 90);
  if (agent.pressure > 76 && Math.random() < 0.3) {
    state.career.reputation = clamp(state.career.reputation - 3);
    state.life.stress = clamp(state.life.stress + 8);
    logs.push(["Agent pressure leaked", `${agent.name} pushed the idea that you should leave. It annoyed the club and raised stress.`, "risk"]);
  }
}

function maybeAgentApproach() {
  if (state.agent.current || state.agent.candidates.length) return;
  const avg = recentAverage();
  const chance = clamp((avg - 6.7) * 0.18 + state.career.reputation / 450 + state.player.fame / 650, 0, 0.55);
  if (avg >= 6.8 && Math.random() < chance) {
    state.agent.candidates = createAgentCandidates(avg >= 7.6 ? 3 : 2);
    addLog("Agents approached", "Your academy ratings brought representatives to the family table. Hiring one is optional.", "good");
  }
}

function createAgentCandidates(count = 3) {
  return [...agentPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, count)
    .map((agent) => ({
      ...agent,
      id: uid("agent"),
      pressure: 6 + agent.pushiness / 9
    }));
}

function hireAgent(id) {
  const candidate = state.agent.candidates.find((item) => item.id === id);
  if (!candidate) return;
  state.agent.current = { ...candidate };
  state.agent.candidates = [];
  selected.agent = "pathway";
  addLog("Agent hired", `${candidate.name} now represents you. Their values will shape career choices.`, "good");
  saveState();
  render();
}

function sackAgent() {
  const agent = state.agent.current;
  if (!agent) return;
  const damage = agent.connections > 72 ? 5 : 2;
  state.agent.current = null;
  state.agent.candidates = [];
  state.career.reputation = clamp(state.career.reputation - damage);
  state.life.stress = clamp(state.life.stress + 5);
  selected.agent = "none";
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
    player.wage = Math.max(player.wage, 180);
    addLog("First pro development deal", "The club gave you money and expectation. Family pressure may change now.", "good");
  }

  if (player.stage === "Reserve Prospect" && player.ageYears >= 18 && career.coachTrust > 64 && level > 60) {
    player.stage = "First-team Breakthrough";
    player.role = "First-team rotation";
    player.wage = Math.max(player.wage, 750);
    career.reputation = clamp(career.reputation + 10);
    addLog("First-team breakthrough", "Senior staff gave you a real role. Every choice is louder now.", "good");
  }
}

function createOffer(reason, viaAgent) {
  const player = state.player;
  const career = state.career;
  const agent = state.agent.current;
  const marketPower = overall() + career.reputation * 0.45 + player.fame * 0.22 + career.form * 0.14 + (agent ? agent.connections * 0.16 : 0);
  const possible = clubCatalog
    .map((club) => ({ ...club, adjustedOverall: clubOverall(club) }))
    .filter((club) => club.adjustedOverall <= marketPower + randomBetween(22, 42))
    .sort((a, b) => b.adjustedOverall - a.adjustedOverall);

  const club = possible[Math.floor(randomBetween(0, Math.min(6, possible.length)))] || clubCatalog[clubCatalog.length - 1];
  const fit = clamp(round(42 + club.pathway * 0.22 + (marketPower - clubOverall(club)) * 0.45 + randomBetween(-10, 12)));
  const role = offerRole(club, fit, player.ageYears);
  const wageBase = player.stage.includes("Academy") || player.stage.includes("U18") ? 45 : 170;
  const wage = Math.max(player.wage + wageBase, round((clubOverall(club) + fit + marketPower) * randomBetween(3.5, 10.5)));
  const pressureReason = viaAgent && agent && agent.pushiness > 65 ? "Your agent is strongly recommending this move." : "The club explained a possible pathway.";

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
}

function offerRole(club, fit, age) {
  if (age < 17) return fit > 68 ? "U18 starter pathway" : "Academy prospect";
  if (age < 18) return fit > 63 ? "U21 and cup pathway" : "U18 rotation";
  if (fit < 50) return "Bench prospect";
  if (fit < 64) return "Rotation option";
  if (clubOverall(club) > overall() + 10) return "Loan pathway";
  return "Important player";
}

function acceptOffer(id) {
  const offer = state.agent.offers.find((item) => item.id === id);
  if (!offer) return;
  const oldClub = state.player.club;
  state.player.club = offer.club;
  state.player.tier = offer.tier;
  state.player.role = offer.role;
  state.player.wage = Math.max(state.player.wage, offer.wage);
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

  state.agent.offers = state.agent.offers.filter((item) => item.id !== id);
  saveState();
  render();
}

function rejectOffer(id) {
  const offer = state.agent.offers.find((item) => item.id === id);
  if (!offer) return;
  const agent = state.agent.current;
  if (agent && offer.fit > 58) agent.pressure = clamp(agent.pressure + agent.pushiness / 10);
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
  player.savings += player.wage;

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
