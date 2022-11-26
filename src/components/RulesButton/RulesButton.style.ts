import { styled, Button } from '@mui/material'
import { colors } from 'constants/colors'
export const Container = styled('div')({
    position: 'absolute',
    bottom: '30px',
    right: '30px',
})

export const StyledButton = styled(Button)({
    border: `2px solid ${colors.HEADER_OUTLINE}`,
    fontSize: '18px',
    letterSpacing: '2px',
    padding: '5px 40px',
    borderRadius: '10px',
    color: 'white',
})