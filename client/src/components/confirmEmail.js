import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';



function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Alami Idrissi Mehdi
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();

export default function ConfirmEmail() {
  const [confirm, setConfirm] = React.useState('');
  const [check,setCheck] = React.useState("");
  const confirmation= () => {
  const email=sessionStorage.getItem('Email');
    Axios.post("http://localhost:1337/confirm",{
      confirm:confirm,
      Email:email
    
    }).then((response) => {
     if(response.data.message==="code de verification incorrect"){
       setCheck(response.data.message);
       
     }
     setCheck(response.data.message);

   
    
    })
    if(check==="code de verification correct"){
      sessionStorage.setItem('confirm',"yes");
      window.location.href="/";
    }

    
  };

 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: '#18B9EC' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{textAlign:"center"}}>
                Entrez le code de confirmation envoyé par email
        </Typography>
          <Typography >
            {check}
          </Typography>
          <Box   noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="code de confirmation"
              name="confirmation"
              onChange={event => setConfirm(event.target.value)}
              autoComplete="email"
              autoFocus
            />
           
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ color: 'white',
          backgroundColor: '#18B9EC', }}
              sx={{ mt: 3, mb: 2 }}
              onClick={confirmation}
              method="post"
             
            >
              Confirmer
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
