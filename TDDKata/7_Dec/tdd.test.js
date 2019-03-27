var obj = require('./tdd')

test('for 1', () => {
    expect(obj.getFcat(1)).toBe(null)
})

test('for 2', () => {
    expect(obj.getFcat(2)).toEqual([2])
})

test('for 3', () => {
    expect(obj.getFcat(3)).toEqual([3])
})

test('for 4', () => {
    expect(obj.getFcat(4)).toEqual([2, 2])
})

test('for 8', () => {
    expect(obj.getFcat(8)).toEqual([2, 2, 2])
})

test('for 9', () => {
    expect(obj.getFcat(9)).toEqual([3, 3])
})

test('for any prime no', () => {
    expect(obj.getFcat(15)).toEqual([3, 5])
})