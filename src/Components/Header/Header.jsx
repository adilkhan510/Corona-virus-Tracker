import React from 'react';
import { AppBar, Toolbar } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
    toolBar : {
        ...theme.mixins.toolbar 
    }
}))

const Header = (props) =>{
    const classes = useStyles()
    return(
        <>
            <AppBar>
                <Toolbar>

                </Toolbar>
            </AppBar>
            <div className={classes.toolBar} />
        </>

    )
}

export default Header