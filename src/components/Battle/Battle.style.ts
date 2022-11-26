import { styled } from '@mui/material'

export const Container = styled('div')({
    height: 440,
    width: 900,
    display: 'flex', marginTop: '150px',
})

export const Box = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    width: '50%',

    height: '100%'
})

export const Title = styled('div')({
    display: 'flex',
    height: '10%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
})

export const PawnContainer = styled('div')({
    height: '90%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center', position: 'relative',
})

export const CircleContainer = styled('div')({
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
})

export const Circle = styled('div')({
    height: 225,
    width: 225,
    borderRadius: '100%',
    backgroundColor: 'rgba(0,0,0,0.2)',
})