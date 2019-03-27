var result=require('./calculator')

describe('For Addition', () => {
test('for two defined parameters',()=>{
  expect(result.add(1,2)).toBe(3)
})

test('for 1st undefeined parameter',()=>{
    expect(result.add(undefined,2)).toBe(2)
})

test('for 2nd undefeined parameter',()=>{
    expect(result.add(1,undefined)).toBe(1)
})

test('for both undefined parameters',()=>{
    expect(result.add(undefined,undefined)).toBe(undefined)
})
})

describe('for multiplication ',()=>{
    test('multiplication of two defined numbers',()=>{
        expect(result.mult(2,3)).toBe(6)
    })
})

describe('for division ',()=>{
    test('division of two defined numbers',()=>{
        expect(result.div(4,2)).toBe(2)
    })

    test('for 2nd parameter=0',()=>{
        expect(result.div(4,0)).toBe(undefined)
    })
})