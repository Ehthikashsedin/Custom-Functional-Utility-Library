"use strict";
const { find } = require('../dist');
describe('find', () => {
    const users = [
        { id: 1, name: 'A' },
        { id: 2, name: 'B' }
    ];
    test('find by predicate', () => {
        expect(find(users, (u) => u.id === 2)).toEqual({ id: 2, name: 'B' });
    });
    test('find by key-value', () => {
        expect(find(users, 'name', 'A')).toEqual({ id: 1, name: 'A' });
    });
    test('returns undefined if not found', () => {
        expect(find(users, (u) => u.id === 3)).toBeUndefined();
    });
});
