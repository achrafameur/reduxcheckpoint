import './App.css';
import {useDispatch, useSelector} from 'react-redux';
import TodoList from './Components/ListTask';
import AddTask from './Components/AddTask';
import { filterTodo } from './Redux/actions/Action';
import { Button } from 'react-bootstrap';


function App() {
  const todos = useSelector(state=>state.todos);
  const filter = useSelector(state=>state.filter);
  const dispatch = useDispatch()
  
  return (

    <div className="App">
      <Button style={{width:'100px',marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(filterTodo('All'))} className="btn btn-secondary">All</Button>
      <Button style={{width:'100px',marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(filterTodo(true))}  className="btn btn-secondary">Done</Button>
      <Button style={{width:'100px',marginLeft:'10px', marginRight:'10px'}} onClick={()=>dispatch(filterTodo(false))}  className="btn btn-secondary">UnDone</Button><br/><br/>
      <TodoList todos={filter==='All'? todos : todos.filter((elm)=> elm.isDone===filter)}/>
      <hr></hr>
      <br></br>
      <span style={{fontWeight:'bold', fontFamily:'Comic Sans MS',}}> ADD NEW TASK </span>
      <br></br>
      <AddTask/>
    </div>
  );

}

export default App;
