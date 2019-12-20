import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter} from 'react-router-dom'

import "./styles.css";
import MenuPrimary from "./MenuPrimary";

function App() {
  return (
    <div className="App">
      <MenuPrimary/>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, rootElement);
