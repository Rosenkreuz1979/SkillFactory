import React, { Component } from 'react';
import Card from './card/Card';
import s from './Main.module.scss';
import Input from '../../UI/input/Input';
import CardTask from './cardTask/CardTask';
import { v4 } from 'uuid';
import Button from '../../UI/button/Button';
import plus from '../../Images/Main/plus.png';
import Select from '../../UI/select/Select';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      btnClick: false,
      text: '',
      showSelectReady: true,
      showSelectInProgress: true,
      showSelectFinished: true,
    };
  }

  addNewTask = (e) => {
    e.preventDefault();
    const newTask = {
      text: this.state.text,
      id: v4(),
    };
    this.props.createTask(newTask);
  };

  addToReady = (e) => {
    console.log(e.target.value + 'main');
    const newTask = {
      text: e.target.value,
      id: v4(),
    };
    this.props.createTaskReady(newTask)
  };

  onInputChange = (e) => {
    this.setState({ text: e.target.value.trim() });
  };

  changeButton = () => {
    this.setState((prevState) => ({ btnClick: !prevState.btnClick }));
    this.setState({ text: '' });
  };

  showSelectReady = () => {
    this.setState((prevState) => ({ showSelectReady: !prevState.showSelectReady }));
  };
  showSelectInProgress = () => {
    this.setState((prevState) => ({ showSelectInProgress: !prevState.showSelectReady }));
  };
  showSelectFinished = () => {
    this.setState((prevState) => ({ showSelectFinished: !prevState.showSelectReady }));
  };


  addToInProgress = (e) => {
    console.log(e);
    console.log('bbb');
  };
  render() {
    const showSelectReady = this.state.showSelectReady;
    const showSelectInProgress = this.state.showSelectInProgress;
    const showSelectFinished = this.state.showSelectFinished;
    const btnClick = this.state.btnClick;
    const InputValue = this.state.text;
    const onInputChange = this.onInputChange;
    const addToReady = this.addToReady;
    let InputField = <Input InputValue={InputValue} onInputChange={onInputChange} />;

    const btnAdd = (
      <Button className={s.btnAdd} onClick={() => this.changeButton()}>
        <img src={plus} className={s.img} alt='plus' />
        Add Card
      </Button>
    );
    const btnSubmit = (
      <Button
        className={s.btnSubmit}
        onClick={(e) => {
          this.changeButton();
          this.addNewTask(e);
        }}
        disabled={!this.state.text}>
        Submit
      </Button>
    );

    const btnShowSelectReady = (
      <Button className={s.btnAdd} onClick={() => this.showSelectReady()}>
        <img src={plus} className={s.img} alt='plus' />
        Add Card
      </Button>
    );
    const btnShowSelectInProgress = (
      <Button className={s.btnAdd} onClick={() => this.showSelectInProgress()}>
        <img src={plus} className={s.img} alt='plus' />
        Add Card
      </Button>
    );
    const btnShowSelectFinished = (
      <Button className={s.btnAdd} onClick={() => this.showSelectFinished()}>
        <img src={plus} className={s.img} alt='plus' />
        Add Card
      </Button>
    );

    return (
      <div className='container'>
        <div className={s.main}>
          <div className={s.main__wrap}>
            <Card title={'Backlog'}>
              <CardTask>{this.props.tasksBacklog}</CardTask>
              {btnClick ? InputField : null}
              {btnClick ? btnSubmit : btnAdd}
            </Card>
            <Card title={'Ready'}>
              <CardTask>{this.props.tasksReady}</CardTask>
              {showSelectReady ? null : (
                <Select onChange={(e) => addToReady(e)} option={this.props.tasksBacklog} />
              )}
              {btnShowSelectReady}
            </Card>
            <Card title={'In Progress'}>
              <CardTask>{this.props.tasksInProgress}</CardTask>
              {showSelectInProgress ? null : (
                <Select onChange={(e) => this.addToInProgress(e)} option={this.props.tasksReady} />
              )}
              {btnShowSelectInProgress}
            </Card>
            <Card title={'Finished'}>
              <CardTask>{this.props.tasksFinished}</CardTask>
              {showSelectFinished ? null : <Select option={this.props.tasksInProgress} />}
              {btnShowSelectFinished}
            </Card>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
