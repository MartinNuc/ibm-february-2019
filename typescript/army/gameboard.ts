import { Troop } from './troops';
import { Weapon } from './weapons';

interface PositionedTroop {
  troop: Troop;
  coordinates: Coordinates;
}

interface Coordinates {
  x: number;
  y: number;
}

export class GameBoard {
  private characters: PositionedTroop[] = [];

  constructor() {
    this.initialize();
  }

  initialize() {
    this.characters = [];
  }

  insertTroop(troop: Troop, coord: Coordinates) {
    let troopOnCoordinates = this.getTroopOnPosition(coord);
    if (troopOnCoordinates) {
      throw new Error(
        `There is already a troop on coordinates ${coord.x}:${coord.y}.`
      );
    }
    if (coord.x < 0 || coord.y < 0) {
      throw new Error(`Cannot use negative coordinates.`);
    }
    this.characters.push({
      troop,
      coordinates: coord
    });
  }

  moveTroop(troop: Troop, target: Coordinates) {
    if (target.x < 0 || target.y < 0) {
      throw new Error(`Cannot use negative coordinates.`);
    }
    let troopOnTargetLocation = this.getTroopOnPosition(target);
    if (troopOnTargetLocation) {
      throw new Error(
        `There is already a troop on coordinates ${target.x}:${target.y}.`
      );
    }

    let movedTroop = this.findPositionedTroop(troop);
    if (!movedTroop) {
      throw new Error(`This troop is not on the battle field.`);
    }

    let distance = this.calculateDistance(movedTroop.coordinates, target);
    if (distance <= troop.speed) { 
      movedTroop.coordinates.x = target.x;
      movedTroop.coordinates.y = target.y;
    } else {
      throw new Error(`Moving troop too far. Tried distance: ${distance} Maximum: ${troop.speed}`);
    }
  }

  attack(attacker: Troop, usedWeapon: Weapon, defender: Troop) {
    let positionedAttacker = this.findPositionedTroop(attacker);
    let positionedDefender = this.findPositionedTroop(defender);
    if (!positionedAttacker || !positionedDefender) {
      throw new Error(`Used troop is not on the battlefield.`);
    }

    let distance = this.calculateDistance(positionedAttacker.coordinates, positionedDefender.coordinates);
    if (distance < usedWeapon.range) {
      defender.sufferHit(usedWeapon.power);
      if (defender.hp <= 0) {
        this.removeTroopFromGame(defender);
      }
    } else {
      throw new Error('Attacker is too far away.');
    }
  }

  removeTroopFromGame(removedTroop: Troop) {
    this.characters = this.characters.filter(
      troop => troop.troop !== removedTroop
    );
  }

  create2dBoard() {
    let maxX = this.characters
      .map(positionedTroop => positionedTroop.coordinates.x)
      .reduce((acc, curr) => (curr > acc ? curr : acc));
    let maxY = this.characters
      .map(positionedTroop => positionedTroop.coordinates.y)
      .reduce((acc, curr) => (curr > acc ? curr : acc));

    let board = [];
    for (let y = 0; y <= maxY; y++) {
      let row = [];
      for (let x = 0; x <= maxX; x++) {
        let positionedTroop = this.getTroopOnPosition({ x, y });
        if (positionedTroop) {
          row.push(positionedTroop.troop);
        } else {
          row.push(null);
        }
      }
      board.push(row);
    }

    return board;
  }

  private getTroopOnPosition(coord: Coordinates) {
    return this.characters.find(
      positionedTroop =>
        positionedTroop.coordinates.x === coord.x &&
        positionedTroop.coordinates.y === coord.y
    );
  }

  private calculateDistance(from: Coordinates, to: Coordinates) {
    let xDistance = from.x - to.x;
    let yDistance = from.y - to.y;
    return Math.sqrt(xDistance ** 2 + yDistance ** 2); // pythagoras theorem
  }

  private findPositionedTroop(troop: Troop) {
    return this.characters.find(
      positionedTroop => positionedTroop.troop === troop
    );
  }
}
