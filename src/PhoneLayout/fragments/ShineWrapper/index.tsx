import * as Styled from './styles'

export interface Props {
  children: React.ReactNode
}

const ShineWrapper: React.FC<Props> = ({ children }) => {
  return (
    <Styled.ShineWrapper className='ShineWrapper'>
      <Styled.Shine className='Shine' />
      {children}
    </Styled.ShineWrapper>
  )
}

export default ShineWrapper
