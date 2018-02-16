import React from 'react';

class TodoForm extends React.Component {
    constructor(props){
        super(props);
       
    }

    render() {
        return(
            <div>
                <h1>Todo Board</h1>
                <TodoForm />
            </div>
        );
    }
}

export default TodoForm;