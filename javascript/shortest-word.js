let sentence = 'aaaaaaaaaaa Hi my name is Martin';

let words = sentence.split(' ');

let lengths = words.map(word => word.length);

console.log(lengths);
// method 1 Math.min
console.log(Math.min(...lengths));

// method 2 reduce
let shortestLength = lengths.reduce((acc, curr) =>
  acc < curr ? acc : curr
);
console.log(shortestLength)

// method 3 sort
let sortedArray = lengths.sort();
console.log(sortedArray);
console.log(sortedArray[0]);