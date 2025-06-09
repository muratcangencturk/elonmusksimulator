const fs = require('fs');
const vm = require('vm');

const files = fs.readdirSync('.').filter(f => /^questions(\.|$)/.test(f) || /^new_questions_batch\d+\.js$/.test(f));

files.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const varMatch = content.match(/const\s+(\w+)\s*=\s*/);
  if (!varMatch) {
    console.error(`Variable name not found for ${file}`);
    return;
  }
  const varName = varMatch[1];
  const start = content.indexOf('[');
  const end = content.lastIndexOf(']');
  const arrayCode = content.slice(start, end + 1);
  const context = {};
  vm.createContext(context);
  vm.runInContext(`result = ${arrayCode}`, context);
  const arr = context.result;
  arr.forEach(q => {
    if (q && q.impact && q.impact.right && q.impact.left) {
      const sum = obj => Object.values(obj).reduce((a, b) => a + b, 0);
      const rightSum = sum(q.impact.right);
      const leftSum = sum(q.impact.left);
      if (rightSum < 0 && leftSum > 0) {
        [q.rightResponse, q.leftResponse] = [q.leftResponse, q.rightResponse];
        [q.impact.right, q.impact.left] = [q.impact.left, q.impact.right];
      }
    }
  });
  const newContent = `const ${varName} = ${JSON.stringify(arr, null, 2)};\n`;
  fs.writeFileSync(file, newContent);
});
