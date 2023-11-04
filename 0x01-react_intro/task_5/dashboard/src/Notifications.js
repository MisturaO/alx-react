import React from 'react';
import './Notifications.css'
import {getLatestNotification} from './utils.js';
import closeIcon from './close-icon.png';


export default function Notifications(){
    //Css for div notiication box style
    const buttonStyle = {
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

    return (
        <div className='Notifications' style={ buttonStyle }>
            <button aria-label="Close" onClick={ () => console.log("Close button has been clicked")} style={{position: "absolute", left: "69em", margin: "auto", background: "none", border: "none", top: "1em"}}>
                <img src={closeIcon} alt="close icon" width="10px"  />
            </button>
            <p>Here is the list of notifications</p>
            <ul>
                <li data="default">New course available</li>
                <li data="urgent"> New resume available</li>
                <li data="urgent" dangerouslySetInnerHTML={{ __html: getLatestNotification() }}></li>
            </ul>
        </div>
        );
}
