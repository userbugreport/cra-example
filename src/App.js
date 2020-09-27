import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BugButton } from "@userbugreport/bugbutton-react";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <BugButton
          id="ebb492f2-44cc-44ea-ba92-890ada86d260"
          apikey="31b81542-f981-452d-97e8-3207a9e15efb"
        />
      </header>
    </div>
  );
}

export default App;
