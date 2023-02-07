"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomElement = void 0;
function getRandomElement(arr) {
    const aleatorio = Math.floor(Math.random() * (arr.length - 1));
    return arr[aleatorio];
}
exports.getRandomElement = getRandomElement;
