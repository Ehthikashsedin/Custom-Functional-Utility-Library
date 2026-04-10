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
function pluck(keyOrPathOrKeys, arr) {
    if (!Array.isArray(arr))
        throw new TypeError("Expected array");
    const result = new Array(arr.length);
    for (let i = 0; i < arr.length; i++) {
        const item = arr[i];
        if (typeof keyOrPathOrKeys === "string") {
            result[i] = get(item, keyOrPathOrKeys);
        }
        else {
            const obj = {};
            for (let j = 0; j < keyOrPathOrKeys.length; j++) {
                const key = keyOrPathOrKeys[j];
                obj[key] = get(item, key);
            }
            result[i] = obj;
        }
    }
    return result;
}
