import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';
import iconS from '../../Imgs/iconS.png';

const NavBar = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #fb8c00 30%, #ffa726 90%)'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
 
}));

export default function ButtonAppBar() {
    
    const classes = NavBar();
  
return ( 
    <div  >
      <AppBar position="static" className={classes.root} >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <IconButton edge="start"  color="inherit" aria-label="menu">
                    <img alt="icon" src={iconS} color="inherit" width='50%'/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Surveys
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
