import React from 'react';
import {useContext, useState} from "react";
import {Context} from "../../index";
import {useNavigate} from "react-router-dom";
import {registration} from "../../http/userAPI";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import classes from "./LoginForm.module.css";
import MyInput from "../../ui/inputs/MyInput";
import MyButton from "../../ui/buttons/MyButton";
import MyLink from "../../ui/links/MyLink";
import {observer} from "mobx-react-lite";
import {Form as FinalForm, Field} from "react-final-form";
import {composeValidators, required, length, validEmail, validPassword} from "../../utils/validators";


const FormRegistration = observer(() => {
        const errors = {}
        const {user} = useContext(Context);
        const navigate = useNavigate();

        const checkPasswords = values => {
            const errors ={}
            if (values.confirm !== values.password) {
                errors.confirm = 'Пароли не совпадвют';
            }
            return errors;
        };

        const onSubmit = async (values) => {
            try {
                let data;
                data = await registration(values.email, values.password);
                console.log(data)
                user.setUser(data);
                user.setIsAuth(true);
                navigate(MAIN_ROUTE);
                alert('Добро пожаловать!');
            } catch (e) {
                alert(e.response.data.message)
            }
        };

        return <>
            <FinalForm
                onSubmit={onSubmit}
                validate={checkPasswords}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} className={classes.formReg}>
                        <h1>Регистрация</h1>
                        <div className={classes.elemReg}>
                            <Field name="email" validate={composeValidators(required, length, validEmail)}>
                                {({input, meta}) => (
                                    <div style={{width: '28vw'}}>
                                        <label>E-mail:
                                            <MyInput type="text" style={{width: '28vw'}} {...input} placeholder="Логин"/>
                                        </label>
                                        {meta.touched && meta.error &&
                                            <div className={classes.comment}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                            <Field name="password" validate={composeValidators(required, validPassword, length)}>
                                {({input, meta}) => (
                                    <div style={{width: '28vw'}}>
                                        <label>Пароль:
                                            <MyInput type="password" style={{width: '28vw'}} {...input} placeholder="Пароль"/>
                                        </label>
                                        {meta.touched && meta.error &&
                                            <div className={classes.comment}>{meta.error}</div>}

                                    </div>
                                )}
                            </Field>
                            <Field name="confirm" validate={composeValidators(required)}>
                                {({input, meta}) => (
                                    <div style={{width: '28vw'}}>
                                        <label>Повтор пароля:
                                            <MyInput type="password" style={{width: '28vw'}}{...input} placeholder="Введите пароль ещё раз"/>
                                        </label>
                                        {meta.touched && meta.error &&
                                            <div className={classes.comment}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={classes.btn}>
                            <MyButton type="submit">Зарегистрироваться</MyButton>
                        </div>
                        <div> Есть аккаунт? <MyLink to={LOGIN_ROUTE} style={{color: "white"}}> Войти</MyLink></div>
                    </form>
                )}>
            </FinalForm>
        </>
    })
;

export default FormRegistration;