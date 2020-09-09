import React from 'react';
//import deleteTodo from './App';

function Todo(props) {
    const {deleteTodo, text} = props;
    return (
        <div class="ui relaxed divided list">
            <div class="item">
                
                <li onClick={deleteTodo}>{text}</li>
            </div>
        </div>
    )
}

export default Todo