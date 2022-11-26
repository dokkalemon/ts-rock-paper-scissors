import { styled } from '@mui/material'

export const MainContainer = styled('div')(({ small, big }: { small?: boolean | undefined, big?: boolean | undefined }) => (({
    position: 'relative',
    height: small ? '145px' : big ? '305px' : '205px',
    width: small ? '145px' : big ? '305px' : '205px',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    '&:hover': {
        transform: 'scale(1.05)',
        '& .round-back': {
            boxShadow: '0px 15px 20px rgba(0,0,0, 0.4)'
        }
    }
})))

export const RoundContainer = styled('div')(({ color, small, big }: { color: string, small?: boolean | undefined, big?: boolean | undefined }) => ({
    height: small ? 135 : big ? 295 : 195,
    width: small ? '145px' : big ? '305' : '205px',
    backgroundImage: color, borderRadius: '100%',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 2
}))

export const RoundBack = styled('div')(({ color, small, big }: { color: string, small?: boolean | undefined, big?: boolean | undefined }) => ({
    height: small ? 135 : big ? 295 : 195,
    width: small ? '145px' : big ? '305px' : '205px',
    position: 'absolute',
    bottom: 0,
    backgroundColor: color, borderRadius: '100%',
    transition: 'all 0.2s ease',

    boxShadow: '0px 2px 10px rgba(0,0,0, 0.4)'
}))

export const InnerContainer = styled('div')(({ small, big }: { small?: boolean | undefined, big?: boolean | undefined }) => ({
    height: small ? '110px' : big ? '225px' : '150px',
    width: small ? '110px' : big ? '225px' : '150px',
    borderRadius: '100%',
    position: 'relative',
}))

export const WhiteContainer = styled('div')(({ small, big }: { small?: boolean | undefined, big?: boolean | undefined }) => ({
    height: small ? '100px' : big ? '215px' : '140px',
    width: small ? '110px' : big ? '225px' : '150px',
    backgroundColor: '#fff',
    borderRadius: '100%',
    position: 'relative',
    zIndex: 2,
    top: '10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '& img': {
        height: '50%'
    }
}))

export const Shadow = styled('div')(({ small, big }: { small?: boolean | undefined, big?: boolean | undefined }) => ({
    height: small ? '100px' : big ? '215px' : '140px',
    width: small ? '110px' : big ? '225px' : '150px',
    backgroundColor: '#bbbed1',
    borderRadius: '100%',
    position: 'absolute',
    top: 0
}))