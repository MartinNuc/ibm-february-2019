"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const people = [
    {
        id: 1,
        name: 'Peter'
    },
    {
        id: 2,
        name: 'Rachel'
    },
    {
        id: 3,
        name: 'John'
    },
    {
        id: 4,
        name: 'Tim'
    },
    {
        id: 5,
        name: 'Zed'
    }
];
let tim = lodash_1.default.find(people, (item) => item.id === 3);
//let tim = lodash.find(people, {id: 4});
console.log(tim);
// {
//   id: 4,
//   name: 'Tim'
// },
