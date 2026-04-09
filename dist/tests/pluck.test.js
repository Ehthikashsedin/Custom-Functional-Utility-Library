"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test('pluck simple key', () => {
    const data = [{ id: 1 }, { id: 2 }];
    expect((0, src_1.pluck)('id', data)).toEqual([1, 2]);
});
test('pluck deep path', () => {
    const data = [{ a: { b: 1 } }];
    expect((0, src_1.pluck)('a.b', data)).toEqual([1]);
});
