import { Container } from 'unstated';
import Api from '../api';

class PlacesContainer extends Container {
  state = {
    data: [],  
  };

  loadPlaces(){
    const api = new Api();

    api.get(`marker?userId=Jose`)
      .then((response) => {
        this.setState({
          data: response.data.data,
        });
      });
  }
}

export default PlacesContainer;