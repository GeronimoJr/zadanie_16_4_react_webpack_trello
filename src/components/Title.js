import React from 'react';
import App from '../containers/App';

const Title = (props) => (
    <div>
        <h1>Todo Board ({props.items.length})</h1>
    </div>
);

export default Title;