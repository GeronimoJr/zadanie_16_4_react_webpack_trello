import React from 'react';
import App from '../containers/App';
import style from './Modal.css';

const Modal = (props) => (
    <div>
        {props.modalActive ? (
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
                    <button onClick={props.confirmDelete}>Delete</button>
                    <button onClick={props.hideModal}>Back</button>
                </div>
            </div>
        </div> ) : (null)}
    </div>
)

export default Modal;