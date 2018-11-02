import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import {AppBar, 
  Toolbar, 
  Typography,
  Button,
  IconButton, 
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon  from '@material-ui/icons/ChevronLeft';
import MapIcon from '@material-ui/icons/Map';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PlacesDrawer from './PlacesDrawer';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};


class  ButtonAppBar extends Component{

  constructor(props) {
    super(props);

    this.state = {
      openMenu: false,
      openPlaces: false,
    };

    this.handleClick = this.handleClick.bind(this);
}

 
  handleMenuDrawerOpen = () => {
    this.setState({ openMenu: true });
  };

  handleMenuDrawerClose = () => {
    this.setState({ openMenu: false });
  };

  handlePlacesDrawerOpen = () => {
    this.setState({ openPlaces: true });
  };

  handleClick() {
    this.setState({ openPlaces: false,});
  }

  render(){

    const { classes, } = this.props;
    const {openMenu, openPlaces} = this.state;

      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="Menu"
              onClick={this.handleMenuDrawerOpen}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                Local
              </Typography>
              <Button  color="inherit" 
              onClick={this.handlePlacesDrawerOpen}>
                Places
              </Button>
            </Toolbar>
          </AppBar>
          <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={openMenu}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleMenuDrawerClose}>
                   <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
                <List>
                  <ListItem button key={'Map'}>
                    <ListItemIcon>
                      <MapIcon /> 
                    </ListItemIcon>
                  <ListItemText primary={'Map'} />
                  </ListItem>
                  <ListItem button key={'To Visit'}>
                    <ListItemIcon>
                      <CheckBoxIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'To Visit'} />
                  </ListItem>
                </List>
              <Divider />
            </Drawer>
            <PlacesDrawer classes = {classes} openPlaces = {openPlaces} handleClick = {this.handleClick}/>
        </div>
      );
    }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default  withStyles(styles)(ButtonAppBar);