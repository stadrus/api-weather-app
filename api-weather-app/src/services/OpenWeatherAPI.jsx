// import { useEffect } from "react";

const API_KEY = import.meta.env.VITE_OPENWEATHER_API_KEY;
const url = `http://api.openweathermap.org/data/2.5/weather`;


// const OpenWeatherAPI = () => {

export async function fetchWeather(zipCode) {

    // const zipCode = "";

    const temp = `${url}?zip=${zipCode},US&appid=${API_KEY}&units=imperial`;
    
    const response = await fetch (temp);

    const data= await response.json();
    console.log(data)
    
    return data;
}

    /**Open Weather JSON API Formats per API Docs

       ('#zip').text(data.zip);
        ('#city-name').text(data.name);
        ('#lat').text(data.lat);
        ('#lon').text(data.lon);
        ('#country').text(data.country);
        ('#temperature').html(`${data.main.temp}F`);
        ('#description').text(data.weather[0].description);
        ('#wind-speed').html(`Wind speed: ${data.wind_speed} m/s`);
    */

// useEffect(() =>{
//     fetchWeather();
// },[])

// export default OpenWeatherAPI