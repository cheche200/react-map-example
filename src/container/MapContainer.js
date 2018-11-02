import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import PlacesContainer from './PlacesContainer';
import PropTypes from 'prop-types';
import subscribe from '../helpers/subscribe';

class MapContainer extends Component{
  state = {
    zoom: 13,
  }

  componentDidMount() {
    this.loadMarkers();
  }

  loadMarkers(){
    const { places } = this.props;
    places.loadPlaces();
  }

  renderMarkers({ title, description, latitude, longitude }){
    const location = [latitude, longitude];
    return(
    <Marker position={location}>
      <Popup>
        {title} <br /> {description}
      </Popup>
    </Marker>)
  }

  render() {
    const kilometroCero = [40.416632, -3.703794]
    const { data, } = this.props.places.state;

    return (
      <Map center={kilometroCero} zoom={this.state.zoom}>
        <TileLayer
          attribution="&amp;copy <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map(marker => this.renderMarkers(marker))}
        
      </Map>
    )
  }
}

MapContainer.propTypes = {
  places: PropTypes.instanceOf(PlacesContainer).isRequired,
};

export default subscribe(MapContainer, { places: PlacesContainer });