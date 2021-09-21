import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import AddIcon from '@material-ui/icons/Add';
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

export default function SignIn() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState(''); 
  const [login, setLogin] = React.useState(""); 
  const signin= () => {
   
    Axios.post("http://localhost:1337/login",{
      email: email,
      password: password,
    
    }).then((response) => {
     if(response.data.message){
       setLogin(response.data.message);
     }else{
      sessionStorage.setItem('Id',response.data[0].Id);
      window.location.replace("http://localhost:3000/");


     }
    

    })
 
   
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
          <Avatar sx={{ m: 1, bgcolor: '#FFE061' }}>
                <AddIcon/>
          </Avatar>
          <Typography component="h1" variant="h5">
            Prendre rendez vous 
          </Typography>
          <Typography >
            {login}
          </Typography>
          <Box   noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Adresse Email"
              name="email"
              onChange={event => setEmail(event.target.value)}
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Mot de passe"
              onChange={event => setPassword(event.target.value)}
              type="password"
              id="password"
              autoComplete="current-password"
            />
        
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ color: 'white',
          backgroundColor: '#FFE061', }}
              sx={{ mt: 3, mb: 2 }}
              onClick={signin}
              method="post"
             
            >
              Se connecter
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2"   style={{ color:"black",textDecoration:"none"}}>
                  Mot de passe oublié ?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/SignUp" variant="body2" style={{ color:"black",textDecoration:"none"}}>
                  {"Vous n'avez pas de compte? S'inscrire"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
