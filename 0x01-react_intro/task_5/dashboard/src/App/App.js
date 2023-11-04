import React from 'react';
import logo from '../assets/holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from '../utils/utils';

function App() {
  return (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
          <form>
            <label htmlFor="email" style={{marginRight: "10px"}}>Email:</label>
            <input id="email" name="email" type="email"></input>
            <label htmlFor="password" style={{marginRight: "10px", marginLeft: "10px"}}>Password:</label>
            <input id="password" name="password" type="password"></input>
            <button type="submit" style={{marginLeft: "10px"}}>OK</button>
          </form>
        </div>
        <div className="App-footer">
          <p></p>
          <p>Copyright {getFooterCopy()} - {getFullYear()}</p>
        </div>
    </div>
  );
}

export default App;
