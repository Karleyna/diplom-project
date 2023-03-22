import React, {useState} from 'react';
import MyButton from "../../ui/buttons/MyButton";
import classes from "./AdminPage.module.css";
import CreateCategory from "../../modules/modals/CreateCategory";
import CreatePost from "../../modules/modals/CreatePost";
import Example from "../../modules/modals/Example";

const AdminPage = () => {
    const [categoryVisible, setCategoryVisible] = useState(false)
    const [postVisible, setPostVisible] = useState(false)
    return <div style={{height: '100vh'}}>
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
                <Example/>
            </main>
        </div>
    </div>

};

export default AdminPage;