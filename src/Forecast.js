import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import ForecastPreview from "./ForecastPreview.js";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
       setForecast(response.data);
       setLoaded(true);
 
  }

  if (loaded && props.city === forecast.city.name)  {
    return (
    <div className="Forecast row">
        <ForecastPreview data={forecast.list[0]}/>
        <ForecastPreview data={forecast.list[1]}/>
        <ForecastPreview data={forecast.list[2]}/>
        <ForecastPreview data={forecast.list[3]}/>
        <ForecastPreview data={forecast.list[4]}/>
    </div>
    );

  } else {

    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(handleForecastResponse);
  
  return null;
  }

}
