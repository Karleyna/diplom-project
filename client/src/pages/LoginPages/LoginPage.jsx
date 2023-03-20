import React from 'react';
import LoginForm from "../../modules/LoginForm/LoginForm";
import Header from "../../modules/Header/Header";
import classes from "./LoginPage.module.css"

const LoginPage = () => {
    return (
        <div className={classes.page}>
            <div>
                <LoginForm>
                </LoginForm>
            </div>

        </div>
    );
};

export default LoginPage;