// import OpenWeatherAPI from "../services/OpenWeatherAPI"
// import { useEffect } from "react";
import { fetchWeather } from "../services/OpenWeatherAPI"
import { useState } from "react"

const Home = () => {

const [zipCode, setZipCode] = useState("");

const [weather, setWeather] = useState("");

const handleOnClick = async () =>{
    try{
        const data = await fetchWeather(zipCode);
        setWeather(data);

    } catch (error) {
        console.error(error);
    }
    // getWeather();
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

        <div>
            <h1>Home Page</h1>
            <div className="weather-card" >
                <h1> Open Weather API</h1>
                <h3>Weather App</h3>
                <input className="city-input" type="text" placeholder="Enter Zip Code" value={zipCode} onChange={(event) => setZipCode(event.target.value)}></input>
                <button className="get-weather-btn" onClick={handleOnClick}>Get Weather</button>

                {weather && (
                <div className="weather-info">
                    <h3 className="city-name">{weather.name} </h3>
                    <p className="date">{weather.date}</p>
                    <p className="temperature">Temperature: {weather.temperature}F</p>
                    <p className="description">Conditions{weather.description}</p>
                    <p className ="wind-speed">{weather.speed}</p>
                </div>
                )
                }
            </div>
          

        </div>

    )

}
export default Home

/**Many issues with the  */