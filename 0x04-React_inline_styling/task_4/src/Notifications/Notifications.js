import React, {Component} from 'react';
import {getLatestNotification} from '../utils/utils.js';
import closeIcon from '../close-icon.png';
import NotificationItem from './NotificationItem.js';
import PropType from "prop-types";
import CourseListRow from '../CourseList/CourseListRow.js';
import NotificationItemShape from './NotificationItemShap.js';
import { StyleSheet, css } from 'aphrodite';


export default class Notifications extends Component{
    constructor(props){
        super(props)
        this.markAsRead = this.markAsRead.bind(this); //Binds the function markAsRead in the constructor to avoid unecessary re-rendering
        this.state = {
            listNotifications: this.props
        }
    }

    toggleVisibility = () => {
        this.setState((prevState) => ({
            listNotifications: !prevState,
        }));
      };

    shouldComponentUpdate(nextProps) {
        //Only update if the value of the prop 'listNotifications' has changed
        if(this.listNotifications.length !== nextProps.length){
            return true;
        }
        // By default, return false to skip unnecessary updates
        return false;
    }


    markAsRead(id){
        console.log(`Notification ${id} has been marked as read`);
    }
    render(){
        const { listNotifications } = this.state;
        const { displayDrawer } = this.props //assigning both props to the class instances through destructuring assignment
        
    return (
       
        <>
        <div className={css(style.menueItem)} listNotifications>Your notifications</div>
            <ul>
                {displayDrawer ? <div className={css(style.NotificationsBlue, style.small, style.buttonStyle)}>
                    <button aria-label="Close" onClick={ () => console.log("Close button has been clicked")} 
                    children={css(style.XbuttonStyle)}>
                        <img src={closeIcon} alt="close icon" width="10px"/>
                    </button>
                    <p className={css(style.smallBorder)}>Here is the list of notifications</p>

                    {listNotifications.length > 0 ? (
                    listNotifications.map(({id, __html, type, value}) => {
                        return <NotificationItem className={css(style.NotificationItemRed, style.smallBorder)} 
                          markAsRead={this.markAsRead()} key={id} type={type} value={value} html={__html} 
                          style={style.notiButtonStyle}/>//Passing expected data types(prop-types)values to child component's props to make sure the props get the right data type values they are defined for(e.g. type is expecting a string and it's values should be a string which has been defined by shape in the NotificationItemShape file) through this parent's prop(listNotifications)
                      })) : (
                      <CourseListRow textFirstCell='No new notification for now'/>
                    )}
        </div> : null}
            </ul>
            </>
            );
        }
};

const animateOpacity = {
    '0%': {opacity: 0.5},
    '100%': {opacity: 1}
}

const animateBounce = {
    '0%, 20%, 50%, 80%, 100%': {
        transform: 'translateY(0px)'
      },
     '40%': {
        transform: 'translateY(-5px)'
      },
      '60%': {
        transform: 'translateY(5px)'
      }
}

Notifications.PropType = {//This parent receives the shape created through it's own prop and also declared a data type for it's second prop
    listNotifications: PropType.arrayOf(NotificationItemShape),
    displayDrawer: PropType.bool.isRequired,
    id: PropType.number,
    markAsRead: PropType.func

}

Notifications.defaultProps = {//sets default value for the prop displayDrawer
    displayDrawer: true,
    listNotifications: []
}

const style = StyleSheet.create({
    XbuttonStyle: {
        position: "absolute", 
        left: "60em", 
        margin: "auto", 
        background: "none", 
        border: "none", 
        top: "1em"},
    notiButtonStyle: {
        color: 'red',
    },
    buttonStyle: {
        justifyContent: 'space-between',
        left: "15px",
        position: 'absolute',
        bottom: "450px",
        cursor: "pointer",
        border: "2px dotted #e0354b",
        width: "70%",
        fontWeight: "bold",
        fontSize: "15px",
    },
    menueItem: {
        border: '2px dotted red',
        // margin: '2px solid red'
        position: 'absolute',
        top: '0',
        right: '0',
        backgroundColor: '#fff8f8',
        textAlign: 'right',
        zIndex: '100%',
        ':hover': {
            cursor: 'pointer',
            animationName: [animateOpacity, animateBounce],
            animationDuration: "1s, 0.5s",
            animationIterationCount: '3',
            display: listNotifications ? 'block' : 'none',
        }
    
    },
    NotificationsBlue: {
        color: 'blue',
    },
    NotificationItemRed: {
        display: listNotifications ? 'block' : 'none',
        color: 'red'
    },

    small: {
        '@media (max-width: 900px)': {
            display: 'flex',
            flexDirection: 'column',
            // fontSize: '20px',
            width: 'vw',
            fontSize: '2rem',
            // borderBottom: '1px solid black'

        }
    },
    smallBorder: {
        '@media (max-width: 900px)': {
            borderBottom: '1px solid black'
        }
    }
});
