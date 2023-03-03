import React, {createContext} from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/index.css';
import App from './App';
import UserStore from "./store/UserStore";

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{
        user: new UserStore()
    }
    }>
        <Router>
            <App />
        </Router>
    </Context.Provider>

);
