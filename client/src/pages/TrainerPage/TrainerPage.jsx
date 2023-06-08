import React from 'react';
import {useState} from "react";
import MyButton from "../../ui/buttons/MyButton";
import PostInfoActions from "../../modules/modals/PostInfoActions";


const TrainerPage = () => {
    const [postInfoVisible, setPostInfoVisible] = useState(false);
    return (
        <div style={{height:'70vh',
            display: 'flex',
            alignItems: 'center',
            flexFlow: 'column'
        }}>
          page of trainer
            <div style={{height:'45vh'}}>

            </div>
            <div>
                <MyButton onClick={() => setPostInfoVisible(true)}>Создать info</MyButton>
            </div>
            <PostInfoActions show={postInfoVisible} onHide={() => setPostInfoVisible(false)}/>
        </div>
    );
};

export default TrainerPage;