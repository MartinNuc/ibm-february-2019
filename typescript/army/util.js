"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function printBoard(board) {
    var text = '   ';
    // draw line on the top
    board[0].forEach(function (_, index) { return text += "-" + index % 10 + "-"; });
    text += '\n';
    // draw the battleground
    board.forEach(function (row, index) {
        text += index + " |";
        row.forEach(function (troop) {
            if (troop) {
                text += " " + troop.name[0] + troop.hp;
            }
            else {
                text += '   ';
            }
        });
        text += "|";
        text += '\n';
    });
    // draw line on the bottom
    text += '   ';
    board[0].forEach(function (_, index) { return text += "-" + index % 10 + "-"; });
    return text;
}
exports.printBoard = printBoard;
