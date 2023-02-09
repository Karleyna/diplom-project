import React from "react";
import {
    Routes,
    Route,
    Navigate,
    Link
} from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import Loginform from "./pages/LoginForm/Loginform";


export default function App() {
    return (
        <Routes>
            <Route path='/' element={<MainPage/>} />
            <Route path='/login' element={<Loginform/>} />
        </Routes>
    );
};

