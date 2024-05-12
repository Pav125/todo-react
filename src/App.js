import React, { useState } from 'react'

const App = () => {
  const [todos, updateTodo] = useState([
    {
      id: 0,
      text: 'Buy milk',
    },
    {
      id: 1,
      text: 'Buy eggs',
    },
  ])
  const [todoInput, updateInput] = useState('')

  const generateId = () => {
    const maxId = todos.reduce((max, todo) => (max < todo.id ? todo.id : max), 0);
    return maxId + 1;
  }

  const deleteTodo = (id)=>{
    console.log("Deleted a task");
    updateTodo(todos.filter(todo=>todo.id!==id))
  }

  return (
    <>
      <div>
        <input type='text' value={todoInput} onChange={(e) => {
          updateInput(e.target.value);
        }} />
        <button onClick={() => {
          console.log("Added a new task");
          const newId = generateId();
          updateTodo([
            ...todos,
            {
              id: newId,
              text: todoInput,
            }
            
          ]);
          updateInput('');
        }} >Add</button>
      </div>
      <div>
        <ul>
          {
            todos.map((todo) => {
              return (
                <div key={todo.id}>
                  <li>{todo.id} : {todo.text}</li>
                  <button onClick={()=>{
                    deleteTodo(todo.id)
                  }} >❌</button>
                </div>
              )
              
            })
          }
        </ul>
      </div>
    </>
  )

}

export default App