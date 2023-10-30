import logo from './175b85183ecedb529e14.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils';

function App() {
  return (
    <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
        <div className="App-body">
          <p>Login to access the full dashboard</p>
        </div>
        <div className="App-footer">
          <p></p>
          <p>Copyright {getFooterCopy()} - {getFullYear()}</p>
        </div>
    </div>
  );
}

export default App;
