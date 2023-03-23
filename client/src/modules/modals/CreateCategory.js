import React, {useState} from 'react';

import {Form, Button} from "react-bootstrap";
import {createCategory} from "../../http/postAPI";
import Modal from "../../ui/Modal/Modal";
import MyInput from "../../ui/inputs/MyInput";

const CreateCategory = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addCategory = () => {
        createCategory({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }

    return (
        <Modal
            active={show}
            setActive={onHide}
        >
                <h3>
                    Добавить раздел
                </h3>

            <section>
                <Form>
                    <MyInput
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Введите название раздела"}
                    />
                </Form>
            </section>
            <section>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
                <Button variant="outline-success" onClick={addCategory}>Добавить</Button>
            </section>
        </Modal>
    );
};

export default CreateCategory;