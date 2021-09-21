import React from 'react'
import {makeStyles} from '@material-ui/core/styles'
import { AppBar,Toolbar,Button} from '@material-ui/core'
import CustomizedMenus from './CustomizedMenus'
import {Link} from 'react-router-dom';



const useStyles = makeStyles((theme)=>({
    root:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
        height:"8vh",
        fontFamily: 'Nunito',

    },
    appBar: {
        background: "none",
        
      
    },
    appbarWrapper: {
         display:"flex",
         justifyContent:"space-between",
    },
    appbarTitle: {
        color: "black",
        fontSize: '1.5em',
        fontWeight: 'bold',
        margin: '0px 0px 0px 0px',
        flexGrow: '1',
    },
    icon: {
        color: "black",
        fontSize: "2rem",

    },
    colorText: {
        color: "#FFE061",
    }
   
    

}))

function Header() {
    const classes = useStyles()
  

    return (
        <div className={classes.root} id="header">
            <AppBar className={classes.appBar} elevation={3}>
                <Toolbar className={classes.appbarWrapper}>
                {/* <h1 className={classes.appbarTitle}>My <span className={classes.colorText}>way</span></h1> */}
                 <Button component={Link} to={'/'}>
                <img src={process.env.PUBLIC_URL+"/assets/W.png"} width="50" alt="logo" />
                </Button>
             <CustomizedMenus/>

                </Toolbar>
            </AppBar>
            
            
        </div>
    )
}

export default Header
