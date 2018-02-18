import React from 'react';
import App from '../containers/App';
import style from './Modal.css';

const Modal = (props) => (
    <div id="modal" className={style.modal}>
        <div className={style.modalContent}>
            <div className={style.modalHeader}>
                <h2>Hey!</h2>
            </div>
            <div className={style.modalBody}>
                <p>On this list you have not-performed tasks.</p>
                <p>Are you sure that you want to remove?</p>
            </div>
            <div className={style.modalFooter}>
                <button id="accept">Delete</button>
                <button id="back">Back</button>
            </div>
        </div>
    </div>
)

export default Modal;