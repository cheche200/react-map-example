import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import Api from '../api';

class MapContainer extends Component{
  state = {
    zoom: 13,
    data: [],
  }

  componentDidMount() {
    this.loadMarkers();
  }

  loadMarkers(){
    const api = new Api();

    api.get(`marker?userId=Jose`)
      .then((response) => {
        this.setState({
          data: response.data.data,
        });
      });
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
    const { data, } = this.state;

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

export default MapContainer;