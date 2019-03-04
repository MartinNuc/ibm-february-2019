
const fs = require('fs');

fs.writeFileSync('file.txt', 'Hello, how are you?');

const content = fs.readFileSync('package.json', 'utf8');
console.log(content);


