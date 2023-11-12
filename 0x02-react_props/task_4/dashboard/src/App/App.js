import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'; //Moving up one level in the directory structure, and then to the absolute path of the file
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList';



function App({isLoggedIn}) {
  return (
    <React.Fragment>
      <Notifications/>
      <div className='App'>
        <Header/>
      </div>
      <div className='App-body'>
        {isLoggedIn ?
          <Login/> //if isLoggedIn is 'true' render <Login/>, else render <CourseList />
        : <CourseList />}
      </div>
      <div className='App-footer'>
        <Footer/>
      </div>    
    </React.Fragment>
  );
}

//Property isLoggedIn should be false by default
App.propTypes = {
  isLoggedIn: PropTypes.bool
}
App.defaultProps = {
  isLoggedIn: false
}

export default App;
