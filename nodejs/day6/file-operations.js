const fs = require('fs');
function writeFile(filename, text) {
  fs.writeFileSync(filename, text);
  return;
}

function readFile(filename) {
  let content = fs.readFileSync(filename, 'utf8');
  return content;
}

module.exports.writeFile = writeFile;
module.exports.readFile = readFile;