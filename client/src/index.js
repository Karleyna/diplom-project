import React, {createContext} from 'react';
import "react-bootstrap"
import ReactDOM from 'react-dom/client';
import {BrowserRouter as Router} from 'react-router-dom';
import './styles/index.css';
import App from './App';
import UserStore from "./store/UserStore";
import PostStore from "./store/PostsStore";

export const Context = createContext(null);
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <Context.Provider value={{
        user: new UserStore(),
        post: new PostStore()
    }}>
        <Router>
            <App />
        </Router>
    </Context.Provider>

);
