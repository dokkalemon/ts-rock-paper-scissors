import { Container } from './Wrapper.style'
import { IWrapperProps } from './Wrapper.types'

const Wrapper = ({ children }: IWrapperProps) => {
    return <Container>{children}</Container>
}

export { Wrapper }