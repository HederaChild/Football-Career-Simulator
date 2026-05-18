const SAVE_KEY = "full-time-life-save-v2";

const positions = {
  Goalkeeper: { short: "GK", x: "12%", y: "50%", technical: 30, physical: 34, tactical: 37, mentality: 35 },
  "Full-back": { short: "FB", x: "32%", y: "24%", technical: 34, physical: 37, tactical: 34, mentality: 33 },
  "Centre-back": { short: "CB", x: "26%", y: "50%", technical: 31, physical: 40, tactical: 36, mentality: 34 },
  Midfielder: { short: "CM", x: "50%", y: "50%", technical: 38, physical: 34, tactical: 38, mentality: 34 },
  Winger: { short: "WG", x: "68%", y: "24%", technical: 39, physical: 38, tactical: 32, mentality: 33 },
  Striker: { short: "ST", x: "80%", y: "50%", technical: 38, physical: 36, tactical: 33, mentality: 35 }
};

const clubs = [
  { name: "Riverside Academy", tier: "Academy", min: 0, distance: "home city" },
  { name: "Vale City U18", tier: "Youth League", min: 38, distance: "nearby" },
  { name: "Harbour Town", tier: "League Two", min: 50, distance: "regional" },
  { name: "Northbridge FC", tier: "League One", min: 58, distance: "regional" },
  { name: "Eastborough Rovers", tier: "Championship", min: 66, distance: "far from home" },
  { name: "Capital United", tier: "Top Division", min: 74, distance: "big city" },
  { name: "Aurora FC", tier: "Continental Elite", min: 84, distance: "abroad" }
];

const agentPool = [
  { name: "Maya Fernandes", style: "Patient builder", quality: 62, loyalty: 78, connections: 55, pushiness: 23, patience: 82 },
  { name: "Leon Clarke", style: "Connected negotiator", quality: 72, loyalty: 58, connections: 78, pushiness: 44, patience: 55 },
  { name: "Bruno Silva", style: "Commission hunter", quality: 67, loyalty: 34, connections: 74, pushiness: 82, patience: 27 },
  { name: "Samira Holt", style: "Family-first adviser", quality: 58, loyalty: 82, connections: 47, pushiness: 18, patience: 74 },
  { name: "Owen Mercer", style: "Big move specialist", quality: 76, loyalty: 45, connections: 86, pushiness: 70, patience: 38 }
];

const careerActions = {
  technical: { title: "Technical Training", text: "Improve touch, passing, finishing.", technical: 2.4, physical: 0.2, tactical: 0.5, mentality: 0.4, fitness: -4, stress: 5, confidence: 2 },
  physical: { title: "Physical Block", text: "Gain power, speed, durability.", technical: 0.2, physical: 2.3, tactical: 0.3, mentality: 0.5, fitness: -8, stress: 7, confidence: 1 },
  tactical: { title: "Tactical Study", text: "Learn roles, timing, coach demands.", technical: 0.5, physical: 0.1, tactical: 2.2, mentality: 0.8, fitness: 1, stress: 3, confidence: 1 },
  match: { title: "Match Spotlight", text: "Chase a standout performance.", technical: 0.9, physical: 0.9, tactical: 0.7, mentality: 1.1, fitness: -10, stress: 8, confidence: 4 },
  recovery: { title: "Recovery Week", text: "Protect body and reset sharpness.", technical: 0.2, physical: 0.4, tactical: 0.3, mentality: 0.8, fitness: 14, stress: -8, confidence: 1 }
};

const lifeActions = {
  family: { title: "Family Time", text: "Stay grounded and supported.", family: 10, friends: -1, relationship: -1, loneliness: -9, stress: -5, wellbeing: 7 },
  friends: { title: "Friends", text: "Keep a life outside football.", family: -1, friends: 10, relationship: 1, loneliness: -8, stress: -4, wellbeing: 6 },
  relationship: { title: "Relationship", text: "Build trust with someone close.", family: -2, friends: 0, relationship: 10, loneliness: -7, stress: -2, wellbeing: 6 },
  support: { title: "Rest and Support", text: "Sleep, reflect, talk to support staff.", family: 1, friends: 0, relationship: 0, loneliness: -4, stress: -10, wellbeing: 10 },
  focus: { title: "Isolate and Focus", text: "More time for football, higher social cost.", family: -5, friends: -6, relationship: -5, loneliness: 11, stress: 5, wellbeing: -5 }
};

