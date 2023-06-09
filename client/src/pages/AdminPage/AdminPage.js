import React, {useContext, useState} from 'react';
import MyButton from "../../ui/buttons/MyButton";
import classes from "./AdminPage.module.css";
import CategoryActions from "../../modules/modals/CategoryActions";
import CreatePost from "../../modules/modals/CreatePost";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useEffect} from "react";
import {fetchPosts} from "../../http/postAPI";
import UserActions from "../../modules/modals/UserActions";
import PostInfoActions from "../../modules/modals/PostInfoActions";



const AdminPage = observer(() => {
    const [categoryVisible, setCategoryVisible] = useState(false);
    const [usersVisible, setUsersVisible] = useState(false);
    const [postVisible, setPostVisible] = useState(false);
    const [postInfoVisible, setPostInfoVisible] = useState(false);
    return <>
        <div style={{height: '100vh'}}>
            <div style={{height: '100%'}}>
                <main className={classes.page}>
                    <div></div>
                    <section className={classes.header}>
                        <h1>Панель администратора</h1>
                    </section>
                    <section className={classes.panel}>
                        <div>
                            <MyButton onClick={() => setCategoryVisible(true)}>Категории</MyButton>
                        </div>
                        <div>
                            <MyButton onClick={() => setUsersVisible(true)}>Назначить тренера</MyButton>
                        </div>
                        <div>
                            <MyButton onClick={() => setPostVisible(true)}>Создать прайс-лист</MyButton>

                        </div>
                        <div>
                            <MyButton onClick={() => setPostInfoVisible(true)}>Создать info</MyButton>
                        </div>
                    </section>
                    <CategoryActions show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
                    <UserActions show={usersVisible} onHide={() => setUsersVisible(false)}/>
                    {/*<CreatePost show={postVisible} onHide={() => setPostVisible(false)}/>*/}
                    <PostInfoActions show={postInfoVisible} onHide={() => setPostInfoVisible(false)}/>

                </main>
            </div>
        </div>
    </>


});

export default AdminPage;