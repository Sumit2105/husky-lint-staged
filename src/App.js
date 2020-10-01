import React from "react";
import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./Components/LoginForm";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <br />
        <LoginForm />
      </header>
    </div>
  );
}

export default App;
