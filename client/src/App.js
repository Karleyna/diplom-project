import React from "react";
import {AppRouter} from "./ router/AppRouter";

import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";




export default function App() {
    return <>
        <Header/>
        <AppRouter/>
        <Footer/>
    </>};

