export interface Weapon {
  power: number;
  defense: number;
  range: number;
  twoHanded: boolean;
}
export class Sword implements Weapon {
  power = 10;
  defense = 0;
  range = 1;
  twoHanded = false;
}

export class Bow implements Weapon {
  power = 4;
  defense = 0;
  range = 5;
  twoHanded = true;
}

export class Shield implements Weapon {
  power = 0;
  defense = 3;
  range = 0;
  twoHanded = false;
}