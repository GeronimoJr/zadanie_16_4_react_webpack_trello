import React from 'react';
import App from '../containers/App';
import style from './TodoList.css';
import Todo from './Todo';



const TodoList = (props) => (

    <div className={style.list}>
            {props.items.map((list) => 
            <div key={list.id} className={style.board}>
                <div className={style.title}>
                    <h2>{list.text} <button onClick={() => props.removeTodo(list.id)}>x</button></h2>
                </div>
                {props.tasks.map((task) =>
                <Todo key={task.id} id={task.id} item={list.id} taskID={task.dataID} taskText={task.text} remove={props.removeTask.bind(this)} />)}
            </div>)}
            
    </div>
);


export default TodoList;