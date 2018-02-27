import React from 'react';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';
import Form from '../components/Form';
import Modal from '../components/Modal';
import uuid from 'uuid'

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            taskFormActive: false,
            listFormActive: false,
            modalActive: false,
            currentListId: "",
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
            this.setState({
                data: data,
                listFormActive: false
            });
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
            this.setState({
                tasks: tasks,
                taskFormActive: false
            });
            
        } else {
            alert('The task must have one character at least');
        }
    }
    schowModal() {
        this.setState({
            modalActive: true
        })
        window.addEventListener("click", (event) => {
            if (event.target == document.querySelector("#modal")) {
                this.setState({
                    modalActive: false
                })
            }
        });
    }
    hideModal() {
        this.setState({
            modalActive: false
        })
    }
    confirmDelete() {
        this.setState({modalActive: false});
        const clearTasks = this.state.tasks.filter(task => task.dataID != this.state.currentListId);
        this.setState({tasks: clearTasks});
        const remainder = this.state.data.filter(todo => todo.id !== this.state.currentListId);
        this.setState({data: remainder});
    }
    removeTodo(id) {
        this.setState({currentListId: id});
        const check = this.state.tasks.filter(task => task.dataID == id);
        if (check.length > 0) {
            this.schowModal();
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
        this.setState({
            taskFormActive: true,
            listFormActive: false
        });
        window.addEventListener("click", (event) => {
            if (event.target == document.querySelector("#taskForm")) {
                this.setState({
                    taskFormActive: false
                })
            }
        });
    }
    showListForm() {
        this.setState({
            listFormActive: true,
            taskFormActive: false
        });
        window.addEventListener("click", (event) => {
            if (event.target == document.querySelector("#listForm")) {
                this.setState({
                    listFormActive: false
                })
            }
        });
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title showListForm={this.showListForm.bind(this)} showTaskForm={this.showTaskForm.bind(this)} items={this.state.tasks} listForm={this.showListForm} />
                <TodoList items={this.state.data} removeTodo={this.removeTodo.bind(this)} removeTask={this.removeTask.bind(this)} tasks={this.state.tasks}/>
                <Form listFormActive={this.state.listFormActive} taskFormActive={this.state.taskFormActive} items={this.state.data} addTask={this.addTask.bind(this)} addList={this.addTodo.bind(this)} />
                <Modal hideModal={this.hideModal.bind(this)} confirmDelete={this.confirmDelete.bind(this)} modalActive={this.state.modalActive} />
            </div>
        );
    }
}

export default App;