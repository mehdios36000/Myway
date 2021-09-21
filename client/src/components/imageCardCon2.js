import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Collapse } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 645,
    background:"rgba(0,0,0,0.5)",
    margin: "20px",
  },
  media: {
    height: 440,
  },
  title: {
      fontFamily:"Nunito",
      fontWeight: "bold",
      fontSize: "2rem",
  },
  desc: {
    fontFamily:"Nunito",
    fontSize: "1.1rem",
    color: "#ddd",
  },
    Button: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        padding: theme.spacing(1),
        backgroundColor: "#FFE061",
        border: "none",
        color: theme.palette.common.white,
        fontFamily: "Nunito",
        fontSize: "1.1rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        textDecoration: "none",
        
       
    },

}));


function ImageCardCon2({place,checked}) {
  
    const classes = useStyles();
 
  return (
      <Collapse in={checked} {...(checked? {timeout:1000}:{})} >
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={place.imageUrl}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2" className={classes.title}>
            {place.title }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.desc}>
           {place.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" component={Link} to="/studentCon" className={classes.Button}>
           En savoir Plus
        </Button>
      </CardActions>
    </Card>
    </Collapse>
  );
}

export default ImageCardCon2;