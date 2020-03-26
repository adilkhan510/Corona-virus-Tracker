import React from 'react'
import { Box, makeStyles, Typography } from '@material-ui/core';

const myStyles = makeStyles(theme=>({
    box :{
        width : "95%",
        marginLeft : "10px",
        marginTop : "2.5%",
        marginBottom : "2.5%",
        height : "90%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "row",
    },
    box2 : {
        width : "50%",
        height : "100%",
        justifyContent : "center",
        border : "1px solid black "
      },
}))


const DataBox = (props) => {
    const classes = myStyles();
    return (
        <Box className={classes.box}>
            <Box className={classes.box2}>
                <Typography>HELLO</Typography>
            </Box>
            <Box className = {classes.box2}>
                <Typography variant="h1">
                    {props.country && props.country[0].cases}
                </Typography>
            </Box>
        </Box>
    )
}

export default DataBox
