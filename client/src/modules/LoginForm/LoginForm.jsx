import React, {useContext, useState} from 'react';
import MyInput from "../../ui/inputs/MyInput";
import MyButton from "../../ui/buttons/MyButton";
import classes from "./LoginForm.module.css"
import MyLink from "../../ui/links/MyLink";
import {useNavigate, useLocation} from "react-router-dom";
import {LOGIN_ROUTE, MAIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {login, registration} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";


const LoginForm = observer(() => {
    const location = useLocation()
    const {user} = useContext(Context);
    const history = useNavigate();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // click();
    };

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            console.log(data)
            user.setUser(data);
            user.setIsAuth(true);
            history(MAIN_ROUTE);
        }
        catch (e) {
            alert(e.response.data.message)
        }

    }

    return <>
        <div className={classes.test}>
            <h2>{isLogin ? "Вход" : "Регистрация"}</h2>
            <form className={classes.formElements} onSubmit={handleSubmit}>
                <div style={{width: "60%", height: "60%"}}>
                    <label className={classes.input}>
                        <div style={{width: "28vw"}}>
                            <MyInput value={email} onChange={e => setEmail(e.target.value)}
                                     placeholder={"Введите Ваш Email.."}></MyInput></div>
                    </label>
                    <label className={classes.input}>
                        <div style={{width: "28vw"}}>
                            <MyInput value={password} onChange={e => setPassword(e.target.value)} type="password"
                                     placeholder={"Введите Ваш пароль.."}></MyInput>
                        </div>
                    </label>
                </div>
                <div className={classes.btn}>
                    <MyButton type="submit" onClick={click}>{isLogin ? "Войти" : "Зарегистрироваться"}</MyButton>
                </div>
                {isLogin ? <div> Нет аккаунта? <MyLink to={REGISTRATION_ROUTE}
                                                       style={{color: "white"}}> Зарегистрироваться</MyLink></div> :
                    <div> Есть аккаунт? <MyLink to={LOGIN_ROUTE} style={{color: "white"}}>Войти</MyLink></div>}
            </form>

        </div>
    </>;
});

export default LoginForm;


