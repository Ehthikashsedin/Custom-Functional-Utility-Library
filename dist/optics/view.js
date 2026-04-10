"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = view;
function view(lens, obj) {
    let result = obj;
    for (let i = 0; i < lens.keys.length; i++) {
        if (result == null)
            return undefined;
        result = result[lens.keys[i]];
    }
    return result;
}
