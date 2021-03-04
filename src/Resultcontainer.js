import React, { useState } from "react";
import FormattedDate from "./FormattedDate.js";
import axios from "axios";
import "./App.css";

export default function Resultcontainer(props) {
  const [ready, setReady] = useState(false);
  const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
      setWeatherData({
        ready: true,
        temperature: response.data.main.temp,
        humidity: response.data.main.humidity,
        date: new Date (response.data.dt * 1000),
        description: response.data.weather[0].description,
        wind: response.data.wind.speed,
        city: response.data.name,
      });
  }



  if (weatherData.ready) {

    return (
      <div className="result-container">
        <div className="row">
          <div className="col-6">
            <h1><strong>{weatherData.city}</strong></h1>
            <p className="date"> <FormattedDate date={weatherData.date} /> </p>
            <p className="text-capitalize">{weatherData.description}</p>
            <h2>
              <i className="fas fa-cloud"></i>
              <span className="temperature-number">
                {" "}
                {Math.round(weatherData.temperature)}°
              </span>
            </h2>
          </div>
          <div className="col-md-6">
            <ul className="wind-humidity">
              <li>Humidity: {weatherData.humidity} % </li>
              <li>Wind: {weatherData.wind} kmph</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    
    const apiKey = "42ec6cb05f191a16b64dfede975cfc2c";
    let apiUrl = `api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "Loading..."
  }
}
