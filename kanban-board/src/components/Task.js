import React from 'react'
import './Task.css'


export default function Task({data}) {
    
     return(
        
        <div className='task'>{data.id} - {data.name}</div>
    )
    
}
