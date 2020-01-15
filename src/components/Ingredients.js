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
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {useHistory} from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex-start',
        backgroundImage: 'url(https://marketplace.canva.com/MADGvgHETXk/7/screen_2x/canva-apricot-fruits-on-bowl-MADGvgHETXk.jpg)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
          theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'inherit',
        opacity: '0.9',

    },
    menuButton: {
        marginRight: theme.spacing(2),
      },
      title: {
        flexGrow: 1,
      },

    formControl: {
        display: 'flex',
        // marginBottom: theme.spacing(30)
        // padding: theme.spacing(2),
        backgroundColor: '#E9FFED ',
        opacity: '0.7',
    },

    button: {
        marginLeft: theme.spacing(10),
        padding: theme.spacing(3),
    },

    designCateg: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(15),
        // marginBottom: theme.spacing(5),
        position: 'relative',
        // overflow: 'hidden',
        
        
        // overflow: 'scroll',
    }

}));


function Ingredients () {

    let history = useHistory();
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const [state, setState] = React.useState({
        category: [{'Meat': false}, {'Vegetables': false}, {'Fruits': false}, {'Dairy': false}, {'Grains': false}, {'Spices': false}, {'Fish and seafood': false}, {'Oils': false}, {'Condiments': false}, {'Added Sweeteners': false}, {'Baking': false}],
        ingredients: [{
            "pork": false,
            "chicken breast": false, 
            "beef": false,
            "bacon": false,
            "turkey": false,
            "chicken": false,
            "lamb": false,
            "prosciutto": false,
            "duck": false,
            "goose": false
        }, {
            "tomato": false, 
            "onion": false, 
            "potato": false,
            "garlic": false,
            "carrot": false,
            "bell pepper": false,
            "broccoli": false,
            "corn": false,
            "spinach": false,
            "mushroom": false,
            "green beans": false,
            "ginger": false,
            "chilli pepper": false,
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
            "sun dried tomato": false,
            "eggplant": false,
            "butternut squash": false,
            "sweet pepper": false
        }, {
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
            "olive oil": false,
            "vegetable oil": false, 
            "coconut oil": false,
            "sunflower oil": false,
            "corn oil": false,
            "palm oil": false
        },
        {
            "mayonnaise": false,
            "ketchup": false, 
            "mustard": false,
            "soy sauce": false,
            "balsamic vinegar": false,
            "hot sauce": false,
            "wine vinegar": false,
            "apple cider vinegar": false,
            "teriyaki": false
        },
        {
            "sugar": false,
            "brown sugar": false, 
            "honey": false,
            "maple syrup": false,
            "agave nectar": false
        },
        {
            "flour": false,
            "baking powder": false, 
            "baking soda": false
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
    }


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

    
const continueToRecipes = () => {
    history.push({
        pathname: '/recipes',
        state: state
    });
}

const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


    return (
     
    <div className = {classes.root}>  
     <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>My Profile</MenuItem>
                <MenuItem onClick={handleClose}>My Recipes</MenuItem>
              </Menu>
            </div>
        </Toolbar>
      </AppBar>
    </div>

    <div className = {classes.designCateg}> 
     <Grid
        container 
        direction="column"
        justify="center"
        alignItems="flex-start"
    >   
   <Grid item xs = {30}>
    <div className = {classes.formControl}>
    <FormControl component="fieldset" >
        <FormLabel>Select the desired ingredients:</FormLabel>
        <Scrollbars style={{ width: 300, height: 500 }}>
        <FormGroup>
            <List
                component="nav"
                aria-labelledby="nested-list-subheader">
                {category}
            </List>
            </FormGroup>
            </Scrollbars>
        </FormControl>
        </div>
        </Grid>
      <Grid item xs={10}>
        <div className = {classes.button}>
        <Button variant="contained" color="primary" onClick = {continueToRecipes}>
        Continue
        </Button> 
      </div>
    </Grid>
    </Grid>
    </div>
    
    
    </div> 
    
    )
}


export default Ingredients;
