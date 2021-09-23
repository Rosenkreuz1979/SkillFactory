import React from 'react'
import Task from './Task'
import './TaskList.css'

function TaskList({name,data}){
  return (
      <div className="container">
          <div className={`task-header ${name}`}>{name}</div>
          <div className="task-list">
              {(data) ? data.map(item => <Task key={item.id} data={item}/> ) : ''}
          </div>
      </div>
  )
}

export default TaskList