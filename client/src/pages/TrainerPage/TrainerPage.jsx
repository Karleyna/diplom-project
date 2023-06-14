import React, {useContext, useState} from 'react';
import MyButton from "../../ui/buttons/MyButton";
import classes from "./TrainerPage.module.css";
import CategoryActions from "../../modules/modals/CategoryActions";
import CreatePost from "../../modules/modals/CreatePost";
import {observer} from "mobx-react-lite";
import UserActions from "../../modules/modals/UserActions";
import PostInfoActions from "../../modules/modals/PostInfoActions";
import CertificateActions from "../../modules/modals/CertificateActions";



const TrainerPage = observer(() => {
    const [postVisible, setPostVisible] = useState(false);
    const [postInfoVisible, setPostInfoVisible] = useState(false);
    const [certificateVisible, setCertificateVisible] = useState(false);
    return <>
        <div style={{height: '100vh'}}>
            <div style={{height: '100%'}}>
                <main className={classes.page}>
                    <div></div>
                    <section className={classes.header}>
                        <h1>Панель тренера</h1>
                    </section>
                    <section className={classes.panel}>
                        <div>
                            <MyButton onClick={() => setPostVisible(true)}>Работа с публикациями</MyButton>
                        </div>
                        {/*<div>*/}
                        {/*    <MyButton onClick={() => setCertificateVisible(true)}>Работа с сертификатами</MyButton>*/}
                        {/*</div>*/}
                        <div>
                            <MyButton onClick={() => setPostInfoVisible(true)}>Обновление информации в публикациях</MyButton>
                        </div>
                    </section>
                    <CreatePost show={postVisible} onHide={() => setPostVisible(false)}/>
                    <PostInfoActions show={postInfoVisible} onHide={() => setPostInfoVisible(false)}/>
                    <CertificateActions show={certificateVisible} onHide={() => setCertificateVisible(false)}></CertificateActions>
                </main>
            </div>
        </div>
    </>


});

export default TrainerPage;