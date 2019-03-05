"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GameBoard = /** @class */ (function () {
    function GameBoard() {
        this.characters = [];
        this.initialize();
    }
    GameBoard.prototype.initialize = function () {
        this.characters = [];
    };
    GameBoard.prototype.insertTroop = function (troop, coord) {
        var troopOnCoordinates = this.getTroopOnPosition(coord);
        if (troopOnCoordinates) {
            throw new Error("There is already a troop on coordinates " + coord.x + ":" + coord.y + ".");
        }
        if (coord.x < 0 || coord.y < 0) {
            throw new Error("Cannot use negative coordinates.");
        }
        this.characters.push({
            troop: troop,
            coordinates: coord
        });
    };
    GameBoard.prototype.moveTroop = function (troop, target) {
        if (target.x < 0 || target.y < 0) {
            throw new Error("Cannot use negative coordinates.");
        }
        var troopOnTargetLocation = this.getTroopOnPosition(target);
        if (troopOnTargetLocation) {
            throw new Error("There is already a troop on coordinates " + target.x + ":" + target.y + ".");
        }
        var movedTroop = this.findPositionedTroop(troop);
        if (!movedTroop) {
            throw new Error("This troop is not on the battle field.");
        }
        var distance = this.calculateDistance(movedTroop.coordinates, target);
        if (distance <= troop.speed) {
            movedTroop.coordinates.x = target.x;
            movedTroop.coordinates.y = target.y;
        }
        else {
            throw new Error("Moving troop too far. Tried distance: " + distance + " Maximum: " + troop.speed);
        }
    };
    GameBoard.prototype.attack = function (attacker, usedWeapon, defender) {
        var positionedAttacker = this.findPositionedTroop(attacker);
        var positionedDefender = this.findPositionedTroop(defender);
        if (!positionedAttacker || !positionedDefender) {
            throw new Error("Used troop is not on the battlefield.");
        }
        var distance = this.calculateDistance(positionedAttacker.coordinates, positionedDefender.coordinates);
        if (distance < usedWeapon.range) {
            defender.sufferHit(usedWeapon.power);
            if (defender.hp <= 0) {
                this.removeTroopFromGame(defender);
            }
        }
        else {
            throw new Error('Attacker is too far away.');
        }
    };
    GameBoard.prototype.removeTroopFromGame = function (removedTroop) {
        this.characters = this.characters.filter(function (troop) { return troop.troop !== removedTroop; });
    };
    GameBoard.prototype.create2dBoard = function () {
        var maxX = this.characters
            .map(function (positionedTroop) { return positionedTroop.coordinates.x; })
            .reduce(function (acc, curr) { return (curr > acc ? curr : acc); });
        var maxY = this.characters
            .map(function (positionedTroop) { return positionedTroop.coordinates.y; })
            .reduce(function (acc, curr) { return (curr > acc ? curr : acc); });
        var board = [];
        for (var y = 0; y <= maxY; y++) {
            var row = [];
            for (var x = 0; x <= maxX; x++) {
                var positionedTroop = this.getTroopOnPosition({ x: x, y: y });
                if (positionedTroop) {
                    row.push(positionedTroop.troop);
                }
                else {
                    row.push(null);
                }
            }
            board.push(row);
        }
        return board;
    };
    GameBoard.prototype.getTroopOnPosition = function (coord) {
        return this.characters.find(function (positionedTroop) {
            return positionedTroop.coordinates.x === coord.x &&
                positionedTroop.coordinates.y === coord.y;
        });
    };
    GameBoard.prototype.calculateDistance = function (from, to) {
        var xDistance = from.x - to.x;
        var yDistance = from.y - to.y;
        return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2)); // pythagoras theorem
    };
    GameBoard.prototype.findPositionedTroop = function (troop) {
        return this.characters.find(function (positionedTroop) { return positionedTroop.troop === troop; });
    };
    return GameBoard;
}());
exports.GameBoard = GameBoard;
