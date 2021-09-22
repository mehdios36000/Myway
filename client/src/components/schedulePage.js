import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Box from '@mui/material/Box';
import AddIcon from '@material-ui/icons/Add';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Axios from 'axios';
import { Select } from '@material-ui/core';
import { MenuItem } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';



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
   const [value, setValue] = React.useState([]);
   const [name,setName]=React.useState('');
   const [time,setTime]=React.useState([]);
   const [date,setDate]=React.useState("");



  const handleChangeName = (event) => {
    setName(event.target.value);
    Axios.post("http://localhost:1337/times",{
      name:event.target.value

     
    
    }).then((response) => {
     if(response.data){
      setTime(response.data);
    
      
       
     }else{
     


     }
    

    })




  };
  const handleChangeTime=(event)=>{
    setDate(event.target.value);


  }
  const handleClick=()=>{
    Axios.post("http://localhost:1337/counselor",{
     
    
    }).then((response) => {
     if(response.data){
      setValue(response.data);
    
      
       
     }else{
     


     }
    

    })
  }
  const handleSubmit=()=>{
    Axios.post("http://localhost:1337/schedule",{
      name:name,
      date:date,
    
    }).then((response) => {
     if(response.data.message==="success"){
      
      window.location.replace("http://localhost:3000/");
     
       
    
      
       
     }else{
     


     }
    

    })

  }

 
 

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs" >
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
            {/* <form noValidate> */}
          </Typography>
          <Box   noValidate sx={{ mt: 1 }}>
          <InputLabel id="demo-simple-select-standard-label">Orientateur</InputLabel>
          <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={name}
                onChange={handleChangeName}
                onClick={handleClick}
                label="test"
                fullWidth
            >
                   {value.map((values) =>
        <MenuItem key={values.Id}
                  value={values.Name} >{values.Name}</MenuItem>
          
      )}
      
        
        
            </Select>
            <br/>
            <br/>
            <br/>
        <InputLabel id="demo-simple-select-standard-label">heure du rendez vous </InputLabel> 
        <Select labelId="demo-simple-select-label" id="demo-simple-select" value={date} onChange={handleChangeTime} label="test" fullWidth>
    {time.map((times) =>
        <MenuItem key={times.id}
                  value={times.time} >{times.time}</MenuItem>
          
      )}
      

        </Select>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              style={{ color: 'white',
          backgroundColor: '#FFE061', }}
              sx={{ mt: 3, mb: 2}}
              onClick={handleSubmit}
              method="post"
              
             
            >
             Prendre un rendez vous
            </Button>
            
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
