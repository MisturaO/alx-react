import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'; //Moving up one level in the directory structure, and then to the absolute path of the file
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';



function App() {
  return (
    <React.Fragment>
      <Notifications/>
      <div className='App'>
        <Header/>
      </div>
      <div className='App-body'>
        <Login/>
      </div>
      <div className='App-footer'>
        <Footer/>
      </div>    
    </React.Fragment>
  );
}

export default App;
