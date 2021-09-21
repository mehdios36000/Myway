import React from 'react'
import { makeStyles } from '@material-ui/core'
import ImageCard from './imageCard.js'
import places from '../static/places.js'
import useWindowPostion from '../hook/useWindowPostion.js'
import ImageCardCon2 from './imageCardCon2.js'

const useStyles = makeStyles(theme => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    }
}))
 


const More = () => {
    const classes=useStyles();
    const checked= useWindowPostion("header");
    return (
        <div className={classes.root} id="More" >
            <ImageCardCon2 place={places[1]} checked={checked}/>
            <ImageCard place={places[0]} checked={checked}/>
            
        </div>
    )
}

export default More

