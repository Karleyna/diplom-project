import {React, useContext, useEffect} from 'react';
import {Field, Form as FinalForm} from "react-final-form";
import classes from "../../modules/LoginForms/LoginForm.module.css";
import {composeValidators, required, validEmail, length} from "../../utils/validators";
import MyInput from "../../ui/inputs/MyInput";
import MyButton from "../../ui/buttons/MyButton";
import {observer} from "mobx-react";
import {Context} from "../../index";
import {fetchOneUser} from "../../http/userAPI";
import jwtDecode from "jwt-decode";

const PersonalPage = observer(() => {
    const {user} = useContext(Context);
    let userId;
    let dataOfUser;
    if (localStorage.token) {
        userId = jwtDecode(localStorage.token).id;
    }

    dataOfUser = fetchOneUser(userId)
    console.log(dataOfUser)

    const onSubmit = async () => {
        try {

        } catch (e) {
            alert(e.response.data.message);
        }
    };

    return <>
        <section style={{height: '100vh', display: 'flex', justifyContent: 'space-around', alignItems: 'center'}}>


            <FinalForm
                onSubmit={onSubmit}
                render={({handleSubmit}) => (
                    <form onSubmit={handleSubmit} className={classes.formReg}>
                        <div className={classes.elemReg}>
                            <Field name="email" validate={composeValidators(required, length, validEmail)}>
                                {({input, meta}) => (
                                    <div style={{width: '28vw'}}>
                                        <label>E-mail:
                                            <MyInput type="text"  {...input} placeholder="Логин"/>
                                        </label>
                                        {meta.touched && meta.error &&
                                            <div className={classes.comment}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>

                            <Field name="fio" validate={composeValidators(length)}>
                                {({input, meta}) => (
                                    <div style={{width: '28vw'}}>
                                        <label>ФИО:
                                            <MyInput type="text" {...input}
                                            />
                                        </label>
                                        {meta.touched && meta.error &&
                                            <div className={classes.comment}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                        </div>
                        <div className={classes.btn}>
                            <MyButton type="submit">Update</MyButton>
                        </div>

                    </form>
                )}>
            </FinalForm>


        </section>
    </>
});

export default PersonalPage;