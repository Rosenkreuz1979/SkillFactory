import s from './Select.module.scss';
import React from 'react';

export default function Select({ option,  addToReady, ...props }) {
  return (
    <select {...props} className={s.select}>
      {/* <option {...props} className={s.option} /> */}
      <option  className={s.op}></option>
      {option.map((option) => (
        <option  key={option.id} className={s.option}>
          {option.text}
        </option>
      ))}
    </select>
  );
}
