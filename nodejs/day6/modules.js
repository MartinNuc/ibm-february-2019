const fileOperations = require('./file-operations');
console.log(fileOperations);

fileOperations.writeFile('file.txt', 'new content');
console.log(fileOperations.readFile('file.txt'));
