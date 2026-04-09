import { pluck } from '../src';

test('pluck simple key', () => {
const data = [{ id: 1 }, { id: 2 }];
expect(pluck('id', data)).toEqual([1, 2]);
});

test('pluck deep path', () => {
const data = [{ a: { b: 1 } }];
expect(pluck('a.b', data)).toEqual([1]);
});
