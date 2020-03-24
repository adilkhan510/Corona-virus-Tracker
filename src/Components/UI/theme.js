import { createMuiTheme } from '@material-ui/core/styles'

const green = "#90EFEF"
const lightGreen = "#AFCCC7"

export default createMuiTheme({
    palette: {
        primary : {
            main : `${green}`
        },
        secondary : {
            main : `${lightGreen}`
        }
    },
    centerItems : {
        display : "flex",
        flexDirection : "column",
        justifyContent : "space-evenly",
        alightItems : "center"
    }
})

