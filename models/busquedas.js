
const axios = require('axios');

class Busquedas {

  historial = ['Tegucigalpa', 'Madrid', 'San José'];

  constructor(){
    //TODO: leer DB si existe
  }

  async ciudad( lugar = '' ){
    //Petición http con AXIOS
    const resp = await axios.get('https://reqres.in/api/users?page=2');
    console.log(resp.data);

    return []; //regresar los lugares
  }
}

module.exports = Busquedas;