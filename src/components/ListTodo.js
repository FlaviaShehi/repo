import React, { Fragment, useEffect, useState } from 'react'

// import EditTodo from './EditTodo'

import { Button } from 'react-bootstrap'

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
      const response = await fetch('http://localhost:5001/todos')
      const jsonData = await response.json()

      // setTodos(jsonData)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getTodos()
  }, [])

  return (
    <Fragment>
      <table class='.table '>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <td>John</td>
            <td>Doe</td>
            <td>john@example.com</td>
          </tr> */}

          {todos.map((todo) => (
            <tr key={todo.todo_id}>
              <td>{todo.task_name}</td>
              <td>
                Edit
              </td>
              <td>
                <button
                  className='btn btn-danger'
                  onClick={() => deleteTodo(todo.todo_id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Fragment>
  )
}

export default ListTodo