import React, {useContext, useState} from 'react';
import MyButton from "../../ui/buttons/MyButton";
import classes from "./AdminPage.module.css";
import CreateCategory from "../../modules/modals/CreateCategory";
import CreatePost from "../../modules/modals/CreatePost";
import {observer} from "mobx-react-lite";
import {Context} from "../../index";
import {useEffect} from "react";
import {fetchPosts} from "../../http/postAPI";


const AdminPage = observer(() => {
    const {post} = useContext(Context)
    useEffect(() => {
        fetchPosts(post.selectedCategory.id, post.page, 5).then(data => {
            post.setPosts(data.rows)
            post.setTotalCount(data.count)
        })
    }, [post.page, post.selectedCategory])
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [postVisible, setPostVisible] = useState(false)
    return <>
        <div style={{height: '100vh'}}>
            <div style={{height: '100%'}}>
                <main className={classes.page}>
                    <div></div>
                    <section className={classes.header}>
                        <h1>Панель администратора</h1>
                    </section>
                    <section className={classes.panel}>
                        {/*<div>*/}
                        {/*    <MyButton onClick={() => setPostVisible(true)}>Добавить публикацию</MyButton>*/}
                        {/*</div>*/}
                        <div>
                            <MyButton onClick={() => setCategoryVisible(true)}>Добавить категорию</MyButton>
                        </div>
                        <div>
                            <MyButton>Назначить тренера</MyButton>
                        </div>
                        <div>
                            <MyButton>Создать прайс-лист</MyButton>
                        </div>
                    </section>
                    <CreateCategory show={categoryVisible} onHide={() => setCategoryVisible(false)}/>
                    <CreatePost show={postVisible} onHide={() => setPostVisible(false)}/>

                </main>
            </div>
        </div>
    </>


});

export default AdminPage;