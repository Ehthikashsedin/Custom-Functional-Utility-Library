"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluck = pluck;
function get(obj, path) {
    const keys = path.split(".");
    let result = obj;
    for (let i = 0; i < keys.length; i++) {
        if (result == null)
            return undefined;
        result = result[keys[i]];
    }
    return result;
}
function pluck(keyOrKeys, arr) {
    if (!Array.isArray(arr))
        throw new TypeError("Expected array");
    const result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (typeof keyOrKeys === "string") {
            result[i] = get(item, keyOrKeys);
        }
        else {
            const obj = {};
            for (let j = 0; j < keyOrKeys.length; j++) {
                const key = keyOrKeys[j];
                obj[key] = get(item, key);
            }
            result[i] = obj;
        }
    }
    return result;
}
