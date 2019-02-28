# Day 3 recap

## HTML/CSS

### How do we position stuff using CSS?

using position property

















### What positions do you know?

position: static - default, as you write in HTML
position: fixed - sticking to the viewport, used menus
position: relative - relative to the original position, the original space is still occupied
position: absolute - absolute positioning in a coordinate system. Original space is not occupied. Coordinate system - starts at element above which is not static

<div>
  <div class="sidebar">
  </div>
  <div class="content">
    <p>lorem></p>
    <p>lorem></p>
    <p>lorem></p>
    <p>lorem></p>
  </div>
</div>














### What is z-index?

like layers










### What are media queries?

- responsive design - different desings for different screen sizes


.sidebar {
  display: block;
}
@media (min-width: 500px) {
  .sidebar {
    display: inline-block;
  }
}











## JS

### What is a function? How do you create a new function?

function
- block of code which you can reuse
- autonomous block of code which does a specific job
- care about naming your functions
- has INPUT and OUTPUT
- input: parameters
- output: return statement

anonymous = doesn't have a name

let fn = function () {
  return 'this text';
}
fn()
fn()
fn()
let resultFromFunction = fn()
let resultFromFunction = 'this text'
let result = add(1,2);
let result = add(1, add(4,2));
let result = add(1, 6);
let result = 7;
console.log(result);



3 * (4 + 2);

function add(a, b) {
  return a + b;
}











### What has an object and array in common? What are differences?

let box = 5;
let array = [];
array.push(5);  // [5]
array.push(7);  // [5, 7]

console.log(array[1])   // 7

let object = {};
object.first = 5;
object.second = 7;
console.log(object.second);







### How do you set a property of an object (2 ways)?

let object = {
  first: 5
};

object.first = 99;
let key = 'first';
object[key] = 99;

### What array methods do you know?

array.push(5) - in: the new value, out: number (length of the array after adding item(s))

let five = 5;
array.push(five);


array.forEach - in: function out: N/A

let array = [1,4,44,6,7,4];
function printValue(value, index, originalArray) {
  console.log(value);
}
array.forEach(printValue)

for(let i = 0 ; i < array.length; i++) {
  printValue(array[i], i, array);
}



function add(a,b) {
  return a + b;
}
add(3,6);




array.filter - in: function out: array
array.map - in: function out: array
array.reduce - in: (function, initial value) out: value after reduction
array.join - in: string out: string
[1,2,3].join('-') -> '1-2-3'













### What string methods do you know?

let str = 'hello how are you?';
str.split(' ') - in: string out: array
str.replace() - in: (wordIWantToReplace, replacedWith) out: string

let str = 'hello how are you?';
str = str.replace('hello', 'hi');

str.toLowerCase() - in: N/A out: string
