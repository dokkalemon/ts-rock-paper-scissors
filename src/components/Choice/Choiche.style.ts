import { styled } from '@mui/material'

export const Container = styled('div')({
    width: '500px',
    height: '500px',
    position: 'relative',
    marginTop: '50px',
})

export const BackImage = styled('div')({
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export const UppPawns = styled('div')(({ pentagon }: { pentagon?: boolean | undefined }) => ({
    height: pentagon ? '35%' : '50%',
    width: '100%',
    display: 'flex',
    justifyContent: pentagon ? 'center' : 'space-between',
    alignItems: 'center',
}))
export const DownPawns = styled('div')(({ pentagon }: { pentagon?: boolean | undefined }) => ({
    height: '50%',
    width: '100%',
    display: 'flex',
    position: 'relative',
    top: pentagon ? '40px' : '',
    padding: pentagon ? '0px 40px' : '',
    justifyContent: pentagon ? 'space-around' : 'center',
    alignItems: pentagon ? 'flex-end' : 'center',
}))

export const MiddlePawns = styled('div')({
    height: '35%',
    width: '100%',
    position: 'absolute',
    left: 0,
    top: 125,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px'
})