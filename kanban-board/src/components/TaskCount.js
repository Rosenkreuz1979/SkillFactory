import React from 'react'
import './TaskCount.css'

export default function TaskCount(prop){
    return (
        <div className="task-count">{(prop.type==='active')?`Active Tasks: ${JSON.parse(window.localStorage.getItem('todos')).result[0]['issues'].length}`:`Finished Tasks: ${JSON.parse(window.localStorage.getItem('todos')).result[3]['issues'].length}`}</div>
    )
}