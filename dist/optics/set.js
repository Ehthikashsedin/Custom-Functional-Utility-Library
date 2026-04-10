"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = set;
function setInPath(keys, value, obj) {
    if (keys.length === 0)
        return value;
    const [key, ...rest] = keys;
    return {
        ...obj,
        [key]: rest.length
            ? setInPath(rest, value, obj ? obj[key] : {})
            : value
    };
}
function set(lens, value, obj) {
    return setInPath(lens.keys, value, obj);
}
