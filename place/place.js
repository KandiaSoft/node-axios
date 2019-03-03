const axios = require('axios');

const getPlaceLatLng = async(city) => {
    let encodedURL = encodeURI(city);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedURL}&key=AIzaSyAoqJ2w4k4uGVFFc7KgcC26NpPYAQ6XQ2s`);

    if(resp.data.status === 'ZERO_RESULTS'){
        throw new Error(`No hay resultados para la ciudad ${city}`);
    }

    let location = resp.data.results[0];
    let address = location.formatted_address;
    let lat = location.geometry.location.lat;
    let lng = location.geometry.location.lng;

    console.log("Ciudad: ",city);
    console.log("Lat: ",lat);
    console.log("Lng: ",lng);

    return {
        address,
        lat,
        lng
    }
}

module.exports = {
    getPlaceLatLng
}
