"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = find;
function find(arr, arg1, arg2) {
    if (!Array.isArray(arr))
        throw new TypeError("Expected array");
    if (typeof arg1 === "function") {
        for (let i = 0; i < arr.length; i++) {
            if (arg1(arr[i], i))
                return arr[i];
        }
        return undefined;
    }
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (item && item[arg1] === arg2)
            return item;
    }
    return undefined;
}
