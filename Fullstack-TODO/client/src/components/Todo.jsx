import React, { useState ,useEffect} from "react";
import axios from "axios";
import "./Todo.css";


function Todo() {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo]= useState([])


    useEffect(()=>{
      axios.get("http://localhost:3001/getTodos")
      .then((response) =>{
        setTodos(response.data)
      })
    },[todos])
    const createTodo = async()=>{
        await axios.post('http://localhost:3001/createTodos', {
            name: newTodo,
            checked: true,
        }).then(
            (response)=>{
            }
            )
            setTodos([...todos],newTodo)
            setNewTodo([])
        }
        const completeTodo = async(taskId)=>{
            await axios.put(`http://localhost:3001/updateTodos/${taskId}`)
        }
        const deleteTodo = async(taskId)=>{
            await axios.delete(`http://localhost:3001/deleteTodo/${taskId}`)
        }

  return (
    <div className="todo-container">
      <div className="header">TODO - ITEMS</div>
      <div className="create-task">
        <input placeholder="Enter TODO" value={newTodo} onChange={(e)=>setNewTodo(e.target.value)} />
        <button onClick={createTodo}>+</button>
      </div>
      <div className="tasks">
        {todos.map((task, index) => (
          <div
            key={task._id}
            className="task"
            style={{ textDecoration: !task.checked ? "line-through" : "" }}
          >
            {task.name}
            <button onClick={()=>deleteTodo(task._id)}>X</button>
            <button onClick={()=>completeTodo(task._id)}>-</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Todo;
