import React, {Component} from 'react';
import Notifications from '../Notifications/Notifications'; //Moving up one level in the directory structure, and then to the absolute path of the file
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import {getLatestNotification} from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import { StyleSheet, css } from 'aphrodite';



class App extends Component {// The GrandParent component, that renders all Parent components
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }   
      listCourses = [
        {id: 1, name: "ES6", credit: 60},
        {id: 2, name: "Webpack", credit: 20},
        {id: 3, name: "React", credit: 40}
      ];

    listNotifications = [
      {id: 1, type: "default", value: "New course available"},
      {id: 2, type:"urgent", value:"New resume available"},
      {id: 3, type:"urgent", html: getLatestNotification()}
    ];

  handleKeyDown = (event) => { //event handler
    //KeyDown event logic handled here...
    // Checks if Control (Ctrl) key and 'h' key are pressed simultaneously
    if(event && event.ctrlKey && event.key === 'k'){
      // Displays alert and call logOut function.
      alert('Logging you out');
      this.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyDown());//This will listen to the event handler for a key press when a component is mounted.
  }

  componentWillUnmount(){
    document.removeEventListener('keydown', this.handleKeyDown); // remove the event listener when the component is unmounted
  }
  
  render(){
    //To access the class props from it's instances (using destructuring assignment ).
    const { isLoggedIn } = this.props

    return (
      <React.Fragment>
        <Notifications listNotifications={this.listNotifications}/> 
        <div className={css(appStyle.appClass)}>
          <Header/>
        </div>
        <div className='App-body'>
          {isLoggedIn ?
            <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses}/>
            </BodySectionWithMarginBottom>
            : 
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login/>
            </BodySectionWithMarginBottom> //if isLoggedIn is 'true' render <Login/>, else render <CourseList />
            }
          <BodySection title='News from the School'>
            <p>In publishing and graphic design, Lorem ipsum is 
              a placeholder text commonly used to demonstrate the 
              visual form of a document or a typeface without relying on 
              meaningful content. Lorem ipsum may be used as a placeholder 
              before final copy is available</p>
          </BodySection>
        </div>
        <div className='App-footer'>
          <Footer/>
        </div>    
      </React.Fragment>
    );
  }
  
};

//Property isLoggedIn data type creation and should be false by default
App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
}
App.defaultProps = {
  isLoggedIn: true,
  logOut: () => {}
}
//Aphrodite CSS styling
const appStyle = StyleSheet.create({
  appClass:{
      height: '100vh',
      maxWidth: '100vw',
      fontFamily: "Arial, Helvetica, poppins",
      boxSizing: 'border-box'
    }
});

export default App;
