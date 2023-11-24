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
            isVisible: true
        };
        this.toggleVisibility = this.toggleVisibility.bind(this);
        this.handleMouseOut = this.handleMouseOut.bind(this);
    }

    //handles mouseOver event
    toggleVisibility(){
        this.setState((prev, ) => ({
            isVisible: !prev.isVisible,
            previousState: prev.isVisible
        }));
    }

    handleMouseOut(){
        this.setState(() => ({
            isVisible: this.state.previousState
        }))
    }




    shouldComponentUpdate(nextProps, nextState) {
        //Only update the UI if the props (listNotifications, displayDrawer) or the state(isVisible) values has changed.
        if(
            this.props.listNotifications.length !== nextProps.listNotifications.length ||
            this.props.displayDrawer !== nextProps.displayDrawer ||
            this.state.isVisible !== nextState.isVisible ){
            return true;
        }
        // By default, return false to skip unnecessary updates
        return false;
    }


    markAsRead(id){
        console.log(`Notification ${id} has been marked as read`);
    }
    render(){
        const { displayDrawer, listNotifications } = this.props; //assigning both props to the class instances through destructuring assignment
        const { isVisible } = this.state;
    return (
       
        <>
        <div className={css(style.menueItem, isVisible ? style.visible : style.hidden)}
        onMouseOver={this.toggleVisibility}>Your notifications</div>
            <ul className={css(style.NotificationsBlue, style.small, style.buttonStyle,
                isVisible ? style.hidden : style.visible)} onMouseOut={this.handleMouseOut}>
                {displayDrawer ? <div>
                    <button aria-label="Close" onClick={ () => console.log("Close button has been clicked")} 
                    className={css(style.XbuttonStyle)}>
                        <img src={closeIcon} alt="close icon" width="10px"/>
                    </button>
                    <p className={css(style.smallBorder)}>Here is the list of notifications</p>

                    {listNotifications.length > 0 ? (
                    listNotifications.map(({id, __html, type, value}) => {
                        return <NotificationItem className={css(style.NotificationItemRed, style.smallBorder, style.notiButtonStyle)} 
                          markAsRead={this.markAsRead} key={id} type={type} value={value} html={__html}/>//Passing expected data types(prop-types)values to child component's props to make sure the props get the right data type values they are defined for(e.g. type is expecting a string and it's values should be a string which has been defined by shape in the NotificationItemShape file) through this parent's prop(listNotifications)
                      })) : (
                      <CourseListRow textFirstCell='No new notification for now'/>
                    )}
        </div> : null}
            </ul>
            </>
            );
        }
};


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

const style = StyleSheet.create({
    visible: {
        display: 'block',
      },
      hidden: {
        display: 'none',
      },
    XbuttonStyle: {
        position: "absolute", 
        left: "68em", 
        margin: "auto", 
        background: "none", 
        border: "none", 
        top: "0.2em"},
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
        listStyle: 'disc'
    },
    menueItem: {
        // border: '2px dotted red',
        // margin: '2px solid red'
        // position: 'relative',
        top: '0',
        right: '0',
        backgroundColor: '#fff8f8',
        textAlign: 'center',
        zIndex: '100%',
        ':hover': {
            cursor: 'pointer',
        },
        animationName: [animateOpacity, animateBounce],
        animationDuration: "1s, 0.5s",
        animationIterationCount: '3',
        animationTimingFunction: 'ease-in-out',
    },
    NotificationsBlue: {
        color: 'blue',
    },
    NotificationItemRed: {
        // display: listNotifications ? 'block' : 'none',
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
            top: '30px',
            // margin: '20px 0px 0px 50px',
            position: 'relative'

        }
    },
    smallBorder: {
        '@media (max-width: 900px)': {
            borderBottom: '1px solid black'
            
        }
    },
    // visible: {
    //     '@media (max-width: 900px)': {
    //         display: 'block',
    //     }
    //   },
    //   hidden: {
    //     '@media (max-width: 900px)': {
    //     display: 'none',
    //     }
    //   },
});
