import React from "react";
import FormattedDate from "./FormattedDate.js";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <div className="result-container">
        <div className="row">
          <div className="col-6">
            <h1>{props.data.city}</h1>
            <p className="date"> <FormattedDate date={props.data.date} /> </p>
            <p className="text-capitalize">{props.data.description}</p>
            <h2>
              <i className="fas fa-cloud"></i>
              <span className="temperature-number">
                {" "}
                {Math.round(props.data.temperature)}°
              </span>
            </h2>
          </div>
          <div className="col-md-6">
            <ul className="wind-humidity">
              <li>Humidity: {props.data.humidity} % </li>
              <li>Wind: {props.data.wind} kmph</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    );
}