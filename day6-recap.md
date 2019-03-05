# Day 6 recap

## what is nodejs? how does it differ from a browser?























## what is npm?

node package manager

- downloads 3rd party libraries
- runs terminal commands

1) initialize project
npm init

package.json
- author
- licence
- dependencies / devDependencies
- scripts
......
  "scripts": {
    "start": "node index.js"
    "myownscript": "ping google.com"
  }
......

npm run start
npm run myownscript
npm start / test

npm install <name>
npm install lodash
1. node_modules
2. update package.json
3. update package-lock.json


npm install







## what is semantic versioning?

X.Y.Z

major minor patch

lodash: 4.11.6
lodash: 5.0.0
-> breaking change

lodash: 4.11.6
lodash: 4.12.0
-> new features

lodash: 4.11.6
lodash: 4.11.7
-> bugfixes







## how do you read/write a file?

const fs = require('fs');

setTimeout(() => console.log('tick'), 1000)
fs.writeFile('filename.txt', 'hello this is text', (err) => { // 20s
  console.log('done')
})
console.log('blabla')

setTimeout(() => console.log('tick'), 1000)
fs.writeFileSync('filename.txt', 'hello this is text') /// 20s
console.log('blabla')


fs.readFile('filename.txt', 'utf8', (err, data) => {
  if (err) { console.log('something went wrong') }
  else {

  }
})






## what are promises?

fs.readFile('filename.txt', 'utf8', (err, data) => {
  if (err) {
    console.log('something went wrong')
  }
  else {
    fs.writeFile('another', 'blabla', () => {
      if (err) {
        console.log('something went wrong')
      }
      else {
        fs.writeFile('another2', 'blabla', () => {
            if (err) {
              console.log('something went wrong')
            }
            else {
              fs.writeFile('another', 'blabla', () => {
            }
        })
      }
    });
  }
})

let promise = new Promise((resolve, reject) => {
  resolve();
});
promise.then(() => console.log('hi'))

let timer = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});
let anotherPromise = timer
  .then(() => console.log('hi'))
  .then(() => fetch(...))
  .then(() => console.log('hi'))
  .then(() => console.log('hi'))

function readFile(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(filename, 'utf8', (err, data) => {
      if(err) {
        reject(err);
      } else {
        resolve(data);
      }
    })
  });
}

readFile('file1.txt\')
  .then((zcontentOne) =>
    console.log(contentOne);
    readFile('file2.txt);
  })
  .then((contentTwo) => console.log('both files are read', contentTwo))
  .then(() => {
    return 5;
  })
  then(x => console.log(x))
  .catch(err => console.log('got error', err))

## modules

- having code in multiple files

index.js
------------------

let one = obj.one;
let two = obj.two;
let { one, two } = {
  one: 1,
  two: 2
}

let { print, Calculator } = require('./file2.js');
let instance = new Calculator();
print()

file2.js
------------------
// EXPORT
class Calculator {
  add(a, b) {
    return a + b;
  }
}
function print() {
  console..log('printing');
}
module.exports.Calculator = Calculator;
module.exports.print = print;
