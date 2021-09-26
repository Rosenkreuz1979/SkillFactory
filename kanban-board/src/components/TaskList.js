import React from 'react'
import Task from './Task'
import './TaskList.css'
import InputField from './InputField'

function TaskList({name,data}){
  return (
      <div className="container">
          <div className={`task-header ${name.replace(/\s/g,'')}`}>{name}</div>
          <div className="task-list">              
              { (data.length) ? data.map(item => <Task attr={name} key={item.id} data={item} /> ) : <div className="notasks">No tasks available</div> }
          </div>
          {(name==='backlog') ? <InputField /> : <div className="someThnig"></div>}
      </div>
  )
}

export default TaskList