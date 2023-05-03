import React from 'react';
import classes from "./LoginPage.module.css";
import FormRegistration from "../../modules/LoginForms/FormRegistration";


const RegistrationPage = () => {
    return (
        <div className={classes.page}>
            <div className={classes.form}>
                <FormRegistration>
                </FormRegistration>
            </div>
        </div>
    );
};

export default RegistrationPage;