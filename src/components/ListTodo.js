import React, { Fragment, useEffect, useState } from 'react'
import EditTodo from './EditTodo'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Button } from 'react-bootstrap'
const axios = require('axios')




const ListTodo = () => {
    const [todos, setTodos] = useState([])

    //deleteTodo
  
    const deleteTodo = async (id) => {
      try {
        const deleteTodo = await fetch(`http://localhost:5001/todos/${id}`, {
          method: 'DELETE',
        })
  
        setTodos(todos.filter((todo) => todo.todo_id !== id))
      } catch (err) {
        console.error(err.message)
      }
    }
  
    const getTodos = async () => {
      try {
        const response = await axios.get('http://localhost:5001/todos')
        const jsonData = await response.json()
  console.log(response)
        setTodos(jsonData)
      } catch (err) {
        console.error(err.message)
      }
    }
  
    useEffect(() => {
        if (!todos) {
          getTodos()
        }
      }, [])
  
    console.log(todos)
    return (
      <Fragment>
       {todos &&
        todos.map((todo) => (
          <button
            className='butoni'
            key={todo.task_name}
            value={todo.task_name}
            onClick={(todo) => {
              getTodos(todo.target.value)
            }}
          >
            {todo.task_name}
          </button>
        ))}
      </Fragment>
    )
}

export default ListTodo