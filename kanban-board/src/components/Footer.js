import React from 'react'
import './Footer.css'
import TaskCount from './TaskCount'

export default function Footer(){
    return (
        <div className="footer">
            <div className="task-counter">
                <TaskCount type="active"/>
                <TaskCount type="finished"/>
            </div>
            <div className="author">
                Kanban Board by <strong>AlexVK FR-68</strong>, 2021
            </div>
        </div>
    )
}