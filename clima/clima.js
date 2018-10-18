const axios = require('axios');

const getClima = async(lat, lng ) =>{
    
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${lng }&units=metric&appid=f35d35fa3acde37528de1b3caa8353eb`)

    return resp.data.main.temp;
}

module.exports ={
    getClima
}