"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.some = some;
function some(predicate, arr) {
    if (!Array.isArray(arr))
        throw new TypeError("Expected array");
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i))
            return true;
    }
    return false;
}
