import styled from '@emotion/styled'

export const HomeButton = styled.div`
  width: 14.706%;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  padding: 0.858%;
  background: conic-gradient(
    from 90deg at 65.83% 57.5%,
    #0e0f13 -12.12deg,
    #3c4043 14.05deg,
    #787a7e 34.06deg,
    #6b6d74 56.76deg,
    #121115 114.76deg,
    #1a1b20 179.92deg,
    #1c1d22 225.05deg,
    #3b3d41 279.92deg,
    #6d7072 305.96deg,
    #3a3e41 328.32deg,
    #0e0f13 347.88deg,
    #3c4043 374.05deg
  );
  box-shadow: inset 0px -1px 0px rgba(255, 255, 255, 0.05);
`

export const HomeButtonInner = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #030303;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(
      180deg,
      rgba(196, 196, 196, 0.035) 0%,
      rgba(255, 255, 255, 0.07) 100%
    );
  }
`
