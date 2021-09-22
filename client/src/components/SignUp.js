import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
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

export default function SignUp() {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [name, setName] = React.useState('');
  const [city, setCity] = React.useState('');
  const [date, setDate] = React.useState(new Date());
  const [School, setSchool] = React.useState('');
  const [Grade, setGrade] = React.useState('');
  const[registert,setRegistert]=React.useState("");



  const register= () => {
    const random = Math.floor(Math.random() * 1000000);
    Axios.post("http://localhost:1337/register",{
      email: email,
      password: password,
      name: name,
      city: city,
      date: date,
      school: School,
      grade: Grade,
      verification: random
    }).then((response) => {
      if(response.data.message==="l'utilisateur existe deja"){
        setRegistert(response.data.message);
      }
    })
     if(registert===""){
      window.location.replace("http://localhost:3000/SignIn");
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
          <Avatar sx={{ m: 1, bgcolor: '#FFE061' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            S'inscrire
          </Typography>
          <Typography >
            {registert}
          </Typography>
          <Typography component="h1" variant="h5" className="error">
            remplissez tous les champs pour activer le bouton s'inscrire
          </Typography>
         
          <Box    noValidate  sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="nom complet"
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  fullWidth
                  id="email"
                  label="Adresse email"
                  type="email"
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                  required
                />
              </Grid>
              <Grid item xs={12}>
                    <TextField
                    id="date"
                    fullWidth
                    label="Date de naissance"
                    type="date"
                    name="date"
                    onChange={(e) => setDate(e.target.value)}
                    InputLabelProps={{
                        shrink: true,
                       }}
            />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="School"
                  label="Nom de l'etablissement"
                  name="School"
                  onChange={(e) => setSchool(e.target.value)}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Grade"
                  label="Niveau d'etude"
                  name="Grade"
                  onChange={(e) => setGrade(e.target.value)}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="City"
                  label="Ville"
                  name="City"
                  onChange={(e) => setCity(e.target.value)}
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mot de passe"
                  type="password"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                
              </Grid>
            </Grid>
           

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              style={{ color: 'white',
          backgroundColor: '#FFE061', }}
     
          disabled={!(email.includes("@") && password && name && city && date && School && Grade)}
              onClick={register}
            >
              S'inscrire
            </Button>


            
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/SignIn" variant="body2" style={{ color:"black",textDecoration:"none"}}>
                  Vous avez déjà un compte ? Se connecter
                </Link>
              </Grid>
            </Grid>
          </Box>
       
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}