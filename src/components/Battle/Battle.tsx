import { Container, Box, Title, PawnContainer, Circle, CircleContainer } from './Battle.style'
import { Typography } from '@mui/material'
import { Pawn } from 'components'
const Battle = () => {
    return <Container>
        <Box>
            <Title>
                <Typography sx={{ color: '#fff', fontSize: '23px', letterSpacing: '5px' }}>
                    YOU PICKED
                </Typography>
            </Title>
            <PawnContainer>
                <CircleContainer>
                    <Circle />
                </CircleContainer>
                <Pawn element="scissor" big />
            </PawnContainer>
        </Box>
        <Box>
            <Title>
                <Typography sx={{ color: '#fff', fontSize: '23px', letterSpacing: '5px' }}>
                    THE HOUSE PICKED
                </Typography>
            </Title>
            <PawnContainer>
                <CircleContainer>
                    <Circle />
                </CircleContainer>

            </PawnContainer>
        </Box>
    </Container>
}

export { Battle }