
import './App.css';
import React from "react";
import Units from "./Units.js";
import Form from "./Form.js";
import Resultcontainer from "./Resultcontainer.js";
import Forecast from "./Forecast.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Form />
        <Units />
        <Resultcontainer defaultCity="Copenhagen"/>
        <Forecast />
      </div>
    </div>
  );
}

 
