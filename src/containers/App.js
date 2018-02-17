import React from 'react';
import style from './App.css';
import Title from '../components/Title';
import TodoList from '../components/TodoList';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    text: "hello",
                    id: 992987
                },
                {
                    text: "do something",
                    id: 633687
                }
            ]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }

    render() {
        return (
            <div className={style.TodoApp}>
                <Title items={this.state.data} />
                <TodoList items={this.state.data} remove={this.removeTodo.bind(this)}/>
            </div>
        );
    }
}

export default App;