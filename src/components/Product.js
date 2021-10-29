import React from 'react';
import RatingNew from './RatingNew';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import accounting from 'accounting';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { AddShoppingCart } from '@material-ui/icons';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: '2rem 0rem'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
 
}));

export default function Product({nombre, precio, description, extra, image, obtenerProducto, productousuario, twoCollumns}) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };




  const añadiendoCarrito = ()=>{

    console.log(productousuario)

    obtenerProducto({

      nombre, 
      precio,
      description,
      extra,
      image
      
    })

  }

  
  return (
    <Card className={classes.root}>
      <CardHeader
        
        action={
            <Typography variant="body2" color="textSecondary" component="h2">
         
              {accounting.formatMoney(precio) }
        </Typography>
        }
        title={nombre}
        subheader="in Stock"
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      {twoCollumns ? null  :  <IconButton aria-label="add to favorites">
          <AddShoppingCart  onClick={ añadiendoCarrito }/>
        </IconButton>  }
        

         <RatingNew />


         {twoCollumns ? <DeleteIcon />  :  <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton> }
        
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            {extra}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
