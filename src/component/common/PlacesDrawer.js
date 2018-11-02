import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    IconButton, 
    Drawer,
    Divider,
    List,
    ListItem,
    ListItemIcon,
    ListItemText} from '@material-ui/core';
  import ChevronRightIcon  from '@material-ui/icons/ChevronRight';
  import RoomIcon from '@material-ui/icons/Room';


class  PlacesDrawer extends Component{
    constructor(props) {
        super(props);  
        this.state = {
            placesList: [],
            placesToVisit: [],
            openPlaces: this.props.openPlaces,
        };
      }

      componentDidMount() {
        this.loadPlacesList();
      }
    
      loadPlacesList(){
        this.setState({placesList: [{
          id: 1,
          title: 'El Escarpin',
          description: 'Very nice Restaurant',
          url: 'http://wwww.elescarpin.com',
        },
        {
          id: 2,
          title: 'La Osa y la Madrona',
          description: 'Famous Monument',
          url: 'http://wwww.laosaqueosa.com',
        }]})
      }

      handlePlacesDrawerClose = () => {
        this.setState({ openPlaces: false });
      }

      removePlacesToVisit(placeToRemove){
        this.setState(prevState => ({
          placesToVisit: prevState.placesToVisit.filter(function(e) { return e !== placeToRemove })
        }))
      }

      addPlacesToVisit(newPlace){
        if (!this.state.placesToVisit.includes(newPlace)){
          this.setState(prevState => ({
            placesToVisit: [...prevState.placesToVisit, newPlace]
          }))
        }
      }
    
      renderPlacesList(place){
        const {id, title} = place;
        return(
        <ListItem button key={id} onClick={() => this.addPlacesToVisit(place)} >
          <ListItemIcon>
            <RoomIcon/>
          </ListItemIcon>
          <ListItemText primary={title} /> 
        </ListItem>)
      }
    
      renderPlacesToVisit(place){
        const {id, title} = place;
        return(
        <ListItem button key={id} onClick={() => this.removePlacesToVisit(place)} >
          <ListItemIcon>
            <RoomIcon/>
          </ListItemIcon>
          <ListItemText primary={title} /> 
        </ListItem>)
      }
    

    render(){

        const { classes, openPlaces, handleClick } = this.props;
        const {placesList, placesToVisit,} = this.state;

        return(
            <Drawer
              className={classes.drawer}
              variant="persistent"
              anchor="right"
              open={openPlaces}
              classes={{
                paper: classes.drawerPaper,
              }}>
              <div className={classes.drawerHeader}>
                <IconButton onClick={handleClick}>
                   <ChevronRightIcon />
                </IconButton>
              </div>
              <Divider />
                <List>
                  <ListItem>
                  <ListItemText primary={'List of places'} />
                  </ListItem>
                  { openPlaces ?
                    placesList.map(place => this.renderPlacesList(place)) : 
                    <ListItem button key={'no places'}>
                      <ListItemIcon>
                        <RoomIcon/>
                      </ListItemIcon>
                      <ListItemText primary={'No Places to Show'} />      
                    </ListItem>                
                  }
                </List>
              <Divider />
              <List>
                  <ListItem>
                  <ListItemText primary={'Places to Visit'} />
                  </ListItem>
                    { openPlaces ?
                      placesToVisit.map(place => this.renderPlacesToVisit(place)) : 
                      <ListItem button key={'no places'}>
                        <ListItemIcon>
                          <RoomIcon/>
                        </ListItemIcon>
                        <ListItemText primary={'No Places to Show'} />      
                      </ListItem>                
                    }
                </List>
            </Drawer>
        );
    }

}

PlacesDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default PlacesDrawer;