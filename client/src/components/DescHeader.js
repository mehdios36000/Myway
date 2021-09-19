import React, {useEffect,useState} from 'react'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import {makeStyles} from '@material-ui/core/styles'
import { Link as Scroll} from 'react-scroll'
import { IconButton,Collapse } from '@material-ui/core'
const useStyles = makeStyles((theme)=>({
    container: {
        textAlign: "center",
   },
   title: {
    color:"black",
   fontSize: '3rem',
    },
    colorText: {
        color: "#FFE061",
    },
    goDown: {
        color: "#FFE061",
        fontSize: '4rem',

    }
}))



const DescHeader = () => {
    const classes = useStyles()
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        setChecked(true);
        
    },[])

    return (
        <div>
        <Collapse in={checked} {...(checked? {timeout:1000}:{})} >
        <div className={classes.container}>
            <h1 className={classes.title }>
                Bienvenue sur <br/> My 
                <span className={classes.colorText }>way</span>
            </h1>
            <Scroll to="More" smooth={true}>
            <IconButton>
                <ExpandMoreIcon className={classes.goDown}/>
            </IconButton>
            </Scroll>
        </div>
        </Collapse>
        </div>
    )
}

export default DescHeader
