
import './App.css';
import React from "react";
import Resultcontainer from "./Resultcontainer.js";
import Footer from "./Footer.js";

export default function App() {
  return (
    <div className="App">
      <div className="Container">
        <Resultcontainer defaultCity="Copenhagen"/>
      </div>
      <Footer />
    </div>
  );
}

 
