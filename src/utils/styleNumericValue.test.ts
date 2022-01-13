import styleNumericValue from './styleNumericValue'

describe('styleNumericValue', () => {
  it('should return the correct value if a string is passed', () => {
    expect(styleNumericValue('7rem')).toBe('7rem')
  })

  it('should return a string with px appended if a number is passed', () => {
    expect(styleNumericValue(2)).toBe('2px')
  })
})
