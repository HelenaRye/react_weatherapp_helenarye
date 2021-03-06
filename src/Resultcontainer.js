import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo.js";
import axios from "axios";
import "./App.css";

export default function Resultcontainer(props) {
  const [weatherData, setWeatherData] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
 
  function handleResponse(response) {
      setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date (response.data.dt * 1000),
        description: response.data.weather[0].description,
        icon: response.data.weather[0].icon,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
  }

  function search() {
    const apiKey = "42ec6cb05f191a16b64dfede975cfc2c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }


  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {

    return (
    <div className="clearfix">
      <form className="Form" onSubmit={handleSubmit}>
        <input type="text" id="searchbox" placeholder="Enter your city" onChange={handleCityChange} />
  
        <input type="submit" className="btn btn-outline-light" value="Search" />
      </form>
     <WeatherInfo data={weatherData} />
    </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
