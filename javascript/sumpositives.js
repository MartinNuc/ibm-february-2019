
let arr = [1,-4,7,12];

let isPositive = (x) => x > 0;
let onlyPositives = arr.filter(isPositive);

function functionForReduce(acc, curr) {
  return acc + curr;
}

console.log(onlyPositives);
let sum = onlyPositives.reduce(functionForReduce, 0);
let sum = onlyPositives.reduce((acc, curr) => acc + curr, 0);
console.log(sum)