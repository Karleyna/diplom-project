import React from 'react';
import {
    Routes,
    Route,
    Navigate,
    Link
} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/login' element={<LoginPage/>} />
        </Routes>
    );
};

export default Router;