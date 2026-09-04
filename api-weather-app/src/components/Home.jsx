// import OpenWeatherAPI from "../services/OpenWeatherAPI"
// import { useEffect } from "react";
import { fetchWeather } from "../services/OpenWeatherAPI"
import { useState } from "react"

const Home = () => {

const [zipCode, setZipCode] = useState("");

const [weather, setWeather] = useState(null);

const handleOnClick = async () =>{
    try{
        const data = await fetchWeather(zipCode);
        setWeather(data);

    } catch (error) {
        console.error(error);
    }
};
 
// useEffect(() =>{
//     async function getWeather() {
//         try{
//             const data = await fetchWeather();
//             setWeather(data);
            
//         } catch (error){
//             console.error(error);
//         }
//     }
//     getWeather();
// },[])



    return (

        
            <div className="weather-card" >
                <h1> Open Weather API</h1>
                <h3>Weather App</h3>
                <input className="city-input" type="text" placeholder="Enter Zip Code" value={zipCode} onChange={(event) => setZipCode(event.target.value)}></input>
                <button className="get-weather-btn" onClick={handleOnClick}>Get Weather</button>

                {weather && (
                <div className="weather-info">
                    <h3>{weather.name} </h3>
                    <p>Temperature: {weather.main.temp}°F</p>
                    <p>Conditions: {weather.weather[0].description}</p>
                    <p>Wind Speed: {weather.wind.speed} m/s</p>
                </div>
                )
                }
            </div>
          

       

    )

}
export default Home

