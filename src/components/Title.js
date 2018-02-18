import React from 'react';
import App from '../containers/App';
import style from './Title.css';

const Title = (props) => (
    <div className={style.title}>
        <h1><span>{props.items.length}</span> Todo Board</h1>
        <div className={style.buttons}>
            <button id="btnForm" className={style.btn} onClick={props.listForm}>Add List</button>
            <button id="btnTaskForm" className={style.btn} onClick={props.taskForm}>Add Task</button>
        </div>
    </div>
);

export default Title;