
const axios = require('axios');

class Busquedas {

  historial = ['Tegucigalpa', 'Madrid', 'San José'];

  constructor(){
    //TODO: leer DB si existe
  }

  get paramsMapbox(){
    return {
      'access_token': process.env.MAPBOX_KEY,
      'limit': 5,
      'lenguage': 'es'
    }
  }

  async ciudad( lugar = '' ){
    try{
      //Petición http con AXIOS
      const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${ lugar }.json`,
        params: this.paramsMapbox
      });
      // const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/CDMX%2C%20Ciudad%20de%20M%C3%A9xico%2C%2004120%2C%20M%C3%A9xico.json?language=es&access_token=pk.eyJ1IjoiZWRzb25zcnZuIiwiYSI6ImNrdjJ3eW5heTBreHcyb25ubTRwODM0d2gifQ.5lYwNENvHmWqGQ7BM0dd4Q');
      const resp = await instance.get();
  
      return resp.data.features.map( lugar => ({
        id: lugar.id,
        nombre: lugar.place_name,
        lng: lugar.center[0],
        lat: lugar.center[1]
      }));
    }catch (error) {
      return [];
    }
  }
}

module.exports = Busquedas;