import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [Length, SetLength] = useState(8);
  const [IncChar, isIncChar] = useState(true);
  const [IncNum, isIncNum] = useState(true);
  const [Incspecial, isIncspecial] = useState(true);
  return (
    <div className="App">
      <h1> Password Generator </h1>
      <input id="input" value="kdc@$n34" />
      <button>copy</button>
      <br />
      <input type="checkbox" id="myCheckbox" name="myCheckbox" />
      <span>Length: ({Length})</span>
      <input type="checkbox" id="myCheckbox" name="myCheckbox" />
      <span>Numbers</span>
      <input type="checkbox" id="myCheckbox" name="myCheckbox" />
      <span>Charcters</span>
    </div>
  );
}

export default App;
