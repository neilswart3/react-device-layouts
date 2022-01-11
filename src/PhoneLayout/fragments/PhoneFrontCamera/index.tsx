import * as Styled from './styles'

const PhoneFrontCamera: React.FC = () => (
  <Styled.PhoneFrontCamera className='PhoneFrontCamera'>
    <Styled.PhoneFrontCameraInner className='PhoneFrontCameraInner'>
      <Styled.PhoneFrontCameraLens className='PhoneFrontCameraLens' />
    </Styled.PhoneFrontCameraInner>
  </Styled.PhoneFrontCamera>
)

export default PhoneFrontCamera
