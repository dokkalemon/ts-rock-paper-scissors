import { createTheme, responsiveFontSizes } from '@mui/material'


const theme = responsiveFontSizes(
    createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 375,
                md: 960,
                lg: 1366,
                xl: 1600,
            }
        },
        typography: {
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeightMedium: 600,
            fontWeightBold: 700,
        }
    })
)

export default theme;