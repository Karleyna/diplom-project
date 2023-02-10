import React from 'react';
import LoginForm from "../../modules/LoginForm/LoginForm";
import Header from "../../modules/Header/Header";
import classes from "./LoginPage.module.css"

const LoginPage = () => {
    return (
        <div>
            <Header></Header>
            <div className={classes.form}>
                <h2>Войти</h2>
                <LoginForm>
                </LoginForm>
            </div>

        </div>
    );
};

export default LoginPage;