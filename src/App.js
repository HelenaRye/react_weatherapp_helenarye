
import './App.css';
import React from "react";
import Resultcontainer from "./Resultcontainer.js";
import Forecast from "./Forecast.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Resultcontainer defaultCity="Copenhagen"/>
        <Forecast />
      </div>
    </div>
  );
}

 
