export const colors = {
  greyDark: '#181818',
  white: '#fff',
  black: '#000',
}

export const styleNumericValue = (value: string | number): string => {
  if (typeof value === 'number') return `${value}px`

  return value
}

export const dimensionSpace = (value: number): number => value * 1.79
