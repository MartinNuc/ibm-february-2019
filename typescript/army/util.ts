import {Troop} from './troops';

export function printBoard(board: (Troop | null)[][]) {
  let text = '   ';
  // draw line on the top
  board[0].forEach((_, index) => text += `-${index % 10}-`);
  text += '\n';

  // draw the battleground
  board.forEach((row, index) => {
    text += `${index} |`;
    row.forEach(troop => {
      if (troop) {
        text += ` ${troop.name[0]}${troop.hp}`;
      } else {
        text += '   ';
      }
    });
    text += `|`;
    text += '\n';
  });

  // draw line on the bottom
  text += '   ';
  board[0].forEach((_, index) => text += `-${index % 10}-`);
  return text;
}