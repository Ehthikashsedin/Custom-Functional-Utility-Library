"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const src_1 = require("../src");
test('map doubles numbers', () => {
    expect((0, src_1.map)(x => x * 2, [1, 2, 3])).toEqual([2, 4, 6]);
});
test('map does not mutate original array', () => {
    const arr = [1, 2, 3];
    (0, src_1.map)(x => x * 2, arr);
    expect(arr).toEqual([1, 2, 3]);
});
