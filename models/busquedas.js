
class Busquedas {

  historial = ['Tegucigalpa', 'Madrid', 'San José'];

  constructor(){
    //TODO: leer DB si existe
  }

  async ciudad( lugar = '' ){
    //Petición http
    console.log(lugar);

    return []; //regresar los lugares
  }
}

module.exports = Busquedas;