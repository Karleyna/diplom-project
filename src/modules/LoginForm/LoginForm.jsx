import React from 'react';
import { Form as FinalForm, Field } from 'react-final-form'
import MyInput from "../../ui/inputs/MyInput";
import MyButton from "../../ui/buttons/MyButton";
import classes from "./LoginForm.module.css"


const required = (value) => (value ? undefined : "Это поле не может быть пустым")
const validLogin = (value) => {
    if (!/^([a-z0-9]{6,20})$/.test(value)) {
        return "Логин должен содержать от 6 до 20 символов латинского алфавита и цифры.";
    }
    return undefined;
};
const composeValidators = (...validators) => (value) =>
    validators.reduce((error, validator) => error || validator(value), undefined)

const onSubmit = (values) => {
      // отправка данных на сервер
     console.log(values);
};

const LoginForm = () => {
    return (
        <section>
            <div >
                <FinalForm
                    onSubmit={onSubmit}
                    render={({handleSubmit}) => (
                        <form onSubmit={handleSubmit} className={classes.test}>
                            <Field name="login" validate={composeValidators(required, validLogin)} >
                                {({ input, meta}) => (
                                    <div className={classes.input}>
                                        <label>Логин:
                                            <MyInput type="text" {...input} style={{width: "15vw", height:"2vh", margin: "0.5vw"}} placeholder="Логин"/>
                                        </label>
                                        {meta.touched && meta.error && <div className={classes.coment}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                            <Field name="password" validate={required}>
                                {({ input,meta}) => (
                                    <div className={classes.input}>
                                        <label>Пароль:
                                            <MyInput type="password"{...input} style={{width: "15vw", height:"2vh", margin: "0.5vw"}} placeholder="Пароль"/>
                                        </label>
                                        {meta.touched && meta.error && <div className={classes.coment}>{meta.error}</div>}
                                    </div>
                                )}
                            </Field>
                            <div className={classes.btn}>
                                <MyButton type="submit"> Войти </MyButton>
                            </div>
                        </form>
                    )}>
                </FinalForm>
            </div>
        </section>
    )
};

export default LoginForm;




// import styles from "./Form.module.css";

// type FormValues = {
//     login: string;
//     password: string;
// };




