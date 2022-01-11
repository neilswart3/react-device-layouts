import styled from '@emotion/styled'

export const ShineWrapper = styled.div`
  position: relative;
  padding: 0 0.124%;

  &::before {
    position: absolute;
    top: -10px;
    left: -10px;
    height: calc(100% + 20px);
    width: calc(100% + 20px);
    content: '';
    background: linear-gradient(
      166.86deg,
      rgba(255, 255, 255, 0.26) -0.22%,
      rgba(255, 255, 255, 0.0781197) 47.01%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0.5;
    z-index: 2;
  }
`

export const Shine = styled.div`
  width: 100%;
  height: 96%;
  border-radius: 5%;
  background-color: grey;
  z-index: 1;
  box-shadow: inset 1px 0px 3px rgba(255, 255, 255, 0.2);

  &,
  &::before {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  &::before {
    content: '';
    width: 98%;
    height: 105%;
    border-radius: 10% / 7%;
    background-color: black;
  }
`
