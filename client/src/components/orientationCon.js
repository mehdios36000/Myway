import React from 'react'
import HomeDescriptionBox from './HomeDescriptionBox'
import { Link as Scroll} from 'react-scroll'
import { IconButton } from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import ImageCardCon from './imageCardCon'
import places from '../static/places.js'
import useWindowPostion from '../hook/useWindowPostion.js'


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0px',
        margin: '0px',
        width: '100%',
        height: '100%',
        boxShadow: '0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12)'
    },
    goDown: {
        color: "#FFE061",
        fontSize: '4rem',

    },
    container: {
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.down('md')]: {
            flexDirection: 'column',
        }
    },
}))




const OrientationCon = () => {
    const classes=useStyles();
    const checked= useWindowPostion("header");
    return (
        <div className={classes.root} >
            <HomeDescriptionBox/>
            <Scroll to="More" smooth={true}>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
            </Scroll>
            <div className={classes.container} id="More">
            <ImageCardCon place={places[2]} checked={checked}/>

            </div>
        </div>
    )
}

export default OrientationCon
