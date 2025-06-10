# Elon Musk Simulator

**Elon Musk Simulator** is a short satirical web game where you juggle the many businesses and whims of a fictionalized Elon Musk. Swipe **left** or **right** on ridiculous proposals to keep the different project "vitals" in balance. If any meter hits 0 or 100, it's game over.

This game is purely a parody created for entertainment and is not affiliated with Elon Musk or his companies.

## Gameplay
Each turn presents a question card. Swiping right accepts the idea, swiping left rejects it. Your choice alters the stats for SpaceX, Tesla, public opinion, and other ventures. Survive as long as possible without any vital running dry or overflowing.

## Run the Game Locally
1. Clone or download this repository.
2. Open `index.html` in a modern web browser (double click the file or serve it locally).
3. Choose your language from the dropdown at the top.
4. Drag/swipe the card left or right to pick an answer. Keep the meters from maxing out or dropping to zero to survive.
5. If you fail, hit **Try Again** or **Quit** to restart.

## Question Categories
Questions are organized into JSON files by theme (e.g. `tech.json`, `politics.json`).
The game loads these files on demand so only the necessary categories are fetched.

Screenshots below show a glimpse of the interface:

```bash
node normalize_questions.js
```

The script scans `questions.json` and all `new_questions_batch*.json` files in
the repository, swaps responses when the left choice carries a positive impact
and the right choice a negative one, then writes the normalized JSON back to
disk.

## Live Demo

Play it online here:
<https://muratcangencturk.github.io/elonmusksimulator/>

This project is a parody and is provided for entertainment. It is licensed under the [Apache License 2.0](LICENSE).

See [CREDITS.md](CREDITS.md) for image attributions and notes about the origin of the question text.
