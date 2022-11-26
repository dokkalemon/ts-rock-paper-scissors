import { Container, DialogContainer } from './Dialog.style'
import { Typography, Stack, IconButton } from '@mui/material'
import { colors } from 'constants/colors'
import iconClose from 'assets/images/icon-close.svg'
import image from 'assets/images/image-rules.svg'
import image_bonus from 'assets/images/image-rules-bonus.svg'
import { IDialogProps } from './Dialog.types'
const Dialog = ({ bonus, closeDialog }: IDialogProps) => {
    return <Container>
        <DialogContainer>
            <Stack flexDirection="row" justifyContent="space-between" sx={{ width: '100%', marginBottom: '30px' }}>
                <Typography sx={{ fontSize: '35px', color: colors.DARK_TEXT }} >RULES</Typography>
                <IconButton onClick={closeDialog}><img src={iconClose} alt="close" /></IconButton>
            </Stack>
            <img src={bonus ? image_bonus : image} alt="rules" />
        </DialogContainer>
    </Container>
}

export { Dialog }