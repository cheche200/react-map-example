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
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

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
    open: false,
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  
  render(){

    const { classes } = this.props;
    const {open} = this.state;

      return (
        <div className={classes.root}>
          <AppBar position="static">
            <Toolbar>
              <IconButton 
              className={classes.menuButton} 
              color="inherit" 
              aria-label="Menu"
              onClick={this.handleDrawerOpen}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.grow}>
                News
              </Typography>
              <Button color="inherit">Login</Button>
            </Toolbar>
          </AppBar>
          <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="left"
              open={open}
              classes={{
                paper: classes.drawerPaper,
              }}
            >
              <div className={classes.drawerHeader}>
                <IconButton onClick={this.handleDrawerClose}>
                   <ChevronLeftIcon />
                </IconButton>
              </div>
              <Divider />
              <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                  <ListItem button key={text}>
                    <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItem>
                ))}
              </List>
              <Divider />
            </Drawer>
        </div>
      );
    }
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);