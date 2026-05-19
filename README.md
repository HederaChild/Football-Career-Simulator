# Full Time Life

A free browser-based football career simulator prototype.

You start with academy contract offers and build toward a professional career while managing training, match performance, family support, friendships, relationships, wellbeing, media attention, and agent decisions. The game uses fictionalized club names inspired by real football geography and saves progress in the browser with `localStorage`.

## Play

Open `index.html` in a browser, or run a tiny local server from this folder:

```powershell
python -m http.server 4173
```

Then visit `http://localhost:4173`.

## First prototype systems

- Academy career creation
- Nationality list based on a FIFA ranking baseline, with lower-ranked nations giving bigger home-hero fame boosts
- Academy contract selection before the first week
- Weekly career, life, and agent choices
- Attributes, coach trust, form, fitness, reputation, wage, and savings
- Family, friends, relationship, loneliness, stress, wellbeing, and pressure
- Matchday flow with pre-match manager notes, match ratings, manager thoughts, and MVP press conferences
- Automatic agent approaches, hiring, pressure, market offers, and sacking
- Club offers with role fit, wages, distance, and life consequences
- Attribute groups with sub-stats such as touch, passing, pace, stamina, positioning, composure, and more
- Tabbed league tables, squad/teammate views, agents/contracts, and filtered news
- Fictionalized domestic league names with realistic club counts and match totals
- English League 1, 2, and 3 with promotion/relegation logic and 24-club lower divisions
- Continental competitions with real-style formats under fictional names
- Season leaderboards for scorers, assists, red cards, and ratings
- Generated senior and academy rosters for every fictionalized club
- Club chairman and manager profiles, with board direction and pressure-driven changes
- Club finance, fame, academy, training, medical, hospitality, and scouting ratings
- More realistic squad distributions based on club revenue, reputation, standing, and league level
- Player nationalities on squad screens and lower academy starting ability for long careers
- Altered broadcaster names and country-filtered news
- Season stats, match ratings, injuries, progression milestones, and local save/reset

## Data note

The nationality system uses a static FIFA/Coca-Cola Men's World Ranking baseline from 1 April 2026. Club names are intentionally fictionalized, while their strength and pathway values are inspired by real football ecosystems.
