import React, { Component } from 'react';
import s from './Card.module.scss';

class Card extends Component {
  
  render() {
    return (
      <div className={s.card}>
        <h1 className={s.title}>{this.props.title}</h1>
        {this.props.children}
      </div>
    );
  }
}

export default Card;
