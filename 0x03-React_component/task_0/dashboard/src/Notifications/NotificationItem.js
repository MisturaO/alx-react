import React from 'react';

function NotificationItem({type, html, value, style}) {
    //TO DEBUG WHAT THE PROPS ARE RETURNING
    // console.log('type:', type);
    // console.log('html:', html);
    // console.log('value:', value);
    return (
        <>
            {/* 
            This checks if the props are truthy(if they have values), and if they don't, return null
            NOTE: We are checking just one <li> element but had to split it to give it separate error checks:
                <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}>{value}</li>
            */}
             {type && value ? <li data-notification-type={type} style={style}>{value}</li> : null}
            {html ? <li data-testid="Mytest" dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        </>
    );
};
export default NotificationItem;


//Another implementation
// function NotificationItem(props) {
//     return (
//         <li data-notification-type={props.type} dangerouslySetInnerHTML={{ __html: props.html }}>
//             {props.value}
//         </li>
//     );
// };
