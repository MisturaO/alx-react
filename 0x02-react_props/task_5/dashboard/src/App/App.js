import React from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'; //Moving up one level in the directory structure, and then to the absolute path of the file
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import {getLatestNotification} from '../utils/utils'



function App({isLoggedIn}) {// The GrandParent component, that renders all Parent components
  //This is a new comment
  const listCourses = [//Values to be passed to the Parent(CourseList) component, and received by the Grandchild's component (CourseListRow)
    {id: 1, name: "ES6", credit: 60},
    {id: 2, name: "Webpack", credit: 20},
    {id: 3, name: "React", credit: 40}
  ];

  const listNotifications = [ //Values to be received by the Parent(Notifications) component, for the Grandchild's component(NotificationsItem)
    {id: 1, type: "default", value: "New course available"},
    {id: 2, type:"urgent", value:"New resume available"},
    {id: 2, type:"urgent", html: getLatestNotification()}
  ];

  return (
    <React.Fragment>
      <Notifications listNotifications={listNotifications}/> 
      <div className='App'>
        <Header/>
      </div>
      <div className='App-body'>
        {isLoggedIn ?
          <Login/> //if isLoggedIn is 'true' render <Login/>, else render <CourseList />
        : <CourseList listCourses={listCourses}/>}
      </div>
      <div className='App-footer'>
        <Footer/>
      </div>    
    </React.Fragment>
  );
};

//Property isLoggedIn data type creation and should be false by default
App.propTypes = {
  isLoggedIn: PropTypes.bool
}
App.defaultProps = {
  isLoggedIn: false
}

export default App;
