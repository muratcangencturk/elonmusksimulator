# Elon Musk Simulator

**Elon Musk Simulator** is a short satirical web game where you juggle the many businesses and whims of a fictionalized Elon Musk. Swipe **left** or **right** on ridiculous proposals to keep the different project "vitals" in balance. If any meter hits 0 or 100, it's game over.

This game is purely a parody created for entertainment and is not affiliated with Elon Musk or his companies.

## Gameplay
Each turn presents a question card. Swiping right accepts the idea, swiping left rejects it. Your choice alters the stats for SpaceX, Tesla, public opinion, and other ventures. Survive as long as possible without any vital running dry or overflowing.

## Run the Game Locally
1. Clone or download this repository.
2. Either open `index.html` directly in your browser or start a quick server with `python3 -m http.server` and visit `http://localhost:8000`.
3. Drag or swipe the card left/right to answer.
4. Use **Try Again** or **Quit** to restart when you lose.

## Contributing Questions
Question data lives in `questions.js` and the `new_questions_batch*.js` files. Each file exports an array of objects:

```javascript
{
  text: "Should Tesla make a rocket car?",
  rightResponse: "'Full send!'",
  leftResponse: "'Maybe keep the wheels on the ground.'",
  impact: {
    right: { spacex: 5, tesla: 10 },
    left: { spacex: -5, tesla: -5 }
  }
}
```

Add your question to an existing file or create a new one following the same pattern, then include that script in `index.html`.

## Screenshots

![Gameplay screenshot of Elon smiling](elon_musk_happy.png)
![Gameplay screenshot of Elon angry](elon_musk_angry.png)

Licensed under the [Apache License 2.0](LICENSE).

