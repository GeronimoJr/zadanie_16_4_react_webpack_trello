import React from 'react';
import style from './App.css';
import Title from '../components/Title';

class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
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
        let counter = this.state.data;
        let lp = counter.length;
        return (
            <div className={style.TodoApp}>
                <Title counter={lp} />
            </div>
        );
    }
}

export default App;