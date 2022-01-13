const styleNumericValue = (value: string | number): string => {
  if (typeof value === 'number') return `${value}px`

  return value
}

export default styleNumericValue
