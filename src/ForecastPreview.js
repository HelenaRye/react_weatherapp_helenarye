import React from "react";
import WeatherIcon from "./WeatherIcon.js";

export default function ForecastPreview(props) {
   
   function hours() {
      let date = new Date(props.data.dt * 1000)
      let hours = date.getHours()
      return `${hours}:00`;
   }
   

   function temperatureForecast() {
       let temperature = Math.round(props.data.main.temp);
       return `${temperature}°`;
   }

    return (
    <div className="WeatherPreview col"> 
        <strong>{hours()}</strong>
        <WeatherIcon code={props.data.weather[0].icon} />
        {temperatureForecast()}
     </div>
    );
}



