import React from 'react';
import classes from "./Modal.module.css";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={active ? classes.modalActive: classes.modal} onClick={() => setActive(false)}>
            <div className={active ? classes.contentActive: classes.content} onClick={e => e.stopPropagation()} >
                {children}
            </div>

        </div>
    );
};

export default Modal;