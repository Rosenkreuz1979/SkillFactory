import React, { useContext, useState } from 'react'
import { Context } from '../context'
import './InputField.css'

export default function InputField(){
const {dispatch} = useContext(Context)
const [state,setState] = useState(false)
const [name,setName] = useState('')
const [text,setText] = useState('')
const [warning,setWarning] = useState('')

    return (
        <React.Fragment>
         <button className="button add-button" onClick={()=>{setState(true); setWarning('')}}>Add Task</button>
        {state && ( 
         <div className='modal'>
           <div className='modal-body'>
             <div className="task-header addtask-header">Add Task<i className="fas fa-times-circle close-tab" title="click to close" onClick={()=>setState(false)}></i></div>
             <label>Task Name</label><input className="addtask-field" type="text" value={name} onChange={event=>setName(event.target.value)}/>
             <label>Task Description</label><textarea className="addtask-textarea" value={text} onChange={event=>setText(event.target.value)}/>
             <div className="addtask-warning">{warning}</div>       
             <button className="button addtask" onClick={() => {
                 if (name!=='' && text!=='') { 
                 dispatch({
                     type: 'add',
                     payload: {'target':'backlog','name':`${name}`, 'description':`${text}`}
                    });
                     setState( !state )
                     //setName('');
                     //setText('')
                    }else { setWarning('Please enter non-empty data into the fields')}
                } 
                }>
               Add Task
             </button>
           </div>
         </div>
        )}
      </React.Fragment>
         
    )
}