"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceRight = reduceRight;
function reduceRight(reducer, initial, arr) {
    if (!Array.isArray(arr))
        throw new TypeError("Expected array");
    let acc = initial;
    for (let i = arr.length - 1; i >= 0; i--) {
        acc = reducer(acc, arr[i], i);
    }
    return acc;
}
