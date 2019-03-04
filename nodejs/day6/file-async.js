const fs = require('fs');

console.log('before writing');
fs.writeFile('file.txt', 'Hello, how are you?', () => {
  // file is written
  console.log('after writing, before reading');
  fs.readFile('file.txt', 'utf8', (err, content) => {
    console.log('after reading');
    console.log(content);
  });
  console.log('at the end of the code of writeFile callback');
});
// not yet written here!!!!
console.log('at the end of the code');
