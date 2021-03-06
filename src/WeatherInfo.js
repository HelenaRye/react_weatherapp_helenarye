import React from "react";
import FormattedDate from "./FormattedDate.js";
import WeatherIcon from "./WeatherIcon.js";

export default function WeatherInfo(props) {
    return (
    <div className="WeatherInfo">
        <div className="result-container">
        <div className="row">
          <div className="col-6">
            <h1><strong>{props.data.city}</strong></h1>
            <p className="date"> <FormattedDate date={props.data.date} /> </p>
            <p className="text-capitalize">{props.data.description}</p>
            <div className="clearfix">
              <div className="float-left">
              <WeatherIcon code={props.data.icon} />
              <span className="temperature-number">
                {" "}
                {Math.round(props.data.temperature)}°
              </span>
              </div>
            </div>
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