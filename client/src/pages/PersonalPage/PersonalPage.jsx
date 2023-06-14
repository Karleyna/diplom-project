import {React, useEffect} from 'react';
import {Field, Form as FinalForm} from "react-final-form";
import {composeValidators, required, validEmail, length, mustBeNumber, minAge} from "../../utils/validators";
import MyInput from "../../ui/inputs/MyInput";
import MyButton from "../../ui/buttons/MyButton";
import {observer} from "mobx-react";
import {fetchOneUser, registration, updateUser} from "../../http/userAPI";
import jwtDecode from "jwt-decode";
import {useNavigate} from "react-router-dom";
import {useState} from "react";
import classes from "./PersonalPage.module.css";
import {MAIN_ROUTE, PERSONAL_ROUTE} from "../../utils/consts";
import {useContext} from "react";
import {Context} from "../../index";

const PersonalPage = observer(() => {
    const {user} = useContext(Context);
    const [dataOfUser, setDataOfUser] = useState([]);
    const navigate = useNavigate();
    let userId;
    if (localStorage.token) {
        userId = jwtDecode(localStorage.token).id;
    }
    useEffect(() => {
        fetchOneUser(userId).then(data => setDataOfUser(data));
    }, []);


    const onSubmit = async (values) => {
        try {
            let data;
            data = await updateUser(userId, values.email, values.FIO, values.telephone,values.age, dataOfUser.role);
            user.setUser(data);
            user.setIsAuth(true);
            fetchOneUser(userId).then(data => setDataOfUser(data))
            alert('Successful');
        } catch (e) {
            alert(e.response.data.message)
        }
    };

    return <>
        <section  className={classes.heading}>
            <h2> Личный кабинет</h2>
        </section>
        <section style={{height: '75vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <section>
                <div className={classes.currentValue}>
                    <h3>Текущие данные профиля</h3>
                    <div>
                        <p>E-mail: {dataOfUser.email}</p>
                        <p>ФИО: {dataOfUser.FIO}</p>
                        <p>Возраст: {dataOfUser.age}</p>
                        <p>Телефон: {dataOfUser.telephone}</p>
                    </div>
                </div>

            </section>

            <section className={classes.formUpdate}>
                <div className={classes.tab}>
                    <input id="tab-one" type="checkbox" name="tabs" className={classes.tabInput}/>
                    <label htmlFor="tab-one">
                        <h3>Обновить профиль</h3>
                    </label>
                    <div className={classes.tabContent}>
                        <FinalForm
                            onSubmit={onSubmit}
                            render={({handleSubmit}) => (
                                <form onSubmit={handleSubmit} style={{
                                    display: 'flex',
                                    flexFlow: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'space-around'
                                }}>
                                    <div>
                                        <Field name="email" validate={composeValidators(required, length, validEmail)}>
                                            {({input, meta}) => (
                                                <div style={{width: '28vw'}}>
                                                    <label>E-mail:
                                                        <MyInput type="text" {...input}
                                                                 placeholder="Введите логин"/>
                                                    </label>
                                                    {meta.touched && meta.error &&
                                                        <div className={classes.comment}>{meta.error}</div>}
                                                </div>
                                            )}
                                        </Field>

                                        <Field name="FIO" validate={composeValidators(length)}>
                                            {({input, meta}) => (
                                                <div style={{width: '28w'}}>
                                                    <label>ФИО:
                                                        <MyInput type="text" {...input} placeholder="Введите Ваше ФИО"
                                                        />
                                                    </label>
                                                    {meta.touched && meta.error &&
                                                        <div className={classes.comment}>{meta.error}</div>}
                                                </div>
                                            )}
                                        </Field>
                                        <Field name="telephone" validate={composeValidators(mustBeNumber, length)}>
                                            {({input, meta}) => (
                                                <div style={{width: '28w'}}>
                                                    <label>Телефон:
                                                        <MyInput type="text" {...input} placeholder="Введите Ваш телефон"
                                                        />
                                                    </label>
                                                    {meta.touched && meta.error &&
                                                        <div className={classes.comment}>{meta.error}</div>}
                                                </div>
                                            )}
                                        </Field>
                                        <Field name="age" validate={composeValidators(mustBeNumber,minAge(18))}>
                                            {({input, meta}) => (
                                                <div style={{width: '28w'}}>
                                                    <label>Возраст:
                                                        <MyInput type="number" {...input} placeholder="Введите Ваш возраст"
                                                        />
                                                    </label>
                                                    {meta.touched && meta.error &&
                                                        <div className={classes.comment}>{meta.error}</div>}
                                                </div>
                                            )}
                                        </Field>
                                    </div>
                                    <div className={classes.btn}>
                                        <MyButton type="submit">Обновить</MyButton>
                                    </div>

                                </form>
                            )}>
                        </FinalForm>
                    </div>
                </div>
            </section>
        </section>
    </>
});

export default PersonalPage;