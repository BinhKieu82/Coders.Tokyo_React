import React, { Component } from 'react';
import classNames from 'classnames';
import './TodoItem.css';

class TodoItem extends Component { //class name should same as file name
  render() {
    const { item, onClick } = this.props; //item = this.props.item; item is within this.todoItems.map((item, index) => <TodoItem key ={index} item={item} />)
    
    return (
      <div onClick={onClick} className={classNames('TodoItem', {
        'TodoItem-complete': item.isComplete
      })}>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
export default TodoItem;