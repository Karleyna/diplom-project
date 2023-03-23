import React, {useContext, useState} from 'react';
import MyButton from "../../ui/buttons/MyButton";
import classes from "./AdminPage.module.css";
import CreateCategory from "../../modules/modals/CreateCategory";
import CreatePost from "../../modules/modals/CreatePost";
import Modal from "../../ui/Modal/Modal";
import {observer} from "mobx-react-lite";
import {post} from "axios";
import {Context} from "../../index";


const AdminPage = observer(() => {
    const {post} = useContext(Context)
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [postVisible, setPostVisible] = useState(false)
    return <>
        <div style={{height: '100vh'}}>
            <div style={{height: '100%'}}>
                <main className={classes.page}>
                    <div></div>
                    <section className={classes.header}>
                        <h1>Admin</h1>
                    </section>
                    <section className={classes.panel}>
                        <div>
                            <MyButton onClick={() => setPostVisible(true)}>Add post</MyButton>
                        </div>
                        <div>
                            <MyButton onClick={() => setCategoryVisible(true)}>Add category</MyButton>
                        </div>
                        <div>
                            <MyButton>Create trainer user</MyButton>
                        </div>
                        <div>
                            <MyButton>Create a price list</MyButton>
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