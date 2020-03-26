import React from 'react'
import SimpleTable from './DataTable'
import { Box, makeStyles, Typography } from '@material-ui/core';
import Chart from './Chart'

const myStyles = makeStyles(theme=>({
    box :{
        width : "85%",
        marginTop : "2.5%",
        marginBottom : "2.5%",
        marginLeft : "100px",
        height : "85%",
        display : "flex",
        justifyContent : "center",
        alignItems : "center",
        flexDirection : "column",
    },
    box2 : {
        width : "80%",
        height : "80%",
      },
}))


const DataBox = (props) => {
    const classes = myStyles();
    return (
        <Box className={classes.box}>
            <Box className = {classes.box2}>
                <SimpleTable data= {props.data}/>
            </Box>
            <Box className={classes.box2}>
                <Chart data = {props.data} />
            </Box>
        </Box>
    )
}

export default DataBox
