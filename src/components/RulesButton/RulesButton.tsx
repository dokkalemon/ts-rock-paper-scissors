import { Container, StyledButton } from './RulesButton.style'
import { IRulesButtonProps } from './RulesButton.types'
const RulesButton = ({ onClick }: IRulesButtonProps) => {
    return <Container>
        <StyledButton onClick={onClick}>Rules</StyledButton>
    </Container>
}

export { RulesButton }