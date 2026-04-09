"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduce = reduce;
function reduce(reducer, initial, arr) {
    if (!Array.isArray(arr))
        throw new TypeError("Expected array");
    let acc = initial;
    for (let i = 0; i < arr.length; i++) {
        acc = reducer(acc, arr[i], i);
    }
    return acc;
}
