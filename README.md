# Full Time Life

A free browser-based football career simulator prototype.

Live site:
https://hederachild.github.io/Football-Career-Simulator/

Repository:
https://github.com/HederaChild/Football-Career-Simulator

## Project Memory

This README is also the project memory for future Codex sessions. If chat memory is reset, read this first before changing the game.

The user wants a realistic long-form football career simulator where the player starts in an academy and works up slowly. The special identity of the game is that family, friendships, relationships, loneliness, stress, wellbeing, media, agents, contracts, clubs, board direction, and national fame all have real consequences.

The game must stay free and public. It is hosted on GitHub Pages as a static web game.

## Current Files

- `index.html`: app shell and asset version tags.
- `styles.css`: all layout and UI styles.
- `app.js`: full game simulation and UI rendering.
- `README.md`: project documentation and memory.

Current asset/save version at last update:

- `index.html` loads `styles.css?v=13` and `app.js?v=13`.
- `app.js` uses `SAVE_KEY = "full-time-life-save-v13"`.

When making major save-breaking changes, bump both the asset version and `SAVE_KEY`.

## Run Locally

From this folder:

```powershell
python -m http.server 4173 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:4173/
```

If the browser caches an older build, add a query string:

```text
http://127.0.0.1:4173/?v=next
```

## Publish

The repo is already connected to GitHub Pages. Push to `main`, then the live site updates after GitHub Pages rebuilds.

Useful publish flow:

```powershell
git status -sb
git add README.md app.js index.html styles.css
git commit -m "Short description"
git push
```

After pushing, verify:

```text
https://hederachild.github.io/Football-Career-Simulator/?deploy=<commit>
```

## Design Rules

- Use fictionalized names for clubs, leagues, broadcasters, and famous players.
- Do not use real club names, real league names, real logos, or exact player names.
- Names can be inspired by real football, for example:
  - Chelsea -> `London Blue`
  - Arsenal -> `London Red`
  - Manchester City -> `Manchester Sky`
  - Kylian Mbappe -> `Lylian Mbappo`
  - Fabrizio Romano -> `Ramano Fabio`
  - BBC -> `ABC Sport`
- Leagues should use safer names like `English League 1`, not trademarked real league names.
- Keep the game playable as a static browser game. No backend yet.
- Treat mental health respectfully. Use wellbeing/support/stress/loneliness systems, not a cheap depression meter.
- Career growth should be slow. Academy players should start around `15-20` OVR.
- A top team should have stars, normal starters, backups, and youngsters. Do not make every player 90+.
- Contracts must be realistic. Academy players earn low hundreds, not thousands.
- Football outcomes should be logical but not deterministic. Stronger teams are more likely to win, but upsets, flops, one-season wonders, and rare invincible seasons should exist.

## Implemented Systems

### Career Start

- Player creation with name, nationality, position, and home situation.
- Nationality is based on a static FIFA/Coca-Cola Men's World Ranking baseline from 1 April 2026.
- Lower-ranked nations give bigger home-hero fame boosts when the player performs well.
- Player starts as an academy applicant and receives academy contract offers first.
- Academy contracts vary by academy quality, pathway, pressure, distance, and fit.

### Player Attributes

Main groups are calculated from sub-stats:

- Technical: Touch, Passing, Dribbling, Finishing, First Touch
- Physical: Pace, Stamina, Strength, Agility, Jumping
- Tactical: Positioning, Vision, Pressing, Decisions, Teamwork
- Mentality: Composure, Work Rate, Leadership, Resilience, Focus

Growth is slow and capped by age/level. Stress, loneliness, poor wellbeing, and fatigue reduce development.

### Weekly Loop

Current flow:

1. Choose weekly career focus.
2. Choose weekly life focus.
3. Advance to matchday.
4. Proceed to game.
5. Receive rating and manager thoughts.
6. If MVP, choose press conference response.
7. Finish week and update world state.

### Life System

Tracked values:

- Family support
- Friends
- Relationship
- Loneliness
- Stress
- Wellbeing
- Family pressure

Life choices affect training quality, confidence, form, and match consistency.

### Media and Fame

- Player has `fame` and `attitude`.
- MVP performances can trigger press conferences.
- Press choices can raise fame, lower attitude risk, or create backlash.
- Lower-ranked nations can create bigger national storylines.

### Agents and Contracts

- Agents can approach automatically based on ratings/fame.
- Player can hire or sack agents.
- Agents have quality, loyalty, connections, pushiness, patience, and pressure.
- Bad agents can push moves or create stress.
- Offers have role fit, wage, tier, distance, and career/life consequences.
- Wages scale by age, stage, market power, club finance, league level, fit, and overspending.

### Clubs and Squads

- Clubs are fictionalized but inspired by real football ecosystems.
- Every club has:
  - Senior roster
  - Academy roster
  - Chairman/CEO
  - Manager
  - Finance
  - Fame
  - Facilities
- Squad generation now considers club revenue, reputation, standing, and league level.
- Top clubs have a small number of elite players, normal starters, backups, and lower-rated depth.
- Player names are generated with nationality variety.
- Squad tables show nationality and value.
- Academy squads are much lower rated for long career progression.

### Club Leadership

Chairman/CEO attributes:

- Spending
- Ambition
- Patience
- Youth focus
- Stability
- Pressure

