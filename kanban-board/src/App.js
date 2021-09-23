import React from 'react'
import './App.css'
import TaskList from './components/TaskList';


function App(data) {
  return (
    <div class="App">      
     {data.data.map(item => <TaskList key={item.title} name={item.title} data={item.issues} />)}
    </div>    
  );
}

export default App;
