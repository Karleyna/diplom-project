import React from 'react';
import {useEffect, useState} from "react";
import {Button, Form, Row} from "react-bootstrap";
import Modal from "../../ui/Modal/Modal";
import MyInput from "../../ui/inputs/MyInput";
import {deleteUser, fetchUsers, updateUserRole} from "../../http/userAPI";

const UserActions = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const [idUser, setIdUser] = useState('');
    const [users, setUsers] = useState([]);
    let results = [];
    useEffect(() => {
         fetchUsers().then(data =>setUsers(data.rows));

    }, [])
    users.forEach((user, index) => {
        results.push(
            <Row key={user.id}
                 style={{
                     background: index % 2 === 0 ? 'lightgray' : 'white',
                     padding: 10,
                     width: '70%',
                     borderRadius: '1vh'
                 }}>
                {user.id}: {user.email}, {user.role}
            </Row>
        )
    });
    const updateResults = async () => {
        let data;
        data = await fetchUsers();
        setUsers(data.rows);
        setIdUser('');
        results = [];
        setValue('');
        users.forEach((user, index) => {
            results.push(
                <Row key={user.id}
                     style={{
                         background: index % 2 === 0 ? 'lightgray' : 'white',
                         padding: 10,
                         width: '70%',
                         borderRadius: '1vh'
                     }}>
                    {user.id}: {user.email}, {user.role}
                </Row>
            )
        });
    }

    const deleteUserById = async () => {
        try {
            await deleteUser(idUser);
            await updateResults();
        } catch (e) {
            alert(e.response.data.message)
        }

    }
    const updateUserRoleById = async () => {
        try {
            await updateUserRole(idUser, value);
            await updateResults();
        } catch (e) {
            alert(e.response.data.message)
        }
    };


    return (
        <Modal
            active={show}
            setActive={onHide}
        >
            <h3>
                Действия с пользователями
            </h3>

            <section>
                <Form>
                    <section
                        style={{display: 'flex', justifyContent: 'space-around', margin: '1vh', flexFlow: 'column'}}>
                        <MyInput
                            style={{margin: '1vh'}}
                            value={idUser}
                            onChange={e => setIdUser(e.target.value)}
                            placeholder={"Введите ID пользователя"}
                        />
                        <MyInput
                            style={{margin: '1vh'}}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={"Введите роль пользователя"}
                        />
                    </section>
                </Form>
            </section>
            <section style={{display: 'flex', justifyContent: 'space-around', margin: '1vh'}}>
                <Button variant="outline-success" onClick={deleteUserById}>Delete</Button>
                <Button variant="outline-success" onClick={updateUserRoleById}>Update</Button>
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </section>
            <section>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    margin: '2vh',
                    flexFlow: 'column',
                    alignItems: 'center'
                }}>
                    {results}
                </div>
            </section>
            <section style={{margin: '1vh'}}>

            </section>
        </Modal>
    );
};

export default UserActions;