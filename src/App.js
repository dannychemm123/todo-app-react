import './App.css';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import logo from './images/logo7.png';
import Task from './Task';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" className="logo" />
      <h1>Todo App</h1>
    </nav>
  );
}

function App() {
  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  const addTask = () => {
    if (newTask.trim() === "") {
      // Do not add empty tasks
      return;
    }

    const task = {
      id: uuidv4(),
      taskName: newTask,
    };
    const newTodoList = [task, ...todoList];
    setTodoList(newTodoList);
    setNewTask(""); // Clear the input field after adding a task
  };

  const deleteTask = (id) => {
    const newTodoList = todoList.filter((task) => task.id !== id);
    setTodoList(newTodoList);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <div className="addTask">
          <input
            value={newTask}
            onChange={handleChange}
            type="text"
            className="addTask"
            placeholder="Type todo"
          />
          <button onClick={addTask}>Add Task</button>
        </div>

        <div className="list">
          {todoList.map((task) => (
           <Task taskName = {task.taskName} id = {task.id} deleteTask = {deleteTask}/>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
