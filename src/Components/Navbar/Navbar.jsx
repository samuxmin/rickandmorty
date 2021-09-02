
import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from './navbarStyles'
import { Link } from 'react-router-dom';
import { Button, Hidden, Menu, MenuItem } from '@material-ui/core';


const Navbar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:'rgba( 83, 171, 238, .8)', color:'black'}}>
        <Toolbar>
          <Hidden mdUp>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleMenu}>
            <MenuIcon />
          </IconButton>
          </Hidden>
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
                <MenuItem component={Link} to='/characters/1' onClick={handleClose}>Characters</MenuItem>
                <MenuItem component={Link} to='/locations/1' onClick={handleClose}>Locations</MenuItem>
                <MenuItem component={Link} to='/episodes/1'onClick={handleClose}>Episodes</MenuItem>
              </Menu>
          <img
              src='/assets/rick-and-morty.png'
              alt='Commerce.js'
              height='25px'
              className={classes.image}
              />
          <Typography variant="h6" className={classes.title}>
              Rick and Morty App
           </Typography>
           <Hidden smDown>
          <Button color='inherit' component={Link} to='/characters/1'>Characters</Button>
          <Button color='inherit' component={Link} to='/locations/1'>Locations</Button>
          <Button color='inherit' component={Link} to='/episodes/1'>Episodes</Button>
           </Hidden>
        </Toolbar>
      </AppBar>
      <div className={classes.offset} />
    </div>
  );
}
export default Navbar