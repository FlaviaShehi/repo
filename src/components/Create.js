import React, { Fragment, useState } from 'react'
import {Card} from 'react-bootstrap'
import './forms.css'
import ListCategory from './ListCategory'

const Create = () => {
    const [description, setDescription] = useState({
        task_name: "",
        notes: "",
        date: "",
        category_id: "",
      });



      const onSubmitForm = async (e) => {
        e.preventDefault()
        try {
          const body = { description }
    
          const response = await fetch('http://localhost:5001/todos', {
            method: 'POST',
            header: { ' Content-Type': 'application/json' },
            body: JSON.stringify(body),
          })
          console.log(response)
        } catch (err) {
          console.error(err.message)
        }
      }  

    
    return ( 
        <Fragment>
        <Card className="forma">
                 <Card.Header  className="text-center">
                     <h2>CREATE</h2>
                     <h2>New Task</h2>
                     <input type="text" className="text-center" value={description.task_name}  onChange={(e) => setDescription(e.target.value)} />
                 </Card.Header>
                 <Card.Body>
<h4>Notes:</h4>
<input type="text" value={description.notes} onChange={(e) => setDescription(e.target.value)} />
<h4>Date:</h4>
<input type="date" value={description.date} onChange={(e) => setDescription(e.target.value)} />
<h4> Category:</h4>
<ListCategory />
</Card.Body>
<Card.Footer className="text-center"><div>
<button   className="create" onClick={onSubmitForm}>
              Create 
            </button></div>
            </Card.Footer>

                 
        </Card>
        </Fragment>
    )
}

export default Create