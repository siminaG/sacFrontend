import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    formControl: {
        margin: theme.spacing(3),
    },
}));

function Ingredients () {
    const classes = useStyles();
    const [state, setState] = React.useState({
        category: [{'meat': false}, {'vegi': false}, {'fruts': false}],
        ingredients: [{
            "pork": false,
            "sheep": false,
            "cow": false
        }, {
            "tomato": false,
            "onion": false,
            "potato": false
        }, {
            "apple": false,
            "bana": false,
            "orange": false
        }]
    });

    const handleToggle = (categoryIndex, ingredientsKey) => _ => {
        let ingredients = state.ingredients;
        ingredients[categoryIndex][ingredientsKey] = !ingredients[categoryIndex][ingredientsKey];

        setState({ ...state, ingredients: ingredients});
    };

    const handleClick = (name, i) => _ => {
        let category = state.category;

        category[i][name] = !category[i][name];
        setState({ ...state, category:  category});
    };


    const ingredients = (ingredients, categoryIndex) => Object.keys(ingredients).map((ingredient, value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;

        return (
            <ListItem key={ingredient} button>
            <ListItemAvatar>
              <Avatar
                alt={`Avatar n°${value + 1}`}
                src={`/static/images/avatar/${value + 1}.jpg`}
              />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={`${ingredient}`} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(categoryIndex, ingredient)}
                checked={state.ingredients[categoryIndex][ingredient]}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        )
    });

    const category = state.category.map((categ, categoryIndex) => {
        let key = Object.keys(categ)[0];
        return (
            <React.Fragment>
            <ListItem button onClick={handleClick(key, categoryIndex)} key={key}>
                <ListItemText primary={key} />
                {categ[key] ? <ExpandLess /> : <ExpandMore />}
            </ListItem>
            <Collapse in={state.category[categoryIndex][key]} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                    {ingredients(state.ingredients[categoryIndex], categoryIndex)}
                </List>
            </Collapse>
      </React.Fragment>
      )
    });

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Select ingredients</FormLabel>
            <FormGroup>
                <List
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                >
                    {category}
                </List>
            </FormGroup>
        </FormControl>
    )
}

export default Ingredients;
