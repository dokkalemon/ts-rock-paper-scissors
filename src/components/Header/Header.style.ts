import { styled } from '@mui/material'
import { colors } from 'constants/colors'
export const Container = styled('div')({
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '20px',
})

export const BoxContainer = styled('div')({
    padding: '20px',
    width: '800px',
    height: '170px',
    border: `3px solid ${colors.HEADER_OUTLINE}`,
    borderRadius: '15px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '& img': {
        height: '90%'
    }
})

export const ScoreContainer = styled('div')({
    height: '100%',
    width: '150px',
    backgroundColor: 'white',
    borderRadius: '10px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '22px 0px'

})