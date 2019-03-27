var obj = require('./primefact');

test('for 1 and null', () => {
    expect(obj.getFact(1)).toBe(null)
})
test('for 2 and 2', () => {
    expect(obj.getFact(2)).toEqual([2])
})
test('for 3 and 3', () => {
    expect(obj.getFact(3)).toEqual([3])
})
test('for 4 and 2,2', () => {
    expect(obj.getFact(4)).toEqual([2, 2])
})
test('for 8 and 2,2,2', () => {
    expect(obj.getFact(8)).toEqual([2, 2, 2])
})
test('for 9 and 3,3', () => {
    expect(obj.getFact(9)).toEqual([3, 3])
})
test('for 12 and 2,2,3', () => {
    expect(obj.getFact(12)).toEqual([2, 2, 3])
})