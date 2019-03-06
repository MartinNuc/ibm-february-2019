# Day 7 recap

## What is Typescript?

- programming language
- adds types

## How do you initialize Typescript in your project?

npm init -> ⭐️ node project
tsc --init -> ⭐️ typescript











## How do you execute Typescript?

tsc = TypeScript Compiler
- compiles the code from TS -> JS

node index.js <---------- !!!! JS file












## How do you use types? For variable / for function?

let myVariable: string = 'hello';

function splitToChunks(array: number[], n: number): number[][] {
  
}













## How does module system work in TS?

------------------- first.ts

export interface Elevator {
  currentFloor: number;
  floorCount: number;
}
export default interface Car {
  maxSpeed: number;
  wheelCount: number;
}

--------------------- second.ts

import {Elevator} from './first';
import CustomName from './first';  // for importing a default export

let elevatorInIbm: Elevator = {
  floorCount: 5,
  currentFloor: 2
}







## How to use 3rd party library like lodash in your project?

1) install the library itself:

npm install lodash

2) type definitions:

npm install @types/lodash

3) in the code:

import _ from 'lodash';

_.camelCase('bla bla bla');'










## What is a purpose of interface?

- to describe a shape of something
- something = class / function / object

let employeeLucas: Employee = {
  name: 'Lucas',
  age: 24,
  address: {
    street: 'Backyard',
    city: 'London',
    zip: 169493
  }
}

interface Employee {
  name: string;
  age: number;
  permanentAddress: Address;
  contactAddress: Address;
}

interface Address {
  street: string;
  city: string;
  zip: number;
};













## How do you write a class in TS?

let myVariable;
myVariable = {}'

interface Engine {
  horsePower: number;
}

type Color = 'white' | 'black';

class Car {
  engine: Engine;
  ---------------- color: string;
  constrcutor(public color: Color) {
    this.engine = {
      horsePower: 220
    };
    ------------------- this.color = color;
  }

  startEngine() {}
  steer(direction) {}
  break() {}
}
















## What is class inheritance? What do we use it for?

Soldier - sword + shield
Archer - bow
Knight - sword + horse

- coordinates
- weapons

interface Coordinates {
  x: number;
  y: number;
}

interface PlacedUnit {
  coordinates: Coordinates;
  unit: Troop;
}

class GameBoard {
  placedUnits: PlacedUnit[]
}


class Troop {
  heath: number;
  coordinates: Coordinates;
  weapons: Weapon[];

  sufferHit(byWeapon: Weapon) {
    this.heath -= byWeapon.power;
  }

  attack(target: Troop) {
    target.sufferHit(this.weapons[0]);
  }
}

class Soldier extends Troop {
  constructor() {
    this.weapons.push(new Sword());
    this.weapons.push(new Shield());
  }
}


class Weapon {}

class Sword extends Weapon {
  power: 5;
}
class Bow extends Weapon {
  power: 2
}
class Shield extends Weapon {
  power: 0
}


------------------ index.ts
import {Solder} from './file'
new Solder();








## What is union type?

let myVaribale: number | string;
myVariable = 5;
myVariable = 'hi';
















## What are generics?


let result = splitToChunks([1,2,3,4,5], 2);
let result2 = splitToChunks(['hi', 'hey', 'blabla','look','how','great','the','TS','is'], 4);
console.log('result', result);
console.log('result', result2);
console.log('should be', [[1,2], [3,4], [5]]);

function splitToChunks<T>(arr: T[], chunkSize: number): T[][] {
  let result: T[][] = [];
  for(let i = 0; i < arr.length; i+=chunkSize) {
    let subArray = arr.slice(i, i + chunkSize);
    result.push(subArray);
  }
  return result;
}




class Bucket<T> {
  items: T[];

  insert(item: T) {
    this.items.push(item);
  }
}
let forStrings = new Bucket<string>();
let forNumbers = new Bucket<number>();
forNumbers.insert('string');




## Decorator 😱