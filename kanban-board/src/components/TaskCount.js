import React from 'react'
import './TaskCount.css'

export default function TaskCount(prop){
    let storage = window.localStorage.getItem('todos')
    return (
        <div className="task-count">{(prop.type==='active')?`Active Tasks: ${(storage)?JSON.parse(storage).result[0]['issues'].length: 0}`:`Finished Tasks: ${(storage)?JSON.parse(storage).result[3]['issues'].length: 0}`}</div>
    )
}