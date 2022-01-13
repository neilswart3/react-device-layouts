import React from 'react'
import * as Styled from './styles'

export interface Props {
  children: React.ReactNode
}

const PhoneContent: React.FC<Props> = ({ children }) => {
  return (
    <Styled.PhoneContentWrapper className='PhoneContentWrapper'>
      <Styled.PhoneContent className='PhoneContent'>
        <Styled.PhoneContentInner className='PhoneContentInner'>
          {children}
        </Styled.PhoneContentInner>
      </Styled.PhoneContent>
    </Styled.PhoneContentWrapper>
  )
}

export default PhoneContent
