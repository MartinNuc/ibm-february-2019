"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sword = /** @class */ (function () {
    function Sword() {
        this.power = 10;
        this.defense = 0;
        this.range = 1;
        this.twoHanded = false;
    }
    return Sword;
}());
exports.Sword = Sword;
var Bow = /** @class */ (function () {
    function Bow() {
        this.power = 4;
        this.defense = 0;
        this.range = 5;
        this.twoHanded = true;
    }
    return Bow;
}());
exports.Bow = Bow;
var Shield = /** @class */ (function () {
    function Shield() {
        this.power = 0;
        this.defense = 3;
        this.range = 0;
        this.twoHanded = false;
    }
    return Shield;
}());
exports.Shield = Shield;
