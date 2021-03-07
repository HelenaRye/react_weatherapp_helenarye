import "./App.css";
import React, { useState } from "react";

export default function Units(props) {
  const [unit, setUnit] = useState('celsius');
  
  function ShowFahrenheit (event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function ShowCelsius (event) {
    event.preventDefault();
    setUnit("celsius");
  }
  
  function fahrenheit () {
    return (props.celsius * 9) / 5 + 32;
  }


  if (unit === 'celsius') {
    
    return (
     <span className="temperature">
        <span className="temperature-number">
                  {" "}
                  {Math.round(props.celsius)} </span>
                <span className="UnitConversion">°C <a href="/" onClick={ShowFahrenheit}>°F</a>
                </span>
  </span>
    );

  } else {
    return (
      <span className="temperature">
      <span className="temperature-number">
                {" "}
                {Math.round(fahrenheit())} </span>
              <span className="UnitConversion"><a href="/" onClick={ShowCelsius}>°C</a> °F
              </span>
</span>
    );
  }
}
