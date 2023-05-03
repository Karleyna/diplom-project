import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {adminRotes, trainerRoutes, userRoutes} from "./routes";
import {publicRoutes} from "./routes";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";
import jwtDecode from "jwt-decode";

export const AppRouter = () => {
    const {user} = useContext(Context);
    let token;
    if (localStorage.token){
        token = jwtDecode(localStorage.token)
    }
    console.log(user)
    return (
        <Routes>
            {user.isAuth && userRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {user.isAuth && token.role === 'admin' && adminRotes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {user.isAuth && token.role === 'trainer' && trainerRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={MAIN_ROUTE}/>}/>
        </Routes>
    );
};
