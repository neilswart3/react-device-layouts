import React from 'react'
import { ShineWrapper, Header, Footer, PhoneContent } from './fragments'
import * as Styled from './styles'

export interface Props {
  children: React.ReactNode
  className?: string
}

const PhoneLayout: React.FC<Props> = (props) => {
  const { children, className = 'PhoneLayout' } = props

  return (
    <Styled.PhoneLayout className={className}>
      <div>bla</div>
      <Styled.PhoneFrame className='PhoneFrame'>
        <Styled.PhoneFrameInner className='PhoneFrameInner'>
          <ShineWrapper>
            <Styled.PhoneBody className='PhoneBody'>
              <Header />
              <PhoneContent>{children}</PhoneContent>
              <Footer />
            </Styled.PhoneBody>
          </ShineWrapper>
        </Styled.PhoneFrameInner>
      </Styled.PhoneFrame>
    </Styled.PhoneLayout>
  )
}
export default PhoneLayout
