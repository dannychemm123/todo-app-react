import React from 'react'
import './App.css';
const Task = (props) => {
  return (
    <div style={{backgroundColor: props.completed?'green' :'white'}} key={props.id} className="taskItem">
    <h1>{props.taskName}</h1>
    <button className='comp' onClick={() => props.completeTask(props.id)}>Completed✅</button>
    <button onClick={() => props.deleteTask(props.id)}> Delete X</button>
  </div>
  )
}

export default Task