class Dog {
  setName(newName) {
      this.name = newName;
  }
  bark() {
      console.log('woof-woof, I am ' + this.name);
  }
}

let rex = new Dog();
rex.bark();
console.log(rex);
rex.setName('Rex');
console.log(rex);
let lassie = new Dog();
// lassie.setName('Lassie');

// rex.bark();  // woof-woof, I am Rex
// lassie.bark();  // woof-woof, I am Lassie