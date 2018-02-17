import React from 'react';
import App from '../containers/App';
import style from './TodoList.css';



const TodoList = (props) => (
    <div>
        <ul>
            {props.items.map((task) => 
            <li key={task.id}>{task.text} <button onClick={() => props.remove(task.id)}>X</button></li>)}
        </ul>
    </div>
);


export default TodoList;