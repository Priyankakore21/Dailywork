var obj=require('./tdd')

test('1st',()=>{
    expect(obj.getfact(1)).toBe(null)
})

test('2nd',()=>{
    expect(obj.getfact(2)).toEqual([2])
})

test('3',()=>{
    expect(obj.getfact(3)).toEqual([3])
})

test('4',()=>{
    expect(obj.getfact(4)).toEqual([2,2])
})

test('5',()=>{
    expect(obj.getfact(8)).toEqual([2,2,2])
})

test('6',()=>{
    expect(obj.getfact(9)).toEqual([3,3])
})

test('7',()=>{
    expect(obj.getfact(12)).toEqual([2,2,3])
})