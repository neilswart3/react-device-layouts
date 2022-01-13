import { dimensionSpace } from '.'

describe('dimensionSpace', () => {
  it('it should return the expected value', () => {
    expect(dimensionSpace(1)).toBe(1.79)
    expect(dimensionSpace(2)).toBe(3.58)
  })
})
