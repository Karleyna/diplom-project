import React, {useContext, useEffect, useState} from "react";
import {AppRouter} from "./ router/AppRouter";
import Footer from "./modules/Footer/Footer";
import Header from "./modules/Header/Header";
import {Context} from "./index";
import {observer} from "mobx-react-lite";
import {check} from "./http/userAPI";
import {Spinner} from "react-bootstrap";


const App = observer(() => {
    const {user} = useContext(Context);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        check().then(data => {
            user.setUser(true);
            user.setIsAuth(true);
        }).finally(() => setLoading(false));
    }, []);

    if (loading) {
        return <>
            <h1>Loading..</h1>
            <Spinner animation={"border"}/>
        </>
    }

    return <>
        <Header/>
        <AppRouter/>
        <Footer/>
    </>
});

export default App;