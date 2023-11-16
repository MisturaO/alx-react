/* Higher order component:
        Logs to the console every time a component has been mounted and every time it is about to unmount.
*/
import React, {Component} from 'react';


const withLogging = ({wrappedComponent}) => {
    const getDisplayName = (wrappedComponent) => {
        wrappedComponent.displayName || 'component';
    }
    //Sets display name for debugging to always display in the React Chrome Extension or for debugging
    withLogging.displayName = `WithLogging(${getDisplayName(wrappedComponent)})`;

    return class extends Component{
        componentDidMount(){
            console.log(`Component ${getDisplayName(wrappedComponent)} is mounted`);
        }

        componentWillUnmount(){
            console.log(`Component ${getDisplayName(wrappedComponent)} is going to unmount`);
            // Cleanup logic can be added here...
        }

        render(){
            return <wrappedComponent {...props} />
        }
    }
}

export default HOC;
