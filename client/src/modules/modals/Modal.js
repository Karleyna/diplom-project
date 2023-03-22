import React from 'react';
import classes from "./Modal.module.css";

const Modal = ({active, setActive}) => {
    return (
        <div className={active ? "modal active": "modal"} onClick={()=>setActive(false)}>
            <div className={classes.content} onClick={e => e.stopPropagation()} ></div>

        </div>
    );
};

export default Modal;