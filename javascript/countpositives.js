
let arr = [1,-4,7,12];

// method 1
let onlyPositives = arr.filter(x => x > 0);
console.log(onlyPositives.length);

// method 2 without .length
let cnt = arr.filter(x => x > 0)
              .map(x => 1)
              .reduce((acc, curr) => acc + curr);
console.log(cnt);
