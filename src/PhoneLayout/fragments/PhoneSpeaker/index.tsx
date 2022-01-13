import React from 'react'
import { PhoneFrontCamera } from '..'
import * as Styled from './styles'

const PhoneSpeaker: React.FC = () => (
  <Styled.PhoneSpeakerWrapper className='PhoneSpeakerWrapper'>
    <Styled.PhoneSensor className='PhoneSensor' />
    <Styled.PhoneFrontCameraWrapper className='PhoneFrontCameraWrapper'>
      <PhoneFrontCamera />
      <Styled.PhoneSpeaker className='PhoneSpeaker' />
    </Styled.PhoneFrontCameraWrapper>
  </Styled.PhoneSpeakerWrapper>
)

export default PhoneSpeaker
