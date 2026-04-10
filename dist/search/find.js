"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.find = find;
function find(arr, arg1, arg2) {
    if (!Array.isArray(arr))
        throw new TypeError("Expected array");
    // Dispatcher Logic
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        // 1. Predicate Search
        if (typeof arg1 === "function") {
            if (arg1(item, i))
                return item;
        }
        // 2. Key-Value Search
        else if (typeof arg1 === "string" && arg2 !== undefined) {
            if (item && item[arg1] === arg2)
                return item;
        }
        // 3. Object Matcher Search
        else if (typeof arg1 === "object" && arg1 !== null && !Array.isArray(arg1)) {
            let isMatch = true;
            for (const key in arg1) {
                if (item[key] !== arg1[key]) {
                    isMatch = false;
                    break;
                }
            }
            if (isMatch)
                return item;
        }
    }
    return undefined;
}
