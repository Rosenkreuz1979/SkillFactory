import React, {useState,useContext} from 'react'
import {Context} from '../context'
import './DropDown.css'


export default function DropDown(params) {
    
const {dispatch} = useContext(Context)
const [opened,setOpened] = useState(false)
const [selected,setSelected] = useState ('')
let source
let disabled = 0
let arrays = []

if (window.localStorage.getItem('todos')){
     arrays=JSON.parse(window.localStorage.getItem('todos'));

if (arrays.length) {
switch (params.data){
    case 'ready':
        disabled = 0
        source = 'backlog'
        break
    case 'in progress':
        disabled = 1
        source = 'ready'
        break
    default:
        disabled = 2
        source = 'in progress'
}

arrays = arrays[disabled].issues
disabled = arrays.length
}
}



    return (
      <div>
      {!opened ? <button className="button add-button" onClick={()=>setOpened(true)} disabled={disabled ? false : true} >Add Task</button> : 
      <><select className="selectbox" onChange={(event) => setSelected(event.target.value)}>
          <option selected value=''/>    
      { arrays.map(issue => <option value={issue.id} key={issue.id.toString()} >{issue.id} - {issue.name}</option> )}
      </select>
      <button className="button addtask" onClick={()=>{ 
          console.log(selected);
          dispatch({
                     type: 'move',
                     payload: {'source':`${source}`,'target':`${params.data}`,'id':`${selected}`}
                    })}}>Add Item</button></>}
      </div>
    )
}
