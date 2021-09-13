import React, { useState } from "react";
import "./style.css";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, doneTodo} from "../Redux/actions/Action";
import { FormControl, Table , Button } from "react-bootstrap";

    const Task = ({todo}) => {
        const { id, isDone}=todo
        const [input, setInput] = useState(todo);
        const dispatch = useDispatch()
    return (
        <div>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th style={{ color:"#D188F5"}}>To Do Description</th>
                        <th style={{ color:"#D188F5"}}>Actions On To Do</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <FormControl placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" value={input.description} onChange={(e)=>setInput({...input,description:e.target.value})} type="text"/>
                        </td>
                        <td>
                            <Button style={{width:'100px', marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(deleteTodo(id))} className="btn btn-danger">Delete</Button>
                            <Button style={{width:'100px', marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(editTodo(input))} className="btn btn-info">Edit</Button>
                            <Button style={{width:'100px', marginLeft:'10px', marginRight:'10px'}}  className="btn btn-warning" onClick={() => dispatch(doneTodo(id))}>
                                {isDone ? "UnDone" : "Done"}    
                            </Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
            
        
        </div>
    ); 
};

export default Task;