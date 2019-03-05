"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const pi_1 = __importDefault(require("./pi"));
function add(a, b) {
    return a + b;
}
function sumOfArray(array) {
    let sum;
    sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
}
exports.sumOfArray = sumOfArray;
function circleArea(radius) {
    return pi_1.default * Math.pow(radius, 2);
}
exports.circleArea = circleArea;
