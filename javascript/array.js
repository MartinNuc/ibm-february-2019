
let arr = [1,2,3,4];

// map
let newArray = arr.map(x => x * 2)
console.log(arr)
console.log(newArray)

// filter
let filteredArray = arr.filter(x => {
  return false;
})
console.log(filteredArray);



// reduce to duplicate every item
arr = [5,3,6,2,5];

// using for loop
let duplicatedArr = [];
for(let i = 0; i < arr.length; i++) {
  duplicatedArr.push(arr[i])
  duplicatedArr.push(arr[i])
}
// using reduce
let reducedArr = arr.reduce((acc, curr) => {
  acc.push(curr);
  acc.push(curr);
  return acc;
}, []);
console.log(reducedArr);

// chaining functions split, reduce and join
let test = 'hello'.split('').reduce((acc, curr) => {
  acc.push(curr);
  acc.push(curr);
  return acc;
}, []).join('');
console.log(test)