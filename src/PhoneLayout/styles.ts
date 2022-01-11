import styled from '@emotion/styled'
import { rgba } from 'polished'
import { colors, dimensionSpace } from './helpers'

export const PhoneLayout = styled.div`
  background: linear-gradient(
      339.18deg,
      rgba(0, 0, 0, 0.3) 50.53%,
      rgba(0, 0, 0, 0.0001) 100%
    ),
    #37363b;

  padding: 1.172% 1.523%;
  border-radius: ${dimensionSpace(7)}% / 7%;
`

export const PhoneFrame = styled.div`
  background-color: ${colors.black};
  border: 1px solid ${rgba(colors.black, 0.1)};
  border-radius: ${dimensionSpace(6.5)}% / 6.5%;
  padding: 0.484%;
  background: linear-gradient(180deg, #212121 0%, #1a1a1b 100%);
`

export const PhoneFrameInner = styled.div`
  position: relative;
  background-color: ${colors.black};
  border-radius: ${dimensionSpace(6.5)}% / 6.5%;
  overflow: hidden;
`

export const PhoneBody = styled.div`
  display: grid;
  grid-template-rows: 1fr 7.529fr 1fr;
`
