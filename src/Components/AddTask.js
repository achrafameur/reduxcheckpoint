import React, { useState } from 'react'
import { FormControl, InputGroup , Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { addTodo } from '../Redux/actions/Action'

const AddTodo = () => {
    const [newTodo, setNewTodo] = useState("")
    const dispatch = useDispatch()
    return (
        <div >
        <InputGroup className="mb-3">
            <FormControl
            placeholder="Enter new todo"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
            onChange={(e)=>setNewTodo({description:e.target.value})}
            style={{width:"300px"}}
            />
            <Button className="btn btn-success" style={{ marginLeft:'10px', marginRight:'10px'}} onClick={()=> dispatch(addTodo(newTodo))} > ADD new To Do</Button>
        </InputGroup>
        </div>
    )
}

export default AddTodo 