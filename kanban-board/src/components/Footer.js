import React from 'react'
import './Footer.css'
import TaskCount from './TaskCount'

export default function Footer(data){    
    return (
        <div className="footer">
            <div className="task-counter">
                <TaskCount type="active" count={data.data[0].issues.length}/>
                <TaskCount type="finished" count={data.data[3].issues.length}/>
            </div>
            <div className="author">
                Kanban Board by <strong>AlexVK FR-68</strong>, 2021
            </div>
        </div>
    )
}