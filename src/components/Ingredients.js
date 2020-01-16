import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Scrollbars } from 'react-custom-scrollbars';
import Recipes from "./Recipes";


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        backgroundImage: 'url(https://marketplace.canva.com/MADGvgHETXk/7/screen_2x/canva-apricot-fruits-on-bowl-MADGvgHETXk.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'inherit',
        opacity: '0.9',
        height: '100vh'
    },

    formControl: {
        margin: theme.spacing(2),
        display: 'flex',
        backgroundColor: '#E9FFED ',
        opacity: '0.7'
    }

}));


function Ingredients () {

    const classes = useStyles();
    const [state, setState] = React.useState({
        category: [{'Meat': false}, {'Vegetables': false}, {'Fruits': false}, {'Dairy': false}, {'Grains': false}, {'Spices': false}, {'Fish and seafood': false},  {'Condiments': false}, {'Added Sweeteners': false}, {'Baking': false}],
        ingredients: [
            {
            "pork": false,
            "chicken": false,
            "beef": false,
            "bacon": false,
            "turkey": false,
            "lamb": false,
            "prosciutto": false,
            "duck": false,
            "goose": false
        },
        {
            "tomato": false,
            "onion": false,
            "potato": false,
            "garlic": false,
            "carrot": false,
            "pepper": false,
            "broccoli": false,
            "corn": false,
            "spinach": false,
            "mushroom": false,
            "green beans": false,
            "ginger": false,
            "celery": false,
            "salad": false,
            "red onion": false,
            "cucumber": false,
            "sweet potato": false,
            "avocado": false,
            "zucchini": false,
            "cilantro": false,
            "olive": false,
            "cabbage": false,
            "cauliflower": false,
            "eggplant": false,
            "butternut squash": false,
            "sweet pepper": false
        },
        {
            "apple": false,
            "banana": false,
            "orange": false,
            "lemon": false,
            "lime": false,
            "strawberry": false,
            "grape": false,
            "coconut": false,
            "peach": false,
            "cranberry": false,
            "watermelon": false,
            "plum": false,
            "apricot": false,
            "pomegranate": false,
            "kiwi": false,
            "grapefruit": false
        },
        {
            "butter": false,
            "egg": false,
            "milk": false,
            "parmesan": false,
            "cheddar": false,
            "sour cream": false,
            "mozzarella": false,
            "yogurt": false,
            "feta": false,
            "ice cream": false,
            "brie": false,
            "gorgonzola": false,
            "cheese": false
        },
        {
            "bread": false,
            "pasta": false,
            "rice": false,
            "cereals": false
        },
        {
            "cumin": false,
            "thyme": false,
            "oregano": false,
            "salt": false,
            "pepper": false,
            "curry": false,
            "chilli powder": false,
            "parsley": false,
            "basil": false,
            "rosmarine": false,
            "oil": false,
            "cacao": false,
            "herbs": false,
            "vanilla": false,
            "cinnamon": false
        },
        {
            "canned tuna": false,
            "salmon": false,
            "cod": false,
            "anchovy": false,
            "shrimp": false,
            "sardin": false,
            "oyster": false,
            "octopus": false,
            "calamari": false,
            "mussel": false
        },
        {
            "mayonnaise": false,
            "ketchup": false,
            "mustard": false,
            "soy sauce": false,
            "vinegar": false,
            "hot sauce": false,
            "teriyaki": false
        },
        {
            "sugar": false,
            "honey": false,
            "maple syrup": false,
            "agave nectar": false
        },
        {
            "flour": false,
            "baking powder": false,
            "baking soda": false
        }],
        recipes : []
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

    const ingredientList = () => {
        let ingrSelection = state.ingredients;
        let result = [];
        ingrSelection.forEach((category) => {
            for (let key in category) {
                if (category.hasOwnProperty(key) && category[key] === true) {
                    result.push(key);
                }
            }
        });
        return result;
    };

    const ingredients = (ingredients, categoryIndex) => Object.keys(ingredients).map((ingredient, value) => {
        const labelId = `checkbox-list-secondary-label-${value}`;

        return (
            <ListItem key={ingredient} button>
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
            <React.Fragment key={key}>
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

    const getRecipes = (event) => {
        event.preventDefault();
        let list = ingredientList();
        let email = localStorage.getItem('email');
        fetch('http://localhost:5000/ingredients', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify([list, email])
        })
            .then(response => response.json())
            .then(response => {
                let newRecipes = [];
                response.forEach(recipe => newRecipes.push({
                    name: recipe.Title,
                    ingredients: recipe.Ingredients.replace(/['[\]]/g, "").split(','),
                    timeToCook: recipe.Time_to_Cook}));
                setState({...state, recipes: newRecipes})
            });

    };

    return (
        <Grid container component="main" className={classes.root}>
            <Grid container item xs={3}>
                <Grid item xs={12}>
                    <div className={classes.formControl}>
                        <Scrollbars style={{ width: '100%', height: 500 }}>
                            <FormGroup>
                                <List component="nav" aria-labelledby="nested-list-subheader">{category}</List>
                            </FormGroup>
                        </Scrollbars>
                    </div>
                </Grid>
                <Grid item xs={12} style={{ textAlign: 'center'}}>
                    <Button variant="contained" color="primary" onClick={getRecipes}>Continue</Button>
                </Grid>
            </Grid>
            <Grid container item xs={9}>
                <Recipes recipes={state.recipes}/>
            </Grid>
        </Grid>
    );
}

export default Ingredients;
