
import './App.css';
import Units from "./Units.js";
import Form from "./Form.js";
import Resultcontainer from "./Resultcontainer.js";

function App() {
  return (
    <div className="App">
      <div className="Container">
        <Form />
        <Units />
        <Resultcontainer />
      </div>
    </div>
  );
}

export default App;
