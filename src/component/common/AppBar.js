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
import ChevronRightIcon  from '@material-ui/icons/ChevronRight';
import MapIcon from '@material-ui/icons/Map';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import RoomIcon from '@material-ui/icons/Room';

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
  state = {
    openMenu: false,
    openPlaces: false,
  };

  handleMenuDrawerOpen = () => {
    this.setState({ openMenu: true });
  };

  handlePlacesDrawerOpen = () => {
    this.setState({ openPlaces: true });
  };

  handleMenuDrawerClose = () => {
    this.setState({ openMenu: false });
  };

  handlePlacesDrawerClose = () => {
    this.setState({ openPlaces: false });
  }

  
  render(){

    const { classes } = this.props;
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

            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={openPlaces}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handlePlacesDrawerClose}>
                   <ChevronRightIcon />
                </IconButton>
              </div>
              <Divider />
                <List>
                  <ListItem>
                  <ListItemText primary={'List of places'} />
                  </ListItem>
                  <ListItem button key={'El Escarpin'}>
                    <ListItemIcon>
                      <RoomIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'El Escarpin'} />      
                  </ListItem>
                  <ListItem button key={'La Osa y la Madrona'}>
                    <ListItemIcon>
                      <RoomIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'La Osa y la Madrona'} />      
                  </ListItem>
                </List>
              <Divider />
              <List>
                  <ListItem>
                  <ListItemText primary={'Places to Visit'} />
                  </ListItem>
                  <ListItem button key={'El Escarpin'}>
                    <ListItemIcon>
                      <RoomIcon/>
                    </ListItemIcon>
                    <ListItemText primary={'El Escarpin'} />      
                  </ListItem>
                </List>
            </Drawer>
        </div>
      );
    }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);