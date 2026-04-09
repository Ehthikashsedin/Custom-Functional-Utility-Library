import { map } from '../src';

test('map doubles numbers', () => {
expect(map(x => x * 2, [1, 2, 3])).toEqual([2, 4, 6]);
});

test('map does not mutate original array', () => {
const arr = [1, 2, 3];
map(x => x * 2, arr);
expect(arr).toEqual([1, 2, 3]);
});
