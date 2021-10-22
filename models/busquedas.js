
const axios = require('axios');

class Busquedas {

  historial = ['Tegucigalpa', 'Madrid', 'San José'];

  constructor(){
    //TODO: leer DB si existe
  }

  async ciudad( lugar = '' ){
    try{
      //Petición http con AXIOS
      const resp = await axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/CDMX%2C%20Ciudad%20de%20M%C3%A9xico%2C%2004120%2C%20M%C3%A9xico.json?language=es&access_token=pk.eyJ1IjoiZWRzb25zcnZuIiwiYSI6ImNrdjJ3eW5heTBreHcyb25ubTRwODM0d2gifQ.5lYwNENvHmWqGQ7BM0dd4Q');
      console.log(resp.data);
  
      return []; //regresar los lugares
    }catch (error) {
      return [];
    }
  }
}

module.exports = Busquedas;