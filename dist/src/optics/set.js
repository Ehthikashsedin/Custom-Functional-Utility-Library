"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.set = set;
function set(path, value, obj) {
    if (path.length === 0)
        return value;
    const [key, ...rest] = path;
    return {
        ...obj,
        [key]: rest.length
            ? set(rest, value, obj[key] || {})
            : value
    };
}
