import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import './TodoItem.css';
import checkImg from '../img/check.svg';
import checkCompleteImg from '../img/check-complete.svg';

class TodoItem extends Component { //class name should same as file name
  render() {
    const { item, onClick, removeTodo } = this.props; //item = this.props.item; item is within this.todoItems.map((item, index) => <TodoItem key ={index} item={item} onClick={this.onItemClicked(item)} />)
    let url = checkImg;
    if(item.isComplete){
      url = checkCompleteImg;
    }

    return (
      <div className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <img src={url} onClick={onClick} width={32} height={32} alt="#"/>
        <p>{item.title}</p>
        <button className="remove" onClick={() => removeTodo(item.id)} />
      </div>
    );
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string.isRequired,
    isComplete: PropTypes.bool.isRequired
  }),
  onClick: PropTypes.func
};

export default TodoItem;