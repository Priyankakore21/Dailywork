var final=require('./rotation')

test('for defined array',()=>{
    expect(final.rotate([1,2,3,4,5,6],2,7)).toEqual([3,4,5,6,1,2])
})

test('for undefined array',()=>{
    expect(final.rotate([1,2,3,4,5,6],3)).toEqual([4,5,6,1,2,3])
})