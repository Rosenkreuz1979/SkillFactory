import React from 'react';
import s from './CardTask.module.scss';

const CardTask = (props) => {
  return (
    <>
      {props.children.map((task) => (
        <div className={s.task} key={task.id}>
          {task.text}
        </div>
      ))}
    </>
  );
};

export default CardTask;
