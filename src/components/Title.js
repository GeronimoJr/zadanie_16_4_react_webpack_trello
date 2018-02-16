import React from 'react';
import TodoForm from './TodoForm';

class Title extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return(
            <div>
                <h1>Todo Board {this.props.counter}</h1>
            </div>
        );
    }
}

export default Title;