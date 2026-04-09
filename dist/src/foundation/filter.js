"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.filter = filter;
function filter(predicate, arr) {
    if (!Array.isArray(arr))
        throw new TypeError("Expected array");
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i], i)) {
            result[result.length] = arr[i];
        }
    }
    return result;
}
