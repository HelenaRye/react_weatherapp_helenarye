import "./App.css";

export default function Forecast() {
  return (
    <div className="forecast-container">
      <div className="row align-items-start">
        <div className="col">
          <strong> Mon </strong>
        </div>
        <div className="col">
          <strong> Tue </strong>
        </div>
        <div className="col">
          <strong> Wed </strong>
        </div>
        <div className="col">
          <strong> Thurs </strong>
        </div>
        <div className="col">
          <strong> Fri </strong>
        </div>
      </div>
      <div className="row align-items-center">
        <div className="col">
          <i className="fas fa-cloud-showers-heavy"></i>
        </div>
        <div className="col">
          <i className="fas fa-cloud"></i>
        </div>
        <div className="col">
          <i className="fas fa-sun"></i>
        </div>
        <div className="col">
          <i className="fas fa-cloud-sun-rain"></i>
        </div>
        <div className="col">
          <i className="fas fa-sun"></i>
        </div>
      </div>
      <div className="row align-items-end">
        <div className="col">9°</div>
        <div className="col">12°</div>
        <div className="col">11°</div>
        <div className="col">6°</div>
        <div className="col">5°</div>
      </div>
    </div>
  );
}
