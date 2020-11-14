import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello world!</h1>
      <h2>I dont know</h2>
      <input type="text" placeholder="Enter liquor or cocktail" />
      <button type="submit">Find</button>
    </div>
  );
}

export default App;
