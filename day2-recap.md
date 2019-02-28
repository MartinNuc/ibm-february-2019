

## Day 2 recap

### What is div and span? Why do we use them?

<div></div> - block container
<span></span> - inline container


block
- takes the whole width

inline
- This is <div>a</div> sentence


This is
a
sentence



### What are possible values of display property?

block - can set width/height, takes 100 %
inline - you can place smt next to it
inline-block - you can place smt next to it + can set width/height
none - hiding element









### How do you create a selector which targets every paragraph inside of a div with class `article`?

<div class="article">
  <p>lorem</p>
  <p>lorem</p>
  <p>lorem</p>
</div>
<article class="article">
  <p>lorem</p>
</article>



div .article p {

}










### What is margin/padding/border?

content
padding - inner space
border
margin - outer space

div {
  padding: 10px 15px 5px 9px;
  margin: 10px 15px 5px 9px;
  border: 5px solid red;
}







### Can you explain box sizing?

box-sizing: content-box;
width: 500px;
box-sizing: border-box; = padding+border is included in the width









### What is a pseudo class?

div div:first-child {
  background-color: red;
}

<div>
  <div></div>
  <div></div>
  <div></div>
</div>








## JS recap

### What is an object? How do you create an object?

let myArray = [1,2,3];
myArray.push(77);

let myObject = {
  key: 'value',
  age: 30,
  address: {
    street: 'blabla',
    city: 'Groningen'
  }
};
myObject.address.city = 'London';
console.log(myObject.address.city);







### What is string interpolation?

let mood = 'happy';
let str = "My mood is " + mood + ' and I am ' + age + ' ' + xxx + ' fj;
let str = 'My mood\' is ' + mood + ' and I am ' + age + ' ' + xxx + ' fj;
let str = `My mood' is ${mood} and I am ${age} ${xxx} years old`;








### How do you create an array?

let myArray = [];
let myObject = {};









### Describe how array.forEach works

let myArray = ['hello', 'hi', 'hey'];

myArray.forEach((aaaaaaa) => {
  console.log(item);
})
myArray.forEach(function() {
})



function fn() {
  return 5;
}

function fn(x, a, b, c) {
}















### Describe how array.map works

- it creates a new array

let myArray = ['hello', 'hi', 'hey'];
[5, 2, 3]

let newArray = myArray.map((currentValue) => {
  return currentValue.length;
}) // [5, 2, 3]
console.log(newArray);







### Describe how array.filter works

let myArray = ['hello', 'hi', 'hey'];

// give me only short words <=3 characters

let result = myArray.filter((item) => {
  return item.length <= 3;
})
console.log(result);








### Describe how array.reduce works

let myArray = ['hello', 'hi', 'hey'];

// give me string: 'hello hi hey'

let initialValue = '';
let result = myArray
  .filter((item) => {
    return item.length <= 3;
  })
  .reduce((acc, curr, index, reducedArray) => {
    if (index === reducedArray.length - 1) {
      return acc + curr;
    }
    return acc + curr + ' ';
}, initialValue)
// result = 'hello hi hey '
result = result.trim();
// new result: 'hi hey'






