import "./App.css";

export default function Footer() {
  return (
    <div className="footer">
      <small>
      <i class="fab fa-github"></i>  {" "}
      <a
        
        href="https://github.com/HelenaRye/react_weatherapp_helenarye"
        target="_blank"
        rel="noreferrer"
        className = "links" 
        
      >
        Open-source code
      </a>
       {" "} by Helena Rye
    </small>
    </div>
  );
}
