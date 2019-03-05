import { Weapon, Sword, Bow, Shield } from "./weapons";

export abstract class Troop {
  abstract hp: number;
  abstract speed: number;
  abstract name: string;
  weapons: Weapon[] = [];

  equipWeapon(weapon: Weapon) {
    if (this.canEquipWeapon(weapon)) {
      this.weapons.push(weapon);
    } else {
      throw new Error('No hands to hold the another weapon');
    }
  }

  sufferHit(power: number) {
    let damage = Math.max(power - this.calculateDefense(), 0);
    this.hp = this.hp - damage;
  }

  private calculateDefense() {
    return this.weapons.map(weapon => weapon.defense).reduce((acc, curr) => acc + curr);
  }

  private canEquipWeapon(weapon: Weapon) {
    let carryingWeight = this.weapons.map((weapon): number => {
      if (weapon.twoHanded) {
        return 2;
      } else {
        return 1;
      }
    }).reduce((acc, curr) => acc + curr, 0);

    let newWeaponWeight = weapon.twoHanded ? 2 : 1;
    return carryingWeight + newWeaponWeight <= 2;
  }
}

export class Solder extends Troop {
  name = 'solder';
  hp = 6;
  speed = 1;
  constructor() {
    super();
    this.equipWeapon(new Sword());
    this.equipWeapon(new Shield());
  }
}

export class Knight extends Troop {
  name = 'knight';
  hp = 9;
  speed = 3;
  constructor() {
    super();
    this.equipWeapon(new Sword());
  }
}

export class Archer extends Troop {
  name = 'archer';
  hp = 2;
  speed = 1;
  constructor() {
    super();
    this.equipWeapon(new Bow());
  }
}