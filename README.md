# ibm-february-2019

## Day 1 recap

### HTML

## What is a structure of HTML page?

<html>
  <head>
    <title>title of the window</title>
    <styles>
      .... CSS
    </styles>
    <script>
    </script>
  </head>
  <body>
    ... content
    <img src="image.jpeg">
  </body>
</html>



## How do you create a link?

<img src="URL">
<a href="URL" target="_blank">this is my link</a>









## How to do you display image?

<img src="URL">


URL:

relative:
image.jpg

absolute:
http://www.google.com/about?param=123#phone










## How do you create a list?

<ol>
  <li>one</li>
  <li>two</li>
</ol>
<ul>










## How do you create a table?

<table>
  <tr>
    <td></td>
    <td></td>
  </tr>
  <tr>
    <td></td>
  </tr>
  <tr>
    <td></td>
    <td></td>
  </tr>
</table>




## What do we use CSS for?

To style a page.












## What options to apply CSS do you have?

1) inline
2) internal stylesheet - inside HTML
3) external stylesheet - outside of HTML











## What is a selector?

1) by id - #
2) by class - .
3) by element - just name of the element

.text-color-white {
  color: white;
  ...
}

.background-green {
  background-color: green;
}

<p class="text-color-white background-green">
</p>












### JS

## What is a variable?

var, let, const

var - old JS
let - ES6
const - ES6, cannot change the value

let myVariable = 'this is a sentence';
myVariable = 5;
myVariable = [];
myVariable = {};
myVariable = true;
myVariable = null;
myVariable = undefined;
myVariable = add;
myVariable(1, 4);
add()
let add;
if (Math.random() > 0.5) {
  add = function(a, b) {
    return a+b;
  };
}

function add(a, b) {
  return a + b;
}









## What types do we have in JS?

number - 5
string - 'hi', "hi", `hi`
boolean - true, false
array - [], [1,2,3]
undefined, null
object

let myVariable = 5;
let type = typeof myVariable; // 'number'
console.log(type) // number
console.log(typeof type) // string











## What is a function?

anonymous vs named function

function add(a, b) {
  return a + b;
}

let add = function(a, b) {
  return a + b;
}
let add = (a, b) => {
  return a + b;
}
let add = (a, b) => a + b;











## How do you create an array with 2 items?
                0       1       2    3  4
let myArray = ['hi', 'hello', 'hey', 5, 6];

console.log(myArray[0]);
console.log(myArray[1]);
console.log(myArray[9]); // undefined

myArray.push('good morning');
console.log(myArray.length) // 6

let myArray = ['hi', 'hello', 'hey', 5, 6];

function doWork(currentValue) {
  console.log(currentValue);
}

myArray.forEach(doWork);
myArray.forEach(() => console.log('we are here'));

myArray.forEach((currentValue) => console.log(currentValue))

let result = add(add(5, 3), 9);
let result = add(8, 9);
let result = 17;







## How do you add another item?

array.push(1)








## How to find out how many items are in the array?

array.length









## What is alert and what is prompt function? Where does it come from?

alert - displays popup window
prompt - asks user for value

alert('message')
let age = prompt('How old are you?')




