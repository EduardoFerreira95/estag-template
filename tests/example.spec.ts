/// <reference types="jest" />

describe('Test Example', () => {
  it('should be able to correctly match two variables', () => {
    const values = [1,2,3,4,5,6,7,8,9,10]
    const even = values.filter(element => !(element % 2))

    expect(even).toStrictEqual([2, 4, 6, 8, 10])
  })
})