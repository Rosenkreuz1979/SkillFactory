import React, {useState, useEffect, useReducer} from 'react'
import { ContextProvider } from 'react-is'
import './App.css'
import TaskList from './components/TaskList'
import { Context } from './context'
import reducer from './reducer'


export default function App() {
 /* const mockData = `{
    "result":[
       {
          "title":"backlog",
          "issues":[
             {
                "id":"task1",
                "name":"Sprint bugfix",
                "description":"Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком."
             },
             {
                "id":"task2",
                "name":"Something else",
                "description":"Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком."
             },
             {
                "id":"task3",
                "name":"Also a task",
                "description":"Это был темный лес, издали казавшийся непроходимым. Там Пахапиль охотился, глушил рыбу, спал на еловых ветках. Короче – жил, пока русские не выгнали оккупантов. А когда немцы ушли, Пахапиль вернулся. Он появился в Раквере, где советский капитан наградил его медалью. Медаль была украшена четырьмя непонятными словами, фигурой и восклицательным знаком."
             }
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
 }` */
  
  const [state,dispatch] = useReducer(reducer, JSON.parse(window.localStorage.getItem('todos')))


  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state))
  }, [state])
 
  return (
  <Context.Provider value={{dispatch}}>
    <div className="App">      
      {state.result.map(item => <TaskList key={item.title} name={item.title} data={item.issues} />)}
    </div>    
  </Context.Provider>
  );
};


