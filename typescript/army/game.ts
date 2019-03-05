import { GameBoard } from "./gameboard";
import { Solder, Archer, Knight } from "./troops";
import { printBoard } from "./util";

let board = new GameBoard();

let solder = new Solder();
board.insertTroop(solder, { x: 0, y: 0 });
let archer = new Archer();
board.insertTroop(archer, { x: 3, y: 0 });

console.log(printBoard(board.create2dBoard()));

console.log('move soldier down:');
board.moveTroop(solder, {x: 0, y: 1});
console.log(printBoard(board.create2dBoard()));

console.log('archer attacks soldier:');
board.attack(archer, archer.weapons[0], solder);
console.log(printBoard(board.create2dBoard()));

console.log('archer attacks soldier until he dies:');
board.attack(archer, archer.weapons[0], solder);
board.attack(archer, archer.weapons[0], solder);
board.attack(archer, archer.weapons[0], solder);
board.attack(archer, archer.weapons[0], solder);
board.attack(archer, archer.weapons[0], solder);
console.log(printBoard(board.create2dBoard()));

console.log('drop in the knight:');
let knight = new Knight();
board.insertTroop(knight, { x: 9, y: 9 });
console.log(printBoard(board.create2dBoard()));

console.log('move knight 3 fields to the left:');
board.moveTroop(knight, { x: 6, y: 9 });
console.log(printBoard(board.create2dBoard()));

