import React,{useState, useEffect } from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';
import Header from './components/Header';
import More from './components/More';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import DescHeader from './components/DescHeader';
import HomeDescriptionBox from './components/HomeDescriptionBox';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import OrientationCon from './components/orientationCon'
import SchedulePage from './components/schedulePage';



const useStyles = makeStyles(theme => ({
  root: {
    minHeight: '100vh',
    backgroundImage: `url("https://images.pexels.com/photos/242236/pexels-photo-242236.jpeg?crop=entropy&cs=srgb&dl=pexels-lorenzo-242236.jpg&fit=crop&fm=jpg&h=4000&w=6000")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',

  },

}));
function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  
  useEffect(() => {
    if(sessionStorage.getItem("Id")){
      setLoginStatus(true);

    }
 
    
  }, [])

  
  const classes = useStyles();
  return (
    <Router>
    <div  className={classes.root}>
      <CssBaseline />
      <Header/>
  
       <Switch>
       <Route path="/SignIn" exact>
            <SignIn/>
          </Route>
         <Route path="/" exact >
         <DescHeader/>
         <HomeDescriptionBox/>
         <More/>
         </Route>
         <Route path="/SignUp" exact>

            <SignUp/>
        
         </Route>
         <Route path="/OrientationCon" exact>
              <OrientationCon/>
         </Route>
         {loginStatus ?  <Route path="/Schedule" exact><SchedulePage/></Route> : null}
       </Switch>

      
      </div>
      </Router>
  );
}

export default App;
