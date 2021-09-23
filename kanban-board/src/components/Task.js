import React from 'react'

export default function Task({data}) {
    return(
        console.log(data),
        <div>{data.id} - {data.name}</div>
    )
    
}
