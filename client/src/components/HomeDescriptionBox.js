import React from 'react'
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

    container:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',

    },
    title: {
        fontFamily: 'Abel',
        fontSize: '2.5rem',
    },
    description: {
        fontFamily: 'Abel',
        fontSize: '1.5rem',
        [theme.breakpoints.down('md')]: {
            textAlign: 'center',
        }
    },








}));

const HomeDescriptionBox = () => {
    const classes= useStyles();
    return (
        <div >
            <div className={classes.container}>
            <h1 className={classes.title}>Description</h1>
            <p className={classes.description}>
               Ipsum adipisicing cupidatat consequat laboris reprehenderit cillum ullamco consectetur Lorem culpa.<br/>
               Consequat cupidatat minim dolor ut ipsum nisi ad sunt.<br/>
               Irure quis culpa minim ipsum ut.<br/>
            </p>

            </div>
           
        </div>

            
    )
}

export default HomeDescriptionBox
