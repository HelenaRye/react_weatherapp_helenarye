import "./App.css";

export default function Resultcontainer() {
  let weatherData = {
    city: "Copenhagen",
    date: "Wednesday 10:00",
    description: "Cloudy",
    temperature: "10",
    humidity: " 71",
    wind: "14"
  };

  return (
    <div className="result-container">
      <div className="row">
        <div className="col-6">
          <h1><strong>{weatherData.city}</strong></h1>
          <p className="date">{weatherData.date}</p>
          <p id="description">{weatherData.description}</p>
          <h2>
            <i className="fas fa-cloud"></i>
            <span className="temperature-number">
              {" "}
              {weatherData.temperature}°
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
}
