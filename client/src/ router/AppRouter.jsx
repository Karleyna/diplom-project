import React from 'react';
import {
    Routes,
    Route,
    Navigate,
    Link
} from "react-router-dom";
import MainPage from "../pages/MainPage/MainPage";
import LoginPage from "../pages/LoginPage/LoginPage";

export const AppRouter = () => {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/login' element={<LoginPage/>} />
        </Routes>
    );
};
export const publicRouter = () =>{
    return (
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/login' element={<LoginPage/>} />
        </Routes>
    );
}

