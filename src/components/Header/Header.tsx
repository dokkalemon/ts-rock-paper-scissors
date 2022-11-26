import { Container, BoxContainer, ScoreContainer } from './Header.style'
import logo from 'assets/images/logo.svg'
import logo_bonus from 'assets/images/logo-bonus.svg'
import { Typography } from '@mui/material'
import { colors } from 'constants/colors'
import { IHeaderProps } from './Header.types'

const Header = ({ bonus }: IHeaderProps) => {
    return <Container>
        <BoxContainer>
            <img src={bonus ? logo_bonus : logo} alt="logo" />
            <ScoreContainer>
                <Typography sx={{ fontSize: '16px', letterSpacing: '2px', color: colors.SCORE_TEXT, margin: 0, }}>SCORE</Typography>
                <Typography sx={{ fontSize: '65px', color: colors.DARK_TEXT, margin: 0, lineHeight: '50px' }}>13</Typography>
            </ScoreContainer>
        </BoxContainer>
    </Container>
}

export { Header }