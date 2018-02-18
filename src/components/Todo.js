import React from 'react';
import TodoList from './TodoList';
import App from '../containers/App';
import style from './Todo.css';


function Todo(props) {

        if (props.item == props.taskID) {
            return (
                <div onClick={() => props.remove(props.id)} className={style.todo}>
                    <p>{props.taskText}</p>
                </div>
            );
        } else {
            return (null);
        }
    }



export default Todo;