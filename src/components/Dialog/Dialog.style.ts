import { styled } from '@mui/material'

export const Container = styled('div')({
    height: '100vh',
    width: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    position: 'fixed',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
})

export const DialogContainer = styled('div')({
    backgroundColor: '#fff',
    borderRadius: '10px',
    padding: '30px 40px',
    width: '400px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0px 5px 10px rgba(0,0,0,0.5)'
})

