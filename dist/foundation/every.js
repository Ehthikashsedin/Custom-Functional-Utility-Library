"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.every = every;
function every(predicate, arr) {
    if (!Array.isArray(arr))
        throw new TypeError("Expected array");
    for (let i = 0; i < arr.length; i++) {
        if (!predicate(arr[i], i))
            return false;
    }
    return true;
}
