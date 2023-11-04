import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import Notifications from './Notifications';
import App from './App';
// import reportWebVitals from './reportWebVitals';



// Rendering react component in DOM
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


 // Rendering react component in DOM
 ReactDOM.createRoot(document.getElementById('root-notifications')).render(
   <React.StrictMode>
     <Notifications />
   </React.StrictMode>
   );

  //  reportWebVitals();
