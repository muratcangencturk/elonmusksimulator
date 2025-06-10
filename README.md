# Elon Musk Simulator

**Elon Musk Simulator** is a tongue-in-cheek browser game where you try to keep Elon's many ventures afloat. Each turn presents a question with absurd proposals. Swipe **left** or **right** to answer and balance the vital stats for SpaceX, Tesla, and other Musk projects. Let any vital reach 0 or 100 and it's game over!

## Playing the Game
1. Clone or download this repository.
2. Open `index.html` in a modern web browser (double click the file or serve it locally).
3. Drag/swipe the card left or right to pick an answer. Keep the meters from maxing out or dropping to zero to survive.
4. If you fail, hit **Try Again** or **Quit** to restart.

Screenshots below show a glimpse of the interface:

![Elon happy](elon_musk_happy.png)
![Elon angry](elon_musk_angry.png)

## Normalizing Questions

After editing any of the `*.json` question files, run the helper script to
ensure the left and right responses are oriented correctly:

```bash
node normalize_questions.js
```

The script scans `questions.json` and all `new_questions_batch*.json` files in
the repository, swaps responses when the left choice carries a positive impact
and the right choice a negative one, then writes the normalized JSON back to
disk.

This project is a parody and is provided for entertainment. It is licensed under the [Apache License 2.0](LICENSE).
