import "./App.css";

export default function Units() {
  return (
    <div className="units">
      <strong>
        {" "}
        <a id="celsius-symbol" class="active" href="/">
          C°
        </a>{" "}
        <a id="fahrenheit-symbol" href="/">
          F°
        </a>{" "}
      </strong>
    </div>
  );
}
