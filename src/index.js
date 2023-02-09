import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

import {getActiveElement} from "@testing-library/user-event/dist/utils";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // React.createElement('button',{onClick: () => console.log('URAA')}, 'Click!'),
    <App />,
);

// import { BrowserRouter as Router } from 'react-router-dom';
// //import { HashRouter as Router } from 'react-router-dom';
// // ...
// <Router>
//     <App />
// </Router>