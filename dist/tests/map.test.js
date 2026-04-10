"use strict";
const { map } = require('../dist');
describe('map', () => {
    test('maps values correctly', () => {
        expect(map((x) => x * 2, [1, 2, 3])).toEqual([2, 4, 6]);
    });
    test('handles empty array', () => {
        expect(map((x) => x * 2, [])).toEqual([]);
    });
    test('does not mutate original array', () => {
        const arr = [1, 2, 3];
        map((x) => x * 2, arr);
        expect(arr).toEqual([1, 2, 3]);
    });
});
