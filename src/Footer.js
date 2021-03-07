import "./App.css";

export default function Footer() {
  return (
    <small> <h6>
      <i class="fab fa-github"></i> 
      <a
        href="https://github.com/HelenaRye/helenas_weatherapp"
        className = "links" 
        target="_blank"
      >
        Open-source code
      </a>
       {" "} by Helena Rye
    </h6></small>
  );
}
