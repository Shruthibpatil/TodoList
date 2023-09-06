import React, { useState } from 'react'
import "./todo.css"
import Forms from './Forms'
import List from './List'



const Todo = () => {
  let[input,setInput]=useState("");
  let[todo,setTodo]=useState([])
  let[editTodo,setEditTodo]=useState(null)

  return (
    
    <div className="container">
        <div className="todo-wrapper">
          
            <div className="header">
        <h1>Todo List</h1>
            </div>
            <div>
              <Forms
              input={input}
              setInput={setInput}
              todo={todo}
              setTodo={setTodo}
              editTodo={editTodo}
              setEditTodo={setEditTodo}

              />
            </div>
            <div>
              
              <List 
              todo={todo} 
              setTodo={setTodo} 
              setEditTodo={setEditTodo}
              />
            </div>
        </div>
      
    </div>
    
  )
}

export default Todo
