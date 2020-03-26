import React, {useState, useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { makeStyles, Box } from '@material-ui/core'
import axios from 'axios'
import useData from '../Hooks/useData'
import DataBox from './Box'

const useStyles= makeStyles(theme=>({
  container : {
    width : "85vw",
    height : "85vh",
    backgroundColor : theme.palette.primary.dark,
    ...theme.centerItems,
    marginTop : "20px",
    '& .text' : {
      fontSize : "36px",
      textAlign : "center"
    }
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
  const [anchorEl, setAnchorEl] = useState("USA");
  const [country, setCountry] = useState(null);
  const [data, setData] = useState(null)
  const classes = useStyles();
  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = (event)=>{

    const countrydata = data.filter(d=>{
      if(event.target.innerText === d.country){
        return d
      }
    })
    setCountry(countrydata)
    console.log(countrydata)
    setAnchorEl(null);
  }

  const getData = async () =>{
    try{
      const resp = await axios.get("https://coronavirus-19-api.herokuapp.com/countries")
      if(resp.status === 200) {
        console.log(resp.data, "recieved response");
        setData(resp.data)
      }else{
        console.log("Failed request");
      }
    } catch {
      console.log("Failed request, caught")
    }
  }
  useEffect(()=>{
    getData();
  },[])


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
            {data && data.map((d, index)=>{
              return(
                <MenuItem key={index} className={classes.menuItem} onClick={handleClose}>{d.country}</MenuItem>
              )
            })}
          
          </Menu>
          <DataBox country={country} />
        </Box>
      </Container>
    </React.Fragment>
  );
}