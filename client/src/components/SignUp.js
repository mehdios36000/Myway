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
    const Emailref = React.useRef();
    const Passwordref = React.useRef();
    const nameref = React.useRef();
    const Dateref = React.useRef();
    const Schoolref = React.useRef();
    const Graderef= React.useRef();
    const Cityref = React.useRef();


  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // eslint-disable-next-line no-console
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  ref={nameref}
                  label="nom complet"
                  name="lastName"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  ref={Emailref}
                  label="Adresse email"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                    <TextField
                    id="date"
                    ref={Dateref}
                    fullWidth
                    label="Date de naissance"
                    type="date"
                    name="date"
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
                  ref={Schoolref}
                  label="Nom de l'etablissement"
                  name="School"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Grade"
                  ref={Graderef}
                  label="Niveau d'etude"
                  name="Grade"
                  autoComplete="lname"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="City"
                  ref={Cityref}
                  label="Ville"
                  name="City"
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
                  ref={Passwordref}
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