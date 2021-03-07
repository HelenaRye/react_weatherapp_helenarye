
import './App.css';
import React from "react";
import Units from "./Units.js";
import Resultcontainer from "./Resultcontainer.js";
import Forecast from "./Forecast.js";
import WeatherInfo from './WeatherInfo';

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Units />
        <Resultcontainer defaultCity="Copenhagen"/>
        <Forecast />
      </div>
    </div>
  );
}

 
