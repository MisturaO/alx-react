import React, {Component} from 'react';
import './Notifications.css'
import {getLatestNotification} from '../utils/utils.js';
import closeIcon from '../close-icon.png';
import NotificationItem from './NotificationItem.js';
import PropType from "prop-types";
import CourseListRow from '../CourseList/CourseListRow.js';
import NotificationItemShape from './NotificationItemShap.js';


export default class Notifications extends Component{
    constructor(props){
        super(props)
        this.markAsRead = this.markAsRead.bind(this); //Binds the function markAsRead in the constructor to avoid unecessary re-rendering
    }

    shouldComponentUpdate(nextProps) {
        //Only update if the value of the prop 'listNotifications' has changed
        if(this.listNotifications.length !== nextProps.length){
            return true;
        }
        // By default, return false to skip unnecessary updates
        return false;
    }
    //Css for the div notiication box
    buttonStyle = {
        justifyContent: 'space-between',
        left: "15px",
        position: 'absolute',
        bottom: "450px",
        cursor: "pointer",
        border: "2px dotted #e0354b",
        width: "70%",
        fontWeight: "bold",
        fontSize: "15px",
    };
    notiButtonStyle = {
        color: 'red',
    }

    markAsRead(id){
        console.log(`Notification ${id} has been marked as read`);
    }
    render(){
        const { buttonStyle, displayDrawer, listNotifications, notiButtonStyle } = this.props //assigning both props to the class instances through destructuring assignment

    return (
       
        <>
            <div className='menuItem'>Your notifications</div>
            <ul>
                {displayDrawer ? <div className='Notifications' style={ buttonStyle }>
                    <button aria-label="Close" onClick={ () => console.log("Close button has been clicked")} style={{position: "absolute", left: "69em", margin: "auto", background: "none", border: "none", top: "1em"}}>
                        <img src={closeIcon} alt="close icon" width="10px"  />
                    </button>
                    <p>Here is the list of notifications</p>
               
                    {listNotifications.length > 0 ? (
                    listNotifications.map(({id, __html, type, value}) => {
                        <NotificationItem markAsRead={this.markAsRead()} key={id} type={type} value={value} html={__html} style={notiButtonStyle}/>//Passing expected data types(prop-types)values to child component's props to make sure the props get the right data type values they are defined for(e.g. type is expecting a string and it's values should be a string which has been defined by shape in the NotificationItemShape file) through this parent's prop(listNotifications)
                    })) : (
                        <CourseListRow textFirstCell='No new notification for now'/>
                    )}
                    {/* Replaces the <li> tags with NotificationItem components. */}
                    {/* <NotificationItem type="default" value="New course available" style={notiButtonStyle} />
                    <NotificationItem type="urgent" value="New resume available"/>
                    <NotificationItem type="urgent" html={getLatestNotification()} /> */}
                    {/* <li data="default">New course available</li>
                    <li data="urgent"> New resume available</li>
                    <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li> */}
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
    displayDrawer: false,
    listNotifications: []
}
