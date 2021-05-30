import React, { Fragment, useState, useEffect } from 'react'
import ListCategory from './ListCategory'
import { propTypes } from 'react-bootstrap/esm/Image'
import { Card } from 'react-bootstrap'
import ListTodo from './ListTodo'



const All = () => {
    const [categories, setCategories] = useState([])
    const [todos, setTodos] = useState([])

// categories

    const getCategories = async () => {
        try {
          const response = await fetch('http://localhost:5000/categories')
          const jsonData = await response.json()
    
          setCategories(jsonData)
        } catch (err) {
          console.error(err.message)
        }
      }
    
      useEffect(() => {
        getCategories()
      }, [])

      //delete category
      const deleteCategory = async (id) => {
        try {
          const deleteCategory = await fetch(
            `http://localhost:5000/categories/${id}`,
            {
              method: 'DELETE',
            }
          )
    
          setCategories(
            categories.filter((category) => category.category_id !== id)
          )
        } catch (err) {
          console.error(err.message)
        }
      }


    return (
        <Fragment>
           <Card className="forma text-center">
               <Card.Header>
                   <ListCategory />
               </Card.Header>
               <Card.Body>
                   <ListTodo />
               </Card.Body>
           </Card>
        </Fragment>
    )
}


export default All