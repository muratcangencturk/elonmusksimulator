# Elon Musk Simulator

This project contains question datasets used by the web app. To keep these data files readable, all arrays are formatted using two-space indentation. Each file exports the data by assigning it to a constant, e.g.:

```javascript
const questions = [
  { "text": "..." },
  // more questions
];
```

When editing or generating new batches, please maintain this style:

- Use multi-line arrays with each object on its own line.
- Indent nested objects and arrays with two spaces.
- End files with a newline and keep the `const <name> =` assignment.

You can run `js-beautify -s 2 --end-with-newline --replace <file>` to enforce this formatting.
