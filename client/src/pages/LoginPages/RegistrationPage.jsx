import React from 'react';
import classes from "./LoginPage.module.css";
import FormRegistration from "../../modules/LoginForms/FormRegistration";


const RegistrationPage = () => {
    return (
        <div className={classes.page}>
            <div className={classes.form}>
                <h1>Регистрация</h1>
                <FormRegistration>
                </FormRegistration>
            </div>
        </div>
    );
};

export default RegistrationPage;