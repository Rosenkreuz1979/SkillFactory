import React, {useEffect, useReducer} from 'react'
import './App.css'
import TaskList from './components/TaskList'
import { Context } from './context'
import reducer from './reducer'


export default function App() {

 let stringToParse
 if (window.localStorage.getItem('todos')){ 
    stringToParse = window.localStorage.getItem('todos')
 } else {
    stringToParse = `{
      "result":[
         {
            "title":"backlog",
            "issues":[ 
            ]
         },
         {
            "title":"ready",
            "issues":[
               
            ]
         },
         {
            "title":"in progress",
            "issues":[
               
            ]
         },
         {
            "title":"finished",
            "issues":[
               
            ]
         }
      ]
   }`
 }


const [state,dispatch] = useReducer(reducer, JSON.parse(stringToParse)) 
   
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))    
  },[state])
 
  return (
  <Context.Provider value={{dispatch}}>
    <div className="App">      
      {state.result.map(item => <TaskList key={item.title} name={item.title} data={item.issues} />)}
    </div>    
  </Context.Provider>
  );
};