const agentActions = {
  none: { title: "Handle It Yourself", text: "No agent pressure, fewer doors." },
  interview: { title: "Interview Agents", text: "Meet representatives and compare values." },
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

function overall(player = state.player) {
  const attr = player.attributes;
  return average([attr.technical, attr.physical, attr.tactical, attr.mentality]);
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
  const supportBoost = background === "close" ? 8 : background === "strained" ? -7 : 0;
  const pressureBoost = background === "pressure" ? 9 : background === "strained" ? 5 : 0;

  state = {
    player: {
      name: String(formData.get("name") || "Academy Player").trim(),
      position,
      nationality: String(formData.get("nationality") || "Local").trim(),
      ageYears: 15,
      ageWeeks: 0,
      club: "Riverside Academy",
      tier: "Academy",
      role: "U16 academy prospect",
      stage: "Academy Trialist",
      wage: 0,
      savings: 80,
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
      coachTrust: 28,
      reputation: 8,
      form: 48,
      fitness: 82,
      confidence: 46,
      injuryWeeks: 0,
      school: 68,
      appearances: 0,
      goals: 0,
      assists: 0,
      cleanSheets: 0,
      avgRating: 0,
      lastRating: null,
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
      offers: [],
      reputationDamage: 0
    },
    log: [
      {
        title: "Academy intake",
        body: "You joined Riverside Academy. Coaches are watching your habits as much as your ability.",
        type: "good",
        week: 1
      }
    ]
  };

  selected = { career: "technical", life: "family", agent: "none" };
  saveState();
  render();
}

function render() {
  const app = document.getElementById("app");
  app.innerHTML = state ? gameTemplate() : setupTemplate();
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
          <span class="pill">Academy start</span>
          <span class="pill">Family consequences</span>
          <span class="pill">Agent control</span>
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
            <input name="nationality" value="Malaysia" maxlength="24" required>
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
          <button class="primary-btn" type="submit">Start academy career</button>
          ${hasSave ? `<button class="secondary-btn" type="button" data-continue>Continue saved career</button>` : ""}
          <p class="footer-note">This prototype saves in your browser. It uses fictional clubs to avoid real-world licensing problems.</p>
        </form>

        <div class="intro-board">
          <section class="panel">
            <h2>Career path</h2>
            <div class="career-ladder">
              ${ladderStep(1, "Academy Trialist", "Earn a scholarship through habits, school, and coaching trust.")}
              ${ladderStep(2, "Youth Starter", "Win minutes, handle pressure, and protect your body.")}
              ${ladderStep(3, "First-team Breakthrough", "Choose the right role, not just the biggest club.")}
              ${ladderStep(4, "Top Level", "Balance fame, relationships, money, form, and agents.")}
            </div>
          </section>
          <section class="panel">
            <h2>What matters</h2>
            <p class="microcopy">Training hard improves ability, but isolation can raise loneliness and stress. Good support lowers risk and helps your performances hold up under pressure. Agents can open doors, push bad moves, leak pressure, or be sacked.</p>
          </section>
        </div>
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

function gameTemplate() {
  const player = state.player;
  const career = state.career;
  const life = state.life;
  const pos = positions[player.position];
  const age = `${player.ageYears}.${Math.floor(player.ageWeeks / 5)}`;
  const ratingText = career.lastRating ? career.lastRating.toFixed(1) : "none";

  return `
    <section class="app-shell">
      <header class="topbar">
        <div class="player-title">
          <h1>${escapeHtml(player.name)}</h1>
          <p>${escapeHtml(player.position)} at ${escapeHtml(player.club)} - ${escapeHtml(player.stage)}</p>
        </div>
        <div class="top-stats">
          <span class="pill">Age ${age}</span>
          <span class="pill">Season ${career.season}, Week ${career.week}</span>
          <span class="pill">Wage $${player.wage}/wk</span>
          <span class="pill">Last rating ${ratingText}</span>
        </div>
      </header>

      <div class="dashboard">
        <div class="column">
          <section class="panel">
            <div class="panel-header">
              <div>
                <h2>Player</h2>
                <p>${escapeHtml(player.role)} - ${escapeHtml(player.tier)}</p>
              </div>
              <span class="tag">OVR ${round(overall())}</span>
            </div>
            <div class="pitch" aria-label="Football pitch showing player position">
              <span class="player-dot" style="--x:${pos.x}; --y:${pos.y};">${pos.short}</span>
              <span class="pitch-label">${escapeHtml(player.club)}</span>
            </div>
          </section>

          <section class="panel">
            <div class="panel-header">
              <div>
                <h2>Football</h2>
                <p>Ability, trust, form, and fitness.</p>
              </div>
            </div>
            <div class="meters">
              ${meter("Technical", player.attributes.technical)}
              ${meter("Physical", player.attributes.physical)}
              ${meter("Tactical", player.attributes.tactical, "blue")}
              ${meter("Mentality", player.attributes.mentality, "purple")}
              ${meter("Coach trust", career.coachTrust, "blue")}
              ${meter("Reputation", career.reputation, "purple")}
              ${meter("Form", career.form)}
              ${meter("Fitness", career.fitness, career.fitness < 35 ? "risk" : career.fitness < 55 ? "warn" : "")}
            </div>
          </section>

          <section class="panel">
            <h2>Season stats</h2>
            <div class="stat-grid">
              ${statLine("Appearances", career.appearances, "Matches played this season")}
              ${statLine(player.position === "Goalkeeper" ? "Clean sheets" : "Goals", player.position === "Goalkeeper" ? career.cleanSheets : career.goals, "End product")}
              ${statLine("Assists", career.assists, "Chances created")}
              ${statLine("Average rating", career.avgRating ? career.avgRating.toFixed(2) : "none", "Match consistency")}
            </div>
          </section>
        </div>

        <div class="column">
          <section class="panel">
            <div class="panel-header">
              <div>
                <h2>This week</h2>
                <p>Choose one football focus, one life focus, and one agent stance.</p>
              </div>
            </div>
            ${choiceSection("Career focus", "career", careerActions)}
            ${choiceSection("Life focus", "life", lifeActions)}
            ${choiceSection("Agent stance", "agent", availableAgentActions())}
            <div class="week-actions">
              <button class="primary-btn" type="button" data-action="advance">Advance week</button>
              <button class="secondary-btn" type="button" data-action="save">Save</button>
            </div>
            <p class="footer-note">Low wellbeing and high loneliness reduce training gains and match consistency. Rest and support recover more when things are going badly.</p>
          </section>

          <section class="panel">
            <div class="panel-header">
              <div>
                <h2>Life</h2>
                <p>Support, pressure, and wellbeing have football consequences.</p>
              </div>
              <span class="tag">${lifeLabel()}</span>
            </div>
            <div class="meters">
              ${meter("Family support", life.family, "blue")}
              ${meter("Friends", life.friends)}
              ${meter("Relationship", life.relationship, "purple")}
              ${meter("Loneliness", life.loneliness, life.loneliness > 70 ? "risk" : life.loneliness > 50 ? "warn" : "")}
              ${meter("Stress", life.stress, life.stress > 74 ? "risk" : life.stress > 55 ? "warn" : "")}
              ${meter("Wellbeing", life.wellbeing, life.wellbeing < 35 ? "risk" : life.wellbeing < 55 ? "warn" : "")}
              ${meter("Family pressure", life.familyPressure, life.familyPressure > 70 ? "warn" : "")}
            </div>
          </section>
        </div>

        <div class="column">
          <section class="panel">
            <div class="panel-header">
              <div>
                <h2>Agent room</h2>
                <p>Representatives can help, pressure, or be replaced.</p>
              </div>
            </div>
            ${agentTemplate()}
          </section>

          <section class="panel">
            <div class="panel-header">
              <div>
                <h2>Offers</h2>
                <p>Role fit matters more than reputation alone.</p>
              </div>
            </div>
            <div class="offers">
              ${state.agent.offers.length ? state.agent.offers.map(offerTemplate).join("") : `<div class="empty">No active offers. Good performances, coach trust, and connected agents create interest.</div>`}
            </div>
          </section>

          <section class="panel">
            <div class="panel-header">
              <div>
                <h2>Story log</h2>
                <p>Recent consequences and turning points.</p>
              </div>
            </div>
            <div class="events">
              ${state.log.slice(0, 8).map(eventTemplate).join("")}
            </div>
          </section>

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
  const hasAgent = Boolean(state.agent.current);
  if (!hasAgent) {
    return {
      none: agentActions.none,
      interview: agentActions.interview
    };
  }
  return {
    pathway: agentActions.pathway,
    boundaries: agentActions.boundaries,
    market: agentActions.market
  };
}

function agentTemplate() {
  const agent = state.agent.current;
  const candidates = state.agent.candidates;
  if (!agent) {
    return `
      <div class="agent-profile">
        <div class="empty">You are self-represented. That keeps control in your hands, but clubs are harder to reach.</div>
        ${candidates.length ? `<div class="candidates">${candidates.map(candidateTemplate).join("")}</div>` : ""}
      </div>
    `;
  }

  return `
    <div class="agent-profile">
      <div class="agent-card">
        <strong>${escapeHtml(agent.name)}</strong>
        <span class="microcopy">${escapeHtml(agent.style)}</span>
        ${meter("Quality", agent.quality)}
        ${meter("Loyalty", agent.loyalty, "blue")}
        ${meter("Connections", agent.connections, "purple")}
        ${meter("Pressure to move", agent.pressure, agent.pressure > 70 ? "risk" : agent.pressure > 45 ? "warn" : "")}
        <button class="danger-btn" type="button" data-action="sack-agent">Sack agent</button>
      </div>
      ${candidates.length ? `<div class="candidates">${candidates.map(candidateTemplate).join("")}</div>` : ""}
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
  if (action === "advance") advanceWeek();
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

function advanceWeek() {
  const log = [];
  const careerAction = careerActions[selected.career];
  const lifeAction = lifeActions[selected.life];

  if (state.career.injuryWeeks > 0) {
    state.career.injuryWeeks -= 1;
    state.career.fitness = clamp(state.career.fitness + 9);
    state.career.form = clamp(state.career.form - 2);
    log.push(["Injury rehab", "You missed competitive work and focused on rehab. Fitness is coming back slowly.", "warning"]);
  } else {
    applyCareerAction(careerAction, log);
    playMatch(log);
  }

  applyLifeAction(lifeAction, log);
  applyAgentAction(log);
  applyConsequences(log);
  evaluateMilestones(log);
  advanceCalendar(log);

  log.reverse().forEach(([title, body, type]) => addLog(title, body, type));
  saveState();
  render();
}

function applyCareerAction(action, log) {
  const attr = state.player.attributes;
  const career = state.career;
  const life = state.life;
  const wellbeingMultiplier = 0.62 + life.wellbeing / 160 + (100 - life.stress) / 260 - life.loneliness / 330;
  const fitnessMultiplier = career.fitness < 40 ? 0.65 : career.fitness < 60 ? 0.85 : 1;
  const gain = Math.max(0.35, wellbeingMultiplier * fitnessMultiplier);

  attr.technical = clamp(attr.technical + action.technical * gain);
  attr.physical = clamp(attr.physical + action.physical * gain);
  attr.tactical = clamp(attr.tactical + action.tactical * gain);
  attr.mentality = clamp(attr.mentality + action.mentality * gain);
  career.fitness = clamp(career.fitness + action.fitness);
  career.confidence = clamp(career.confidence + action.confidence);
  life.stress = clamp(life.stress + action.stress);

  if (selected.career === "recovery") {
    life.wellbeing = clamp(life.wellbeing + (life.supportPlan ? 15 : 7));
    life.supportPlan = false;
    log.push(["Recovery focus", "You took the week seriously and arrived fresher. Coaches value availability too.", "good"]);
  }

  if (selected.career === "match") {
    career.coachTrust = clamp(career.coachTrust + randomBetween(1, 4));
  }

  if (gain < 0.75) {
    log.push(["Training did not stick", "Stress, tiredness, or loneliness made your work less effective this week.", "warning"]);
  }
}

function playMatch(log) {
  const career = state.career;
  const player = state.player;
  const life = state.life;
  const chanceToPlay = clamp(38 + career.coachTrust * 0.48 + career.fitness * 0.18 + career.form * 0.1 - life.stress * 0.1);

  if (Math.random() * 100 > chanceToPlay) {
    career.coachTrust = clamp(career.coachTrust + 0.5);
    career.form = clamp(career.form - 1);
    log.push(["Limited minutes", "The coaches kept you on the edge of the squad. Training habits still matter next week.", ""]);
    return;
  }

  const base = 4.8 + overall() / 24 + career.form / 45 + career.confidence / 55;
  const lifeDrag = life.loneliness / 120 + life.stress / 130 + (100 - life.wellbeing) / 150;
  const fitnessDrag = career.fitness < 35 ? 0.7 : career.fitness < 55 ? 0.35 : 0;
  const actionBonus = selected.career === "match" ? 0.35 : selected.career === "tactical" ? 0.16 : 0;
  const rating = clamp(base - lifeDrag - fitnessDrag + actionBonus + randomBetween(-0.7, 0.85), 3.8, 10);
  const seasonTotal = career.avgRating * career.appearances;

  career.appearances += 1;
  career.lastRating = rating;
  career.avgRating = (seasonTotal + rating) / career.appearances;
  career.form = clamp(career.form + (rating - 6.2) * 5);
  career.coachTrust = clamp(career.coachTrust + (rating - 6) * 2.2);
  career.reputation = clamp(career.reputation + Math.max(0, rating - 6.4) * 1.4);
  career.confidence = clamp(career.confidence + (rating - 6.1) * 4);
  career.fitness = clamp(career.fitness - randomBetween(3, 9));

  const attackingChance = rating + player.attributes.technical / 16 + Math.random() * 3;
  if (player.position === "Goalkeeper") {
    if (rating > 6.8 && Math.random() < 0.45) career.cleanSheets += 1;
  } else {
    if (attackingChance > 11.2) career.goals += 1;
    if (attackingChance > 10.2 && Math.random() < 0.72) career.assists += 1;
  }

  if (rating >= 8) {
    log.push(["Breakout performance", `A ${rating.toFixed(1)} rating got people talking. Reputation and confidence rose.`, "good"]);
  } else if (rating < 5.4) {
    log.push(["Difficult match", `A ${rating.toFixed(1)} rating hurt form. The next response matters.`, "warning"]);
  }

  const injuryRisk = career.fitness < 30 ? 0.12 : career.fitness < 45 ? 0.055 : 0.018;
  if (Math.random() < injuryRisk) {
    career.injuryWeeks = Math.ceil(randomBetween(2, 6));
    career.fitness = clamp(career.fitness - 18);
    log.push(["Injury setback", `You picked up an injury and will miss about ${career.injuryWeeks} weeks.`, "risk"]);
  }
}

function applyLifeAction(action, log) {
  const life = state.life;
  life.family = clamp(life.family + action.family);
  life.friends = clamp(life.friends + action.friends);
  life.relationship = clamp(life.relationship + action.relationship);
  life.loneliness = clamp(life.loneliness + action.loneliness);
  life.stress = clamp(life.stress + action.stress);
  life.wellbeing = clamp(life.wellbeing + action.wellbeing);

  if (selected.life !== "family") life.family = clamp(life.family - 1.6);
  if (selected.life !== "friends") life.friends = clamp(life.friends - 1.8);
  if (selected.life !== "relationship") life.relationship = clamp(life.relationship - 1.5);

  if (selected.life === "focus") {
    state.player.attributes.mentality = clamp(state.player.attributes.mentality + 0.8);
    log.push(["Isolation trade-off", "Extra focus helped mentality, but your support network felt the distance.", "warning"]);
  }

  if (life.relationship > 64 && Math.random() < 0.18) {
    life.loneliness = clamp(life.loneliness - 6);
    log.push(["Trusted relationship", "Having someone close made the week feel lighter and steadier.", "good"]);
  }
}

function applyAgentAction(log) {
  const agent = state.agent.current;

  if (selected.agent === "interview") {
    state.agent.candidates = createAgentCandidates();
    log.push(["Agent interviews", "You met representatives with different values. Choose carefully; style matters.", ""]);
    return;
  }

  if (!agent) {
    if (Math.random() < 0.06 + state.career.reputation / 1200) {
      createOffer("Direct club contact", false);
      log.push(["Direct interest", "A club contacted your family directly, but self-representation limits negotiation power.", "good"]);
    }
    return;
  }

  if (selected.agent === "boundaries") {
    agent.pressure = clamp(agent.pressure - agent.loyalty / 10 - agent.patience / 14);
    agent.loyalty = clamp(agent.loyalty + 2);
    log.push(["Agent boundaries", "You made it clear that role fit and wellbeing matter. A loyal agent respects that.", "good"]);
  }

  if (selected.agent === "pathway") {
    const successChance = (agent.quality + agent.connections + state.career.reputation) / 330;
    if (Math.random() < successChance) {
      createOffer("Pathway request", true);
      agent.pressure = clamp(agent.pressure + agent.pushiness / 18);
      log.push(["Pathway found", "Your agent found a concrete role conversation. Now judge the fit.", "good"]);
    } else {
      agent.pressure = clamp(agent.pressure + 7 + agent.pushiness / 14);
      state.career.confidence = clamp(state.career.confidence - 2);
      log.push(["No clear pathway", "Your agent could not find a better role this week. Pressure started to build.", "warning"]);
    }
  }

  if (selected.agent === "market") {
    const chance = (agent.connections + agent.quality + state.career.reputation * 0.8) / 280;
    if (Math.random() < chance) {
      createOffer("Market exploration", true);
      log.push(["Offer generated", "Your agent brought an option to the table. Bigger is not always better.", "good"]);
    } else {
      agent.pressure = clamp(agent.pressure + 4);
      log.push(["Quiet market", "There was not much interest this week. Good performances will change the conversation.", ""]);
    }
  }

  agent.pressure = clamp(agent.pressure + agent.pushiness / 40 - agent.loyalty / 85);

  if (agent.pressure > 76 && Math.random() < 0.34) {
    state.career.reputation = clamp(state.career.reputation - 3);
    state.life.stress = clamp(state.life.stress + 8);
    log.push(["Agent pressure leaked", `${agent.name} pushed the idea that you should leave. It raised stress and annoyed the club.`, "risk"]);
  }
}

function applyConsequences(log) {
  const life = state.life;
  const career = state.career;
  const support = average([life.family, life.friends, life.relationship]);

  if (support < 42) {
    life.loneliness = clamp(life.loneliness + 4);
  } else {
    life.loneliness = clamp(life.loneliness - support / 60);
  }

  if (life.familyPressure > 62 && state.player.wage > 0 && Math.random() < 0.18) {
    life.stress = clamp(life.stress + 5);
    life.family = clamp(life.family - 3);
    log.push(["Family money pressure", "Relatives started talking about what your contract could solve. Support became more complicated.", "warning"]);
  }

  if (life.loneliness > 72 || life.stress > 78) {
    life.wellbeing = clamp(life.wellbeing - 7);
    career.form = clamp(career.form - 5);
    career.confidence = clamp(career.confidence - 5);
    life.supportPlan = true;
    log.push(["Wellbeing warning", "Isolation and pressure are now affecting focus, sleep, and performance consistency.", "risk"]);
  } else if (life.wellbeing > 70 && support > 58) {
    career.confidence = clamp(career.confidence + 2);
  }

  if (life.wellbeing < 34) {
    career.coachTrust = clamp(career.coachTrust - 2);
    log.push(["Support needed", "Your week showed signs of burnout risk. Rest, support, and honest conversations can recover this.", "risk"]);
  }

  if (state.career.school < 30 && state.player.ageYears < 18 && Math.random() < 0.16) {
    state.career.coachTrust = clamp(state.career.coachTrust - 5);
    log.push(["School warning", "Academy staff warned that education standards still count toward your scholarship.", "warning"]);
  }

  if (selected.career !== "tactical" && selected.life === "focus") {
    state.career.school = clamp(state.career.school - 4);
  } else if (selected.life === "support" || selected.career === "tactical") {
    state.career.school = clamp(state.career.school + 2);
  }
}

function evaluateMilestones(log) {
  const player = state.player;
  const career = state.career;
  const level = overall();

  if (player.stage === "Academy Trialist" && career.coachTrust > 38 && level > 36) {
    player.stage = "Academy Scholar";
    player.role = "U18 squad player";
    career.reputation = clamp(career.reputation + 6);
    log.push(["Scholarship earned", "The academy offered you a scholarship. The climb is real now.", "good"]);
  }

  if (player.stage === "Academy Scholar" && career.coachTrust > 55 && level > 44) {
    player.stage = "U18 Starter";
    player.role = "U18 starter";
    career.reputation = clamp(career.reputation + 8);
    log.push(["Youth starter", "You became a regular youth starter. Scouts begin to notice consistency.", "good"]);
  }

  if (player.stage === "U18 Starter" && player.ageYears >= 17 && career.reputation > 28 && level > 52) {
    player.stage = "Reserve Prospect";
    player.role = "Reserve prospect";
    player.wage = Math.max(player.wage, 180);
    log.push(["First contract", "You signed a first professional development deal. Money and expectations both arrived.", "good"]);
  }

  if (player.stage === "Reserve Prospect" && player.ageYears >= 18 && career.coachTrust > 62 && level > 60) {
    player.stage = "First-team Breakthrough";
    player.role = "First-team rotation";
    player.wage = Math.max(player.wage, 750);
    career.reputation = clamp(career.reputation + 10);
    log.push(["First-team breakthrough", "The senior staff gave you a real role. Every decision is louder now.", "good"]);
  }

  if (player.stage === "First-team Breakthrough" && level > 70 && career.reputation > 58) {
    player.stage = "Senior Pro";
    player.role = "Senior regular";
    player.wage = Math.max(player.wage, 2200);
    log.push(["Senior regular", "You are no longer just potential. Clubs now evaluate you as a first-team footballer.", "good"]);
  }

  if (Math.random() < Math.max(0, (level + career.reputation - 92) / 900)) {
    createOffer("Scout report", Boolean(state.agent.current));
    log.push(["Scout report", "A club put your name on a shortlist after recent performances.", "good"]);
  }
}

function advanceCalendar(log) {
  const player = state.player;
  const career = state.career;

  career.totalWeeks += 1;
  career.week += 1;
  player.ageWeeks += 1;
  player.savings += player.wage;

  if (player.ageWeeks >= 52) {
    player.ageYears += 1;
    player.ageWeeks = 0;
    log.push(["Birthday", `${player.name} turned ${player.ageYears}. Development time is precious.`, ""]);
  }

  if (career.week > 44) {
    endSeason(log);
  }
}

function endSeason(log) {
  const career = state.career;
  const avg = career.avgRating || 0;
  const awardChance = avg > 7.2 || career.goals + career.assists > 18 || career.cleanSheets > 12;

  if (awardChance) {
    const award = `Season ${career.season} academy award`;
    career.awards.push(award);
    career.reputation = clamp(career.reputation + 8);
    log.push(["Season recognition", "Your season earned formal recognition and a reputation boost.", "good"]);
  } else {
    log.push(["Season finished", "The season reset the table, but your relationships and habits carried forward.", ""]);
  }

  career.season += 1;
  career.week = 1;
  career.appearances = 0;
  career.goals = 0;
  career.assists = 0;
  career.cleanSheets = 0;
  career.avgRating = 0;
  career.lastRating = null;
  career.form = clamp(career.form * 0.78 + 12);
  state.life.stress = clamp(state.life.stress - 8);
}

function createAgentCandidates() {
  return [...agentPool]
    .sort(() => Math.random() - 0.5)
    .slice(0, 3)
    .map((agent) => ({
      ...agent,
      id: crypto.randomUUID(),
      pressure: 0
    }));
}

function hireAgent(id) {
  const candidate = state.agent.candidates.find((item) => item.id === id);
  if (!candidate) return;
  state.agent.current = { ...candidate, pressure: 8 + candidate.pushiness / 8 };
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

function createOffer(reason, viaAgent) {
  const player = state.player;
  const career = state.career;
  const agent = state.agent.current;
  const marketPower = overall() + career.reputation * 0.45 + career.form * 0.18 + (agent ? agent.connections * 0.22 : 0);
  const possible = clubs.filter((club) => club.min <= marketPower + randomBetween(-8, 8));
  const club = possible[Math.max(0, possible.length - 1 - Math.floor(Math.random() * 2))] || clubs[1];
  const fit = clamp(round(randomBetween(42, 78) + career.coachTrust / 8 - (club.min - marketPower) / 2));
  const role = offerRole(club, fit, player.ageYears);
  const wage = Math.max(player.wage + 50, round((club.min + fit + marketPower) * randomBetween(4, 14)));
  const pressureReason = viaAgent && agent && agent.pushiness > 65 ? "Your agent is strongly recommending this move." : "The club has explained a possible pathway.";

  state.agent.offers.unshift({
    id: crypto.randomUUID(),
    club: club.name,
    tier: club.tier,
    distance: club.distance,
    role,
    wage,
    fit,
    reason: `${reason}. ${pressureReason}`
  });

  state.agent.offers = state.agent.offers.slice(0, 4);
}

function offerRole(club, fit, age) {
  if (club.tier === "Academy") return "Academy prospect";
  if (age < 18 && fit > 66) return "Youth starter";
  if (fit < 50) return "Bench prospect";
  if (fit < 64) return "Rotation option";
  if (club.min > overall() + 8) return "Loan pathway";
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
  state.career.coachTrust = clamp(offer.fit + randomBetween(-8, 8));
  state.career.reputation = clamp(state.career.reputation + offer.fit / 12);
  state.career.form = clamp(state.career.form - (offer.fit < 55 ? 8 : 1));

  if (offer.distance === "far from home" || offer.distance === "abroad") {
    state.life.loneliness = clamp(state.life.loneliness + 12);
    state.life.family = clamp(state.life.family - 6);
    state.life.friends = clamp(state.life.friends - 8);
  }

  if (offer.fit < 52) {
    state.life.stress = clamp(state.life.stress + 8);
    addLog("Risky move accepted", `You left ${oldClub} for ${offer.club}, but the role fit is weak. Consequences may follow.`, "warning");
  } else {
    addLog("Move accepted", `You joined ${offer.club} as ${offer.role}. A new environment means new pressure.`, "good");
  }

  state.agent.offers = state.agent.offers.filter((item) => item.id !== id);
  saveState();
  render();
}

function rejectOffer(id) {
  const offer = state.agent.offers.find((item) => item.id === id);
  if (!offer) return;
  const agent = state.agent.current;
  if (agent && offer.fit > 58) {
    agent.pressure = clamp(agent.pressure + agent.pushiness / 10);
  }
  state.agent.offers = state.agent.offers.filter((item) => item.id !== id);
  addLog("Offer rejected", `You turned down ${offer.club}. Role fit, timing, and life balance still matter.`, "");
  saveState();
  render();
}

function addLog(title, body, type = "") {
  state.log.unshift({
    title,
    body,
    type,
    week: state.career.totalWeeks
  });
  state.log = state.log.slice(0, 40);
}

function lifeLabel() {
  const life = state.life;
  if (life.wellbeing < 35 || life.loneliness > 75) return "High risk";
  if (life.stress > 68 || life.loneliness > 58) return "Under strain";
  if (life.wellbeing > 70 && average([life.family, life.friends, life.relationship]) > 58) return "Well supported";
  return "Managing";
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
