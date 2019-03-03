const axios = require('axios');

const getWeather = async(lat, lng) => {
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=466327720642a040451372560b556541`);

    return {
        temp : resp.data.main.temp
    }
};

module.exports = {
    getWeather
}