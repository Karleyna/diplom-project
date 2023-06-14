import React from 'react';
import {useEffect, useState} from "react";
import {Button, Form, Row} from "react-bootstrap";
import Modal from "../../ui/Modal/Modal";
import MyInput from "../../ui/inputs/MyInput";
import {fetchUsers, fetchUsersTrowEmail} from "../../http/userAPI";

const CertificateActions = ({show, onHide}) => {
    const [value, setValue] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [searchValue, setSearchValue] = useState('');
    const [users, setUsers] = useState([]);
    const [certificates, setCertificates] = useState([]);
    let results = [];
    useEffect(() => {
        fetchUsers().then(data => setUsers(data.rows));

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
                {user.email}: {user.FIO}, {user.telephone}
            </Row>
        )
    });
    const updateResults = async () => {
        try {
            let data;
            if (searchValue === '') {
                data = await fetchUsers();
                setUsers(data.rows);
            }
            else{
                data = await fetchUsersTrowEmail(searchValue)
                setUsers(data)
            }
            searchValue('');
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
            setUserEmail('');
        } catch (e) {
            alert(e.response.data.message)
        }

    }
        const addCertificate = async () => {
        try {
            if (userEmail===''){
                alert('Введите почту ученика')
            }
            else {

            }
            
        } catch (e) {
            alert(e.response.data.message)
        }
    }
    // const deleteUserById = async () => {
    //     try {
    //         if (idUser===''){
    //             alert("Введите ID пользователя")
    //         }
    //         else{
    //             await deleteUser(idUser);
    //             await updateResults();
    //         }
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }
    //
    // }
    // const updateUserRoleById = async () => {
    //     try {
    //         if (idUser===''){
    //             alert("Введите ID пользователя")
    //         }
    //         else if (value===''){
    //             alert("Введите роль пользователя")
    //         }
    //         else{
    //             await updateUserRole(idUser, value);
    //             await updateResults();
    //         }
    //
    //     } catch (e) {
    //         alert(e.response.data.message)
    //     }
    // };


    return (
        <Modal
            active={show}
            setActive={onHide}
        >
            <h3 style={{fontSize: '2.5rem'}}>
                Работа с сертификатами
            </h3>

            <section>
                <Form>
                    <section
                        style={{display: 'flex', justifyContent: 'space-around', margin: '1vh', flexFlow: 'column'}}>
                        <MyInput
                            style={{margin: '1vh'}}
                            value={userEmail}
                            onChange={e => setUserEmail(e.target.value)}
                            placeholder={"Введите почту пользователя"}
                        />
                        <MyInput
                            style={{margin: '1vh'}}
                            value={value}
                            onChange={e => setValue(e.target.value)}
                            placeholder={"Введите название"}
                        />
                    </section>
                </Form>
            </section>
            <section style={{display: 'flex', justifyContent: 'space-around', margin: '1vh'}}>
                <Button variant="outline-success" onClick={addCertificate}>Добавить</Button>
                {/*<Button variant="outline-success" onClick={deleteUserById}>Удалить</Button>*/}
                {/*<Button variant="outline-success" onClick={updateUserRoleById}>Обновить</Button>*/}
                <Button variant="outline-danger" onClick={onHide}>Закрыть</Button>
            </section>
            <section style={{display: 'flex', justifyContent: 'space-around', margin: '1vh', flexFlow:'column'}}>
                <MyInput
                    style={{margin: '1vh'}}
                    value={searchValue}
                    onChange={e => setSearchValue(e.target.value)}
                    placeholder={"Введите почту для поиска"}
                />
                <Button style={{width:'10%', marginLeft:'1.5vh'}} variant="outline-success" onClick={updateResults}>Поиск</Button>
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

export default CertificateActions;