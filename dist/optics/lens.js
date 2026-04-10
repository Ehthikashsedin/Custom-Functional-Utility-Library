"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lens = lens;
function lens(path) {
    return { path, keys: path.split(".") };
}
