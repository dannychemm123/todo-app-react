import React from 'react'

const Task = (props) => {
  return (
    <div key={props.id} className="taskItem">
    <h1>{props.taskName}</h1>
    <button onClick={() => props.deleteTask(props.id)}>X</button>
  </div>
  )
}

export default Task