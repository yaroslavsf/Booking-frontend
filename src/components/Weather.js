import { useEffect, useState } from "react";

const Weather = () => {
    const [weather, setWeather] = useState([]);
    
    useEffect(() => {
        // console.log("requesting")
        fetch("https://localhost:7229/weatherForecast")
        .then(response => response.json())
        .then(data => setWeather(data))
    }, []);
    
    return (
    <ol>
        {weather.map(w => (
            <li key={w.date}>{w.temperatureC} {w.summary}</li>
        ))}    
        
    </ol>
    );
};

export default Weather;