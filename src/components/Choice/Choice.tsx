import { Container, BackImage, UppPawns, MiddlePawns, DownPawns } from './Choiche.style'
import triangle from 'assets/images/bg-triangle.svg'
import pentagon from 'assets/images/bg-pentagon.svg'
import { Pawn } from 'components'
import { IChoiceProps } from './Choice.types'
const Choice = ({ bonus }: IChoiceProps) => {

    if (bonus) {
        return <Container>
            <BackImage>
                <img src={pentagon} alt="triangle" />
            </BackImage>
            <UppPawns pentagon>
                <Pawn element="scissor" small />
            </UppPawns>
            <MiddlePawns>
                <Pawn element="spock" small />
                <Pawn element="paper" small />
            </MiddlePawns>
            <DownPawns pentagon>
                <Pawn element="lizard" small />
                <Pawn element="rock" small />
            </DownPawns>
        </Container>
    }


    return <Container>
        <BackImage>
            <img src={triangle} alt="triangle" />
        </BackImage>
        <UppPawns>
            <Pawn element="paper" />
            <Pawn element="scissor" />
        </UppPawns>
        <DownPawns>
            <Pawn element="rock" />
        </DownPawns>
    </Container>
}

export { Choice }