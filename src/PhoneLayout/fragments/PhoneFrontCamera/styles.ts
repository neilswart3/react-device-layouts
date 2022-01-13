import styled from '@emotion/styled'
import { rgba } from 'polished'
import { colors } from '../../../utils'

export const PhoneFrontCamera = styled.div`
  position: absolute;
  left: 0;
  width: 8.435%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  padding: 0.605%;
  background: linear-gradient(
      135.5deg,
      #000000 16.83%,
      rgba(0, 0, 0, 0.0001) 50.35%
    ),
    #181818;
`

export const PhoneFrontCameraInner = styled.div`
  height: 100%;
  border-radius: 50%;
  padding: 20.85%;
  background: linear-gradient(
      132.1deg,
      rgba(0, 0, 0, 0.2) 25.08%,
      rgba(0, 0, 0, 0.0001) 50.66%,
      rgba(180, 180, 180, 0.5) 117.91%
    ),
    linear-gradient(315deg, #2e3235 -11.46%, #232426 27.85%, #1a1a1a 88.54%);
`

export const PhoneFrontCameraLens = styled.div`
  height: 100%;
  border-radius: 50%;
  padding: 28.6%;
  background: linear-gradient(
      180deg,
      rgba(82, 0, 255, 0.0001) 0%,
      rgba(184, 0, 255, 0.3) 100%
    ),
    radial-gradient(
      23.08% 29.11% at 100% 66.9%,
      #1c86ff 0%,
      rgba(10, 157, 255, 0.371533) 39.01%,
      rgba(0, 171, 255, 0.0001) 100%
    ),
    radial-gradient(
      21.16% 21.16% at 14.14% 40.42%,
      rgba(255, 255, 255, 0.5) 0%,
      rgba(255, 255, 255, 0.0001) 100%
    ),
    radial-gradient(
      29.43% 21.32% at 62.44% 22.08%,
      rgba(44, 132, 253, 0.6) 0%,
      rgba(76, 133, 173, 6e-5) 100%
    ),
    radial-gradient(
      103.44% 58.43% at 54.89% 50%,
      #031749 0%,
      rgba(1, 13, 30, 0.13912) 85.66%,
      rgba(1, 11, 23, 0.0001) 100%
    ),
    linear-gradient(180deg, #062f90 0%, #012576 100%);
  border: 0.5px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0px 1px 2px rgba(97, 97, 97, 0.5),
    inset 0px 0px 3px rgba(0, 0, 0, 0.6),
    inset 0px 1px 5px rgba(255, 255, 255, 0.5);

  &::before {
    content: '';
    border-radius: 50%;
    display: block;
    height: 100%;
    background-color: ${rgba(colors.white, 0.2)};
    opacity: 0.5;
  }
`
