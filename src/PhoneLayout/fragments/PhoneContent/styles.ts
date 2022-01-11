import styled from '@emotion/styled'
import { colors, dimensionSpace } from '../../helpers'

export const PhoneContentWrapper = styled.div`
  padding: 0 3.668%;
`

export const PhoneContent = styled.div`
  background-color: #0d0a00;
  padding: 0.528%;
  border-radius: ${dimensionSpace(0.5)}% / 0.5%;
`

export const PhoneContentInner = styled.div`
  background-color: ${colors.white};
  position: relative;
  aspect-ratio: 1 / 1.79;
  width: 100%;
  z-index: 10;
`
