import styled from '@emotion/styled'
import { rgba } from 'polished'

export const PhoneSpeakerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100%;
  width: 100%;
  opacity: 0.6;
`

export const PhoneSensor = styled.div`
  width: 2.623%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  background-color: #1a1717;
  padding: 0.264%;

  &::before {
    content: '';
    display: block;
    height: 100%;
    border-radius: 50%;
    background: #151313;
    box-shadow: inset 0px 2px 3px rgba(0, 0, 0, 0.5);
  }
`

export const PhoneFrontCameraWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  width: 43.514%;
  padding: 4.589% 0;
`

export const PhoneSpeaker = styled.div`
  width: 48.08%;
  aspect-ratio: 1 / 0.098;
  padding: 0.605%;
  background-color: white;
  border-radius: 5%/50%;
  background: radial-gradient(
      100% 100% at 100.75% 131.35%,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.0001) 100%
    ),
    linear-gradient(360deg, #222222 0%, #111111 100%);

  &::before {
    border-radius: 4%/50%;
    background-color: red;
    content: '';
    display: block;
    height: 100%;

    background-color: ${rgba('#202020', 0.9)};
    background-image: linear-gradient(
        45deg,
        #202020 25%,
        transparent 25%,
        transparent 75%,
        #202020 75%
      ),
      linear-gradient(
        45deg,
        #202020 25%,
        transparent 25%,
        transparent 75%,
        #202020 75%
      );
    background-size: 6px 6px;
    background-position: 0 0, 3px 3px;
    box-shadow: inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
`
