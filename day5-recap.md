# Day 5 recap

## what happens first?

```
console.log(1);
setTimeout(() => {
  console.log(2);
}, 0);
console.log(3);
```

## what can we store in a varible?

```
let myVariable = 5
let myVariable = true
let myVariable = 'hi'
let myVariable = undefined
let myVariable = null
let myVariable = [1,2,3]
let myVariable = {
  PI: 3.14
}
let myVariable = () => 5;
let myVariable = () => {
  return 5;
};
let myVariable = function() {
  console.log('hi');
};
myVariable()
let myVariable = new Car('white');
myVariable.color = 'white';
myVariable.setColor('white');
myVariable.startEngine();

class Car {
  constructor(color) {
    this.wheels = 4;
    this.color = color;
  }

  setColor(color) {
    this.color = color;  
  }

  startEngine() {

  }
}
```