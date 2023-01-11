import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {getActiveElement} from "@testing-library/user-event/dist/utils";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // React.createElement('button',{onClick: () => console.log('URAA')}, 'Click!'),
    <App />,
);

