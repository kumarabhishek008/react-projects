import React, { useState } from 'react';
import Todo from './Todo';
import './App.css';

function App() {
  const [todos , setTodos] = useState(['hi there']);
  const [input,setInput] = useState('');

  const addTodo = (event) =>{

    event.preventDefault();
    console.log("i  m working")
    if (input == ""){
      alert("type something");
    }
    else{
      setTodos([...todos,input]);
      setInput('');
    }
    
  }
  const deleteTodo = (event) => {
    event.preventDefault();
      
    todos.filter(todo => event.target.remove());
    // setTodos([...a]);
      

  }
  return (
    <div className=" App">
     <h1 className="ui">hello world </h1>
     <div className="ui input"><input type="text" placeholder="type here something" value={input} onChange={event => setInput(event.target.value)}></input></div>
     <button disabled={!input} className="ui button primary" onClick={addTodo}>add todo</button>
     <ul>
       {todos.map(todo => (
         <Todo text={todo} deleteTodo={deleteTodo}/>
         //<div className="ui raised segment"><li onClick={deleteTodo}>{todo}<i className="trash alternate icon" ></i></li></div>
       ))}
     </ul>
    </div>
  );
}

export default App;

