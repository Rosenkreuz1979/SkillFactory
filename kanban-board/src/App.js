import React, {useEffect, useReducer} from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'
import { Context } from './context'
import reducer from './reducer'


export default function App() {

 let stringToParse
 if (window.localStorage.getItem('todos')){ 
    stringToParse = window.localStorage.getItem('todos')
 } else {
    stringToParse = `[
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
      ]`
 }


const [state,dispatch] = useReducer(reducer, JSON.parse(stringToParse)) 

 useEffect(() => {    
   localStorage.setItem('todos', JSON.stringify(state))    
 },[state])
 
  return (
  <Context.Provider value={{dispatch}}>
   <Navbar />
    <div className="App">      
      {state.map(item => <TaskList key={item.title} name={item.title} data={item.issues} />)}
    </div>
    <Footer data={state}/>
  </Context.Provider>
  );
};


