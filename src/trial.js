
import './App.css';
import { useState } from 'react';

function App() {
  const [todoList,setTodoList] = useState([])
  const [newTask,setNewTask] = useState("")

  const handleChange = (event) =>{
    setNewTask(event.target.value)
  
  }
  const addTask =() =>{
    
    const task = {
      id:todoList.length === 0 ? 1:todoList[todoList.length - 1].id+1,
      taskName: newTask,
    }
    const newTodoList = [task,...todoList];
    setTodoList(newTodoList);
    //In simple terms we can do it this way
    // setTodoList([...todoList,newTask];)
  
  }
  const deleteTask =(id) =>{
    const newTodoList = todoList.filter((task) => {
      return task.id !== id
    //   if (task === taskName){
    //     return false
    //   } else {
    //     return true
    //   }
// We can also do it this way
  // setTodoList(todoList.filter((task) => task !== taskName))
     })
    setTodoList(newTodoList) 

  }
  return (
    <div className="App">
     <div className='addTask'>
      <input onChange={handleChange} type="text" className="addTask" placeholder="Type todo"/>
      <button onClick={addTask}>Add addTask</button>
   
     </div>

     <div className='list'>
     {todoList.map((task) =>{
      return <div><h1>{task.taskName}</h1>
      <button onClick={()=> deleteTask(task.id)}>X</button>
      </div>
     })}
     </div>
     
    </div>
  );
}

export default App;
