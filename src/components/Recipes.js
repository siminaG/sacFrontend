import React, { Component } from 'react';
import { useLocation} from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ToggleButton from '@material-ui/lab/ToggleButton';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },

  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },

  chip: {
    margin: theme.spacing(0.5),
    backgroundColor: "#616161",
    color: 'white',
  },

  section1: {
    margin: theme.spacing(3, 2),
  },

  section2: {
    margin: theme.spacing(2),
  },

  recipe: {
    backgroundColor: '#424242',
  },

  correctMargin: {
    margin: '0 4px',
    padding: '0px',
    color: 'white',
  }
}));

function Recipes() {
  const classes = useStyles();
  const recipes = [{
    name: 'full meat',
    ingredients: ["pork", "chicken breast", "beef", "bacon", "turkey"]
  }, {
    name: 'full meat',
    ingredients: ["pork", "chicken breast", "beef", "bacon", "turkey"]
  },
  {
    name: 'full meat',
    ingredients: ["pork", "chicken breast", "beef", "bacon", "turkey"]
  },
  {
    name: 'full meat',
    ingredients: ["pork", "chicken breast", "beef", "bacon", "turkey"]
  },
  {
    name: 'full meat',
    ingredients: ["pork", "chicken breast", "beef", "bacon", "turkey"]
  },
  {
    name: 'full meat',
    ingredients: ["pork", "chicken breast", "beef", "bacon", "turkey"]
  },
  {
    name: 'full meat',
    ingredients: ["pork", "chicken breast", "beef", "bacon", "turkey"]
  }];
  console.table(useLocation().state);

  function Ingredients(props) {
    
    let ingredientsHTML = props.ingredients.map(ingredient => {
      return <Chip className={classes.chip} label={ingredient} />
    });

    return(
      <div>
          {ingredientsHTML}
      </div>
    )
  }
  function FormRow() {

    let recipiesHtml = recipes.map(function (recipe) { 
        return (
        <Grid item xs={4}>
          <Grid
            container
            direction="column"
            justify="space-evenly"
            alignItems="stretch"
            className={classes.recipe}
          >
            <div className={classes.section1}>
             <Grid container alignItems="center">
              <Grid item xs>
                <Typography gutterBottom variant="h4">
                  {recipe.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6">
                <ToggleButton value="left" aria-label="left aligned">
                  <FavoriteIcon />
                </ToggleButton>
                </Typography>
              </Grid>
            </Grid>
            </div>
            <Divider variant="middle" />
            <div className={classes.section2}>
              <Ingredients ingredients={recipe.ingredients}/>
            </div>
          </Grid>
        </Grid>
        )
    });

    return (
      <React.Fragment>
        {recipiesHtml}
      </React.Fragment>
    );
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={1}>
        <Grid container item xs={12} spacing={3} className={classes.correctMargin}>
          <FormRow />
        </Grid>
      </Grid>
    </div>
  );
}


export default Recipes;