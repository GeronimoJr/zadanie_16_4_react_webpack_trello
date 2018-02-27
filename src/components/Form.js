import React from 'react';
import style from './Form.css';
import App from '../containers/App';



const Form = (props) => (
    <div className={style.Form}>
    {props.taskFormActive ? (
        <div id="taskForm" onClick={props.hideTaskForm} className={style.taskForm}>
            <div className={style.taskFormContent}>
                <input  className={style.text} type="text" id="newTask" placeholder="Your new task" />
                <select className={style.select}>{props.items.map((list) => <option key={list.id} value={list.id}>{list.text}</option>)}</select>
                <input className={style.submit} type="submit" value="Add" onClick={() => 
                    props.addTask(document.querySelector("#newTask").value, 
                    document.querySelector('select').options[document.querySelector('select').selectedIndex].value)} />
            </div>
        </div> ) : (null)}
    {props.listFormActive ? (
        <div id="listForm" className={style.listForm}>
            <div className={style.listFormContent}>
                <input className={style.text} placeholder="Your new list" type="text" id="newBoard" /><input className={style.submit} type="submit" value="Add" onClick={() => props.addList(document.querySelector("#newBoard").value)} />
            </div>
        </div> ) : (null)}
    </div>
);


export default Form;