Facilities:

- Academy: improves youth output.
- Training: improves development environment.
- Medical: reduces injury time/risk.
- Hospitality: helps reduce injury risk/time and improves club environment.
- Scouting: improves recruitment logic.

Managers and chairmen can change over time if results are poor and fan/board pressure is high.

### Leagues and Competitions

Domestic league names are fictionalized.

Currently implemented:

- `English League 1`: 20 clubs, 38 matches
- `English League 2`: 24 clubs, 46 matches
- `English League 3`: 24 clubs, 46 matches
- `Spanish League`: 20 clubs, 38 matches
- `Italian League`: 20 clubs, 38 matches
- `German League`: 18 clubs, 34 matches
- `French League`: 18 clubs, 34 matches
- `Portuguese League`: 18 clubs, 34 matches
- `Dutch League`: 18 clubs, 34 matches
- `Korean League`: 12 clubs, 38 matches
- `Malaysian League`: 13 clubs, 24 matches
- `Japanese League`: 20 clubs, 38 matches
- `Brazilian League`: 20 clubs, 38 matches
- `Argentine League`: 30 clubs, 16 matches
- `Academy League`: 20 clubs, 30 matches

English League 1, 2, and 3 include promotion/relegation at season end.

Continental competitions:

- `European Crown League`: 36 clubs, 8-match league phase
- `Asian Crown League`: 24 clubs, 8-match elite phase
- `South American Crown Cup`: 32 clubs, 6-match group phase

Leaderboards:

- Top scorers
- Assists
- Red cards
- Ratings

### News

- News tab with country filters.
- Fictionalized broadcasters:
  - `Ramano Fabio`
  - `ABC Sport`
  - `Marca Norte`
  - `Le Sportif`
  - `Calcio Wire`
  - `Bundes Blitz`
  - `Harimau Daily`
  - `Seoul Ball`
  - `Nippon Goal`
  - `Samba Report`
  - `Rio Plata News`
- News is generated for contracts, transfers, national stories, trophies, board changes, manager changes, and club events.

## Current UI Tabs

- Dashboard
- Leagues
- Squad
- Agents & Contracts
- News

Notifications Center should remain prominent because the user specifically asked for it to be first.

## Recent Verification Notes

Last verified local build: asset/save version `v13`.

Checks performed:

- Fresh start loaded on the live GitHub Pages site.
- Local fresh start loaded at `http://127.0.0.1:4174/?v=12`.
- Academy start around `OVR 17`.
- English League 1: 20 clubs, 38 matches.
- English League 2: 24 clubs, 46 matches.
- English League 3: 24 clubs, 46 matches.
- Added lower tiers are visible in the Leagues tab, including Spanish League 2/3, Italian League 2/3, German League 2/3, French League 2/3, Portuguese League 2/3, Dutch League 2, Korean League 2, Malaysian League 2, Japanese League 2/3, Brazilian League 2/3, and Argentine League 2.
- `Wrecsam Dragons` exists in English League 2.
- Academy offers can now come from seeded lower-tier clubs, such as `Melaka Straits Academy`.
- Academy graduates now move into their parent club's senior tier at first-team breakthrough instead of staying in the academy league forever.
- Manchester Sky had only one 90+ player in test, with depth down to the 60s.
- Academy squad had no duplicate names in tested rows and low OVR range.
- Matchday still worked with no browser console errors.
- Post-match now shows key highlights: only on-ball/key phase moments where the player affected the ball, forced a foul, made a save, ended the phase, or contributed to a goal/assist.
- `?new=1` in the URL clears the local save for that version and returns the user to the create-player screen.
- The start button has a direct click handler, and in-career screens include a topbar `New career` button so players are not trapped by an old save.

## Known Limitations

- The game uses generated static data, not a live sports database.
- Standings are inspired by real structures but are fictionalized.
- Promotion/relegation is now generalized by country/league level, but it is still simplified and does not model playoffs yet.
- Some lower tiers are compressed into one playable table even when the real system uses groups.
- No persistent cloud save or user accounts yet.
- No real transfer windows yet.
- No proper match schedule calendar yet.
- No tactical position/depth chart yet.

## Likely Next Steps

- Add promotion playoffs and group-specific lower divisions where real competitions use them.
- Make match highlights more interactive before the final rating, with the player watching key phases resolve one by one.
- Add real-style transfer windows.
- Add player contract expiry and negotiation screens.
- Add loans.
- Add cup competitions.
- Add youth intake events from academy facility quality.
- Add clearer promotion/relegation summary at season end.
- Add club career history page.
- Add player biography/history timeline.
- Add rivalries and derby matches.
- Add personality traits for the player.
- Add more realistic agent negotiations and release clauses.
- Add injury types.
- Add national team call-ups.
- Add save export/import.

## Important User Preferences

- The game should feel like real life, starting from academy and slowly building to the top.
- Family and relationships must matter, with consequences.
- Agents should be sackable if they force bad moves or fail the player.
- Real-world inspiration is welcome, but names should be changed.
- Do not make progression too fast.
- Do not make squads unrealistically strong.
- Lower tiers matter because a player should be able to build up slowly.
- Clubs with good backing can rise like Wrexham did in real life, but it should remain logical.
- Overspending and flops should happen sometimes, and comebacks should be possible.
