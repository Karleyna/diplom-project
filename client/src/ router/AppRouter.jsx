import React, {useContext} from 'react';
import {Routes, Route, Navigate, Link } from "react-router-dom";
import {authRoutes} from "./routes";
import {publicRoutes} from "./routes";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";

export const AppRouter = () => {
    const {user} = useContext(Context);
    console.log(user)
    return (
        <Routes>
            {user.isAuth && authRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path='*' element={<Navigate to={MAIN_ROUTE}/>}/>
        </Routes>

        // <Routes>
        //     <Route path='/' element={<MainPage/>} />
        //     <Route path='/login' element={<LoginPage/>} />
        // </Routes>
    );
};
// export const publicRouter = () =>{
//     return (
//         <Routes>
//             <Route path='/' element={<MainPage/>} />
//             <Route path='/login' element={<LoginPage/>} />
//         </Routes>
//     );
// }

