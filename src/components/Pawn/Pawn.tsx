import { MainContainer, RoundContainer, Shadow, WhiteContainer, InnerContainer, RoundBack } from './Pawn.style'
import paper from 'assets/images/icon-paper.svg'
import scissors from 'assets/images/icon-scissors.svg'
import rock from 'assets/images/icon-rock.svg'
import spock from 'assets/images/icon-spock.svg'
import lizard from 'assets/images/icon-lizard.svg'
import { gradients } from 'constants/colors'
import { IPawnProps } from './Paws.types'

const colorPawn = {
    scissor: {
        gradient: gradients.SCISSOR,
        colorDark: '#c66b1c',
        icon: scissors
    },
    paper: {
        gradient: gradients.PAPER,
        colorDark: '#2946bc',
        icon: paper
    },
    rock: {
        gradient: gradients.ROCK,
        colorDark: '#971531',
        icon: rock,
    },
    spock: {
        gradient: gradients.CYAN,
        colorDark: '#2b8ead',
        icon: spock,
    },
    lizard: {
        gradient: gradients.LIZARD,
        colorDark: '#5f37aa',
        icon: lizard,
    },

}

const Pawn = ({ element, small, big = true }: IPawnProps) => {
    return <MainContainer small={small} big={big}>
        <RoundContainer small={small} big={big} color={colorPawn[element].gradient}>
            <InnerContainer small={small} big={big}>
                <WhiteContainer small={small} big={big}>
                    <img src={colorPawn[element].icon} alt="paper" />
                </WhiteContainer>
                <Shadow small={small} big={big} />
            </InnerContainer>
        </RoundContainer>
        <RoundBack small={small} big={big} className="round-back" color={colorPawn[element].colorDark} />
    </MainContainer>
}

export { Pawn }