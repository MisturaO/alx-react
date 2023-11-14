import React, {Component} from 'react';
import propTypes from 'prop-types';



class NotificationItem extends Component {
    constructor(props){
        super(props)
    }
    //TO DEBUG WHAT THE PROPS ARE RETURNING
    // console.log('type:', type);
    // console.log('html:', html);
    // console.log('value:', value);
    render(){
        const {type, html, value, style, markAsRead, id} = this.props //class props declaration
    return (
        <>
            {/* 
            This checks if the props are truthy(if they have values), and if they don't, return null
            NOTE: We are checking just one <li> element but had to split it to give it separate error checks:
                <li data-notification-type={type} dangerouslySetInnerHTML={{ __html: html }}>{value}</li>
            */}
             {type && value ? <li onClick={() => markAsRead(id)} data-notification-type={type} style={style} >{value}</li> : null}
            {html ? <li data-testid="Mytest" dangerouslySetInnerHTML={{ __html: html }} onClick={() => markAsRead(id)}></li> : null}
        </>
    );
    }
};

NotificationItem.propTypes = {
    id: propTypes.number.isRequired,
    html: propTypes.shape({ //A html (object of { \_\_html: string })
        __html: propTypes.string
    }),
    type: propTypes.string.isRequired,
    value: propTypes.string,
    markAsRead: propTypes.func,
    id: propTypes.number
};
NotificationItem.defaultProps = {
    id: 0,
    markAsRead: () => {
        console.log('empty function');
    }

}

export default NotificationItem;
