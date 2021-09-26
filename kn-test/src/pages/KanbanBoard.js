import React, { Component } from 'react';
import Main from '../components/main/Main';
import { v4 } from 'uuid';

class KanbanBoard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backlog: [
        { id: v4(), text: 'Login page – performance issues' },
        { id: v4(), text: 'Sprint bugfix' },
      ],
      ready: [
        { id: v4(), text: 'Login page – performance issues' },
        { id: v4(), text: 'Login page – performance issues' },
        { id: v4(), text: 'Login page – performance issues' },
      ],
      inProgress: [
        { id: v4(), text: ' User page – performance issues' },
        { id: v4(), text: ' Auth bugfix' },
      ],
      finished: [
        { id: v4(), text: ' Main page – performance issues' },
        { id: v4(), text: 'Main page bugfix' },
      ],
    };
  }

  createTask = (newTask) => {
    this.setState((prevState) => ({
      backlog: [...prevState.backlog, newTask],
    }));
  };

  createTaskReady = (newTask) => {
    console.log(newTask + 'main');

    this.setState((prevState) => ({
      ready: [...prevState.ready, newTask],
    }));
    this.deleteTask(newTask)
  };

  deleteTask=(Task)=>{
    console.log(Task.text);
    let filteredArray = this.state.backlog.filter(item => item.text !== Task.text)
    console.log(filteredArray);
    this.setState({backlog: filteredArray});

  }

  render() {
    return (
      <div>
        <Main
          createTaskReady={this.createTaskReady}
          createTask={this.createTask}
          tasksBacklog={this.state.backlog}
          tasksReady={this.state.ready}
          tasksInProgress={this.state.inProgress}
          tasksFinished={this.state.finished}
        />
      </div>
    );
  }
}

export default KanbanBoard;
