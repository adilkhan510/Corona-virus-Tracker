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
    },
    box : {
        width : "95%",
        marginLeft : "10px",
        marginTop : "2.5%",
        marginBottom : "2.5%",
        height : "90%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "row",
    }
})

