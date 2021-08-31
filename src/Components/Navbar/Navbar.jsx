
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './navbarStyles'
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';


const Navbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <img
              src='/assets/rick-and-morty.png'
              alt='Commerce.js'
              height='25px'
              className={classes.image}
            />
          <Typography variant="h6" className={classes.title}>
            Rick and Morty App
          </Typography>
          <Button color='inherit' component={Link} to='/characters/1'>Characters</Button>
          <Button color='inherit' component={Link} to='/locations/1'>Locations</Button>
          <Button color='inherit' component={Link} to='/episodes/1'>Episodes</Button>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}
export default Navbar