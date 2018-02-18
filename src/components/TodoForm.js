import React from 'react';
import style from './TodoForm.css';
import App from '../containers/App';



const TodoForm = (props) => (
    <div className={style.todoForm}>
        <div id="taskForm" className={style.taskForm}>
            <div className={style.taskFormContent}>
                <input  className={style.text} type="text" id="new_task" placeholder="Your new task" />
                <select className={style.select}>{props.items.map((list) => <option key={list.id} value={list.id}>{list.text}</option>)}</select>
                <input className={style.submit} type="submit" value="Add" onClick={() => 
                    props.addTask(document.getElementById('new_task').value, 
                    document.querySelector('select').options[document.querySelector('select').selectedIndex].value)} />
            </div>
        </div>
        <div id="listForm" className={style.listForm}>
            <div className={style.listFormContent}>
                <input className={style.text} placeholder="Your new list" type="text" id="new_board" /><input className={style.submit} type="submit" value="Add" onClick={() => props.addList(document.getElementById('new_board').value)} />
            </div>
        </div>
    </div>
);


export default TodoForm;