import { AppBar, Toolbar, Typography,Container, MenuItem, makeStyles,createTheme, ThemeProvider } from '@material-ui/core'
import Select from '@material-ui/core/Select/Select'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { CryptoState } from '../CryptoContext'


const useStyles=makeStyles(()=>({
    title:{
        flex:1,
        color:'gold',
        fontFamily:'Montserrat',
        fontWeight:'bold',
        cursor:'pointer'
    }
}))
function Header() {
    const classes=useStyles()
    const navigate=useNavigate()
    const {currency,setCurrency}=CryptoState()
    console.log(currency)
    const darkTheme = createTheme({
        palette: {
            primary:{
                main:"#fff",
            },
          type: 'dark',
        },
      });
  return (
    <ThemeProvider theme={darkTheme}>
   <AppBar color='transparent' position='static'>
    <Container>
        <Toolbar>
            <Typography className={classes.title} variant='h6' onClick={()=>navigate('/')}>Crypto Hunter</Typography>
            <Select variant='outlined' style={{width:100,marginRight:15,height:40,color:'black'}}  
            value={currency} onChange={(e)=>setCurrency(e.target.value)}>
                <MenuItem value={'USD'}>USD</MenuItem>
                <MenuItem value={'INR'}>INR</MenuItem>
            </Select>
        </Toolbar>
    </Container>
   </AppBar>
   </ThemeProvider>
  )
}

export default Header