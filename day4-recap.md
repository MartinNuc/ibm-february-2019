# Day 4 recap

## JS

### What is a class?

a template for creating objects












### How do you create a class?

class BankAccount {
  constructor() {}

  deposit(amout) {
    console.log('hi')
  }
}











### What does it mean to instantiate a class? How to do it?

let myVariable = {
  deposit() {}
}
let myVariable = new BankAccount();
myVariable.deposit(500);










### What is a constructor? When does it run?

class BankAccount {
  constructor(initialBalance) {
    console.log('beginning');

    this.balance = initialBalance;
  }

  deposit(amout) {
    console.log('hi')
  }
}

myVariable.deposit();
let myVariable = new BankAccount(500);
// myVarible is now { balance: 500, deposit() {} }
let myVariable2 = new BankAccount(300);
let myVariable3 = new BankAccount(0);










### How do you set a property from outside? How do you set them from inside?

// set property from outside:
let bankAccount = new BankAccount(500);
// bankAccount: { balance: 500 }
bankAccount.age = 55;
// bankAccount: { balance: 500, age: 55 }
bankAccount.balance = 1000000;
// bankAccount: { balance: 1000000, age: 55 }

let obj = {};
obj.age = 55;
// obj: { age: 55 }

// setting property from inside of a class
class BankAccount {
  constructor(initialBalance) {
    console.log('beginning');
    this.balance = initialBalance;
  }

  deposit(amout) {
    this.balance = this.balance + amount;
  }
}
let account = new BankAccount(500);
account.deposit(200);







### Model a car

car
- color
- engine (attribute)
  - horsepower 
  - electric / diesel / gas
 - open door / close door (action)
 - start engine (action)
 - turn left / turn right using steering wheel (action)
 - break (action)
 - blink right / blink left (action)

let carForFreya = new Car('purple');
carForFreya.startEngine();

let carForPatty = new Car('black');

class Car {
  constructor(color) {
    this.color = color;
    this.engine = { 
      horsepower: '200 W',
      type: 'diesel' 
    }
  }

  exchangeTheEngine(newEngine) {
    this.engine = newEngine;
  }

  openDoor() {}
  closeDoor() {}

  startEngine() {}

  turn(direction) {}

  break() {}

  blink(direction) {}
}













### How does the inheritance work? (vehicle)

Car - open door, start engine...
forklift - start engine

class Vehicle {
  startEngine() {}
  break() {}
  turn(direction) {}
}

class Car extends Vehicle {
  openDoor() {}
  blink() {}
}












### How to load JS from a separated file?

<script src="my-file.js">
</script>











### What is DOM?

- structure of HTML
- way how to modify the page after its loaded

document.querySelector('CSS SELECTOR') - find specific element in HTML











### How is the HTML processed by browser?

from top to bottom












### Why do we have to wait for load event?

beware of using DOM before the document is loaded










### How to get a reference for HTML element from JS?

document.querySelector









### How to execute JS on click?

<img class="image" src="...">
<button onclick="fn()">click me</button>


let button = document.querySelector('.image');
button.addEventListener('click', () => {
  console.log('button was clicked');
})









### 

## HTML

### For what do we use flexbox?















### Can you describe how flexbox works? What properties are there?

flex-direction - changes the main axis

main axis
- justify-content


cross axis
- align-items


align-content
- position of lines with flex-wrap: wrap

flex-wrap
- let items go on the new line when they dont fit








### flex-direction
- says what the main axis is

### flex-wrap
- when items dont fit, let them a new line

### justify-content
- alignment along the main axis

### align-items
- alignment along the cross axis

### align content
- when there are multiple lines -> how these lines are supposed to be aligned

### items properties

- flex-grow - take up the unused space
- flex-shrinkg - shrink when items dont fit the container
- flex-basis = initial width/height (depends on flex-direction) before growing/shrinking
