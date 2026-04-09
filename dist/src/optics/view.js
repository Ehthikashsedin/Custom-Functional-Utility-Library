"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.view = view;
function view(path, obj) {
    let result = obj;
    for (let i = 0; i < path.length; i++) {
        if (result == null)
            return undefined;
        result = result[path[i]];
    }
    return result;
}
