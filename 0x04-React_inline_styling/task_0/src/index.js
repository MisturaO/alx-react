import React from 'react';
import ReactDOM from 'react-dom/client';
// import './App/App.css';
// import Notifications from './Notifications/Notifications';
import App from './App/App';
// import reportWebVitals from './reportWebVitals';


console.log(document.getElementById('root'))
// Rendering react component in DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//App renders all the components




 // Rendering react component in DOM
//  ReactDOM.createRoot(document.getElementById('root-notifications')).render(
//    <React.StrictMode>
//      <Notifications />
//    </React.StrictMode>
//    );

  //  reportWebVitals();
