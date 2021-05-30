import React, { Fragment } from 'react'
import './forms.css'
import {Card} from 'react-bootstrap' 
import logojaall from './logojaall.svg'
import ListTodo from './ListTodo'



const FaqeTask = () =>{

    return (
        <Fragment>
            <Card.Header className="head">
            <img src={logojaall} className='foto'  /> 
            </Card.Header>
            <Card.Body>
                <ListTodo />
            </Card.Body>
        </Fragment>
    )
}


export default FaqeTask