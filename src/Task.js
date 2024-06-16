import React from 'react'

const Task = (props) => {
  return (
    <div style={{backgroundColor: props.completed?'green' :'white'}} key={props.id} className="taskItem">
    <h1>{props.taskName}</h1>
    <button onClick={() => props.completeTask(props.id)}>Completed✅</button>
    <button onClick={() => props.deleteTask(props.id)}>X</button>
  </div>
  )
}

export default Task