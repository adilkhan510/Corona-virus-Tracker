import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import img from '../../Images/logo.png'

const useStyles = makeStyles(theme => ({
    toolBar : {
        ...theme.mixins.toolbar 
    },
    img : {
        width : "80px",
        height : "80px"
    },
    nav : {
        backgroundColor : "white"
    }
}))

const Header = (props) =>{
    const classes = useStyles()
    return(
        <>
            <AppBar className={classes.nav}>
                <Toolbar>
                    <img src ={img} className={classes.img}/>
                </Toolbar>
            </AppBar>
            <div className={classes.toolBar} />
        </>

    )
}

export default Header