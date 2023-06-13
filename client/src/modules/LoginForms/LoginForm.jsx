import React, {useContext, useState} from 'react';
import MyInput from "../../ui/inputs/MyInput";
import MyButton from "../../ui/buttons/MyButton";
import classes from "./LoginForm.module.css"
import MyLink from "../../ui/links/MyLink";
import {useNavigate} from "react-router-dom";
import {MAIN_ROUTE, REGISTRATION_ROUTE} from "../../utils/consts";
import {login} from "../../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";



const LoginForm = observer(() => {
    const {user} = useContext(Context);
    const history = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    let role;


    const click = async () => {
        try {
            let data;
            data = await login(email, password);
            user.setUser(data);
            user.setIsAuth(true);
            history(MAIN_ROUTE);
            // window.location.reload();
            alert('Добро пожаловать!');
        } catch (e) {
            alert(e.response.data.message)
        }

    }

    return <>
        <div className={classes.fomLog}>
            <h2>Вход</h2>
            <form className={classes.formElements} onSubmit={(e) => e.preventDefault()}>
                <div style={{width: "60%", height: "60%"}}>
                    <label className={classes.input}>
                        <div style={{width: "28vw"}}>
                            <MyInput value={email} onChange={e => setEmail(e.target.value)}
                                     placeholder={"Введите Ваш Email.."}></MyInput>
                        </div>
                    </label>

                    <label className={classes.input}>
                        <div style={{width: "28vw"}}>
                            <MyInput value={password} onChange={e => setPassword(e.target.value)} type="password"
                                     placeholder={"Введите Ваш пароль.."}></MyInput>
                        </div>
                    </label>
                </div>
                <div className={classes.btn}>
                    <MyButton type="submit" onClick={click}>Войти</MyButton>
                </div>
                 <div> Нет аккаунта? <MyLink to={REGISTRATION_ROUTE} style={{color: "white"}}> Зарегистрироваться</MyLink></div>
            </form>

        </div>
    </>;
});

export default LoginForm;


