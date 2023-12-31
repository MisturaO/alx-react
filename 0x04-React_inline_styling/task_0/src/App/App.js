import React, {Component} from 'react';
import './App.css';
import Notifications from '../Notifications/Notifications'; //Moving up one level in the directory structure, and then to the absolute path of the file
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList';
import {getLatestNotification} from '../utils/utils';
import BodySection from '../BodySection/BodySection';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';



class App extends Component {// The GrandParent component, that renders all Parent components
  constructor(props) {
    super(props);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }   
      listCourses = [//Values to be passed to the Parent(CourseList) component, and received by the Grandchild's component (CourseListRow)
      {id: 1, name: "ES6", credit: 60},
      {id: 2, name: "Webpack", credit: 20},
      {id: 3, name: "React", credit: 40}
    ];

    listNotifications = [ //Values to be received by the Parent(Notifications) component, for the Grandchild's component(NotificationsItem)
      {id: 1, type: "default", value: "New course available"},
      {id: 2, type:"urgent", value:"New resume available"},
      {id: 2, type:"urgent", html: getLatestNotification()}
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
        <div className='App'>
          <Header/>
        </div>
        <div className='App-body'>
          {isLoggedIn ?
            <BodySectionWithMarginBottom title='Log in to continue'>
              <Login/>
            </BodySectionWithMarginBottom> //if isLoggedIn is 'true' render <Login/>, else render <CourseList />
          : <BodySectionWithMarginBottom title="Course list">
              <CourseList listCourses={this.listCourses}/>
            </BodySectionWithMarginBottom>
            }
          <BodySection title='News from the School'>
            <p>Random Text</p>
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
  isLoggedIn: false,
  logOut: () => {}
}

export default App;
