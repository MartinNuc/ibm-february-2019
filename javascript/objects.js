class Dog {
  bark() {
      console.log('woof-woof');
  }
}

let rex = new Dog();
rex.bark();
rex.legCount = 4;
let zorra = new Dog();
zorra.bark();
zorra.legCount = 4;
let lassie = new Dog();
lassie.bark();
lassie.legCount = 3;

// let zorra = {
//   bark() {
//     console.log('woof');
//   }
// };
// let lassie = {
//   bark: function() {
//     console.log('woof');
//   }
// };