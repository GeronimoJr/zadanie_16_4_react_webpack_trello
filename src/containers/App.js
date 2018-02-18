import React from 'react';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import TodoForm from '../components/TodoForm';
import Modal from '../components/Modal';
import uuid from 'uuid'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    text: "Monday",
                    id: 992987
                },
                {
                    text: "Tuesday",
                    id: 633687
                },
                {
                    text: "Wednesday",
                    id: 826773
                }
            ],
            tasks: []
        };
    }
    addTodo(val) {
        if (val.length > 0) {
            const todo = {
                text: val,
                id: uuid.v4(),
            };
            const data = [...this.state.data, todo];
            this.setState({data});
            const listForm = document.getElementById('listForm');
            listForm.style.display = 'none';
        } else {
            alert('The list must have one character at least');
        }
    }
    addTask(val, dataID) {
        if (val.length > 0) {
            const task = {
                text: val,
                dataID: dataID,
                id: uuid.v4()
            };
            const tasks = [...this.state.tasks, task];
            this.setState({tasks});
            const taskForm = document.getElementById('taskForm');
            taskForm.style.display = 'none';
        } else {
            alert('The task must have one character at least');
        }
    }
    modal() {
        const modal = document.getElementById('modal');
        modal.style.display = 'block';
    }
    removeTodo(id) {
        const check = this.state.tasks.filter(task => task.dataID == id);
        if (check.length > 0) {
            this.modal();
            const accept = document.getElementById('accept');
            const modal = document.getElementById('modal');
            const back = document.getElementById('back');
            accept.addEventListener("click", () => {
                modal.style.display = 'none';
                const clearTasks = this.state.tasks.filter(task => task.dataID != id);
                this.setState({tasks: clearTasks});
                const remainder = this.state.data.filter(todo => todo.id !== id);
                this.setState({data: remainder});
            });
            window.addEventListener("click", (event) => {
                if (event.target == modal) {
                    modal.style.display = "none";
                }
            });
            back.addEventListener("click", () => {modal.style.display = "none"});
        } else {
            const clearTasks = this.state.tasks.filter(task => task.dataID != id);
            this.setState({tasks: clearTasks});
            const remainder = this.state.data.filter(todo => todo.id !== id);
            this.setState({data: remainder});
        }
    }
    removeTask(id) {
        const remainder = this.state.tasks.filter(task => task.id !== id);
        this.setState({tasks: remainder});
    }
    showTaskForm() {
        const taskForm = document.getElementById('taskForm');
        const listForm = document.getElementById('listForm');
        if (listForm.style.display = 'none') {
            taskForm.style.display = 'block';
        };
        window.addEventListener("click", (event) => {
            if (event.target == taskForm) {
                taskForm.style.display = "none";
            }
        });
    }
    showListForm() {
        const listForm = document.getElementById('listForm');
        const taskForm = document.getElementById('taskForm');
        if (taskForm.style.display = 'none') {
            listForm.style.display = 'block';
        };
        window.addEventListener("click", (event) => {
            if (event.target == listForm) {
                listForm.style.display = "none";
            }
        });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title items={this.state.tasks} taskForm={this.showTaskForm} listForm={this.showListForm} />
                <TodoList items={this.state.data} removeTodo={this.removeTodo.bind(this)} removeTask={this.removeTask.bind(this)} tasks={this.state.tasks}/>
                <TodoForm items={this.state.data} addTask={this.addTask.bind(this)} addList={this.addTodo.bind(this)} />
                <Modal />
            </div>
        );
    }
}

export default App;