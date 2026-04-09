"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = map;
function map(fn, arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Expected an array");
    }
    const result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        result[i] = fn(arr[i], i);
    }
    return result;
}
