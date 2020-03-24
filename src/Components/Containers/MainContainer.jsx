import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, Box } from '@material-ui/core'
import axios from 'axios'

const useStyles= makeStyles(theme=>({
  container : {
    width : "75vw",
    height : "75vh",
    backgroundColor : theme.palette.primary.dark,
    ...theme.centerItems,
    marginTop : "20px",
    '& .text' : {
      fontSize : "36px",
      textAlign : "center"
    }
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
  },
  box2 : {
    width : "50%",
    height : "100%",
    justifyContent : "center",
    border : "1px solid black "
  },
  button : {
    width : "95%",
    textAlign : "center"
  },
  text : {
    margin : "200px 200px"
  },
  menuItem : {
    width : "200px"
  }
}))

export default function SimpleContainer() {
  const [anchorEl, setAnchorEl] = useState(null)
  const [data, setData] = useState("")
  const classes = useStyles();
  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = ()=>{
    setAnchorEl(null)
  }
  useEffect(()=>{
    axios.get("https://coronavirus-tracker-api.herokuapp.com/v2/locations")
    .then((response)=>{
      console.log(response)
    }).catch(
      error => {
        console.log(error)
      }
    )
  })
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg" className={classes.container}>
        <Box className={classes.button}>
          <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleOpen}>
            Select a country \0/
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem className={classes.menuItem} onClick={handleClose}>Profile</MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>My account</MenuItem>
            <MenuItem className={classes.menuItem} onClick={handleClose}>Logout</MenuItem>
          
          </Menu>
        </Box>
        <Box className={classes.box}>
          <Box className={classes.box2}>
            <Typography className = {classes.text}>HELLO</Typography>
          </Box>
          <Box className = {classes.box2}>
            <Typography className = {classes.text}>
            </Typography>
          </Box>
        </Box>
      </Container>
    </React.Fragment>
  );
}