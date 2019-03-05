"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var weapons_1 = require("./weapons");
var Troop = /** @class */ (function () {
    function Troop() {
        this.weapons = [];
    }
    Troop.prototype.equipWeapon = function (weapon) {
        if (this.canEquipWeapon(weapon)) {
            this.weapons.push(weapon);
        }
        else {
            throw new Error('No hands to hold the another weapon');
        }
    };
    Troop.prototype.sufferHit = function (power) {
        var damage = Math.max(power - this.calculateDefense(), 0);
        this.hp = this.hp - damage;
    };
    Troop.prototype.calculateDefense = function () {
        return this.weapons.map(function (weapon) { return weapon.defense; }).reduce(function (acc, curr) { return acc + curr; });
    };
    Troop.prototype.canEquipWeapon = function (weapon) {
        var carryingWeight = this.weapons.map(function (weapon) {
            if (weapon.twoHanded) {
                return 2;
            }
            else {
                return 1;
            }
        }).reduce(function (acc, curr) { return acc + curr; }, 0);
        var newWeaponWeight = weapon.twoHanded ? 2 : 1;
        return carryingWeight + newWeaponWeight <= 2;
    };
    return Troop;
}());
exports.Troop = Troop;
var Solder = /** @class */ (function (_super) {
    __extends(Solder, _super);
    function Solder() {
        var _this = _super.call(this) || this;
        _this.name = 'solder';
        _this.hp = 6;
        _this.speed = 1;
        _this.equipWeapon(new weapons_1.Sword());
        _this.equipWeapon(new weapons_1.Shield());
        return _this;
    }
    return Solder;
}(Troop));
exports.Solder = Solder;
var Knight = /** @class */ (function (_super) {
    __extends(Knight, _super);
    function Knight() {
        var _this = _super.call(this) || this;
        _this.name = 'knight';
        _this.hp = 9;
        _this.speed = 3;
        _this.equipWeapon(new weapons_1.Sword());
        return _this;
    }
    return Knight;
}(Troop));
exports.Knight = Knight;
var Archer = /** @class */ (function (_super) {
    __extends(Archer, _super);
    function Archer() {
        var _this = _super.call(this) || this;
        _this.name = 'archer';
        _this.hp = 2;
        _this.speed = 1;
        _this.equipWeapon(new weapons_1.Bow());
        return _this;
    }
    return Archer;
}(Troop));
exports.Archer = Archer;
