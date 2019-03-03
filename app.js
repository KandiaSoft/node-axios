
const places = require('./place/place');
const weather = require('./weather/weather');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;

console.log(argv.direccion);

let getInfo = async(city) => {

    try {
        let address = await places.getPlaceLatLng(city);
        let temp = await weather.getWeather(address.lat, address.lng);
    
        return `El clima en ${address.address} es de ${temp.temp} C`;
    } catch (e) {
        return `No se puedo determinar el clima en ${city}`;
    }

}

getInfo(argv.direccion)
    .then(resp => {
        console.log(resp);
    })
    .catch(e => console.log(e));