import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component { //class name should same as file name
  render() {
    const { item } = this.props; //item = this.props.item; item is within this.todoItems.map((item, index) => <TodoItem key ={index} item={item} />)
    let className = 'TodoItem';
    if (item.isComplete) {
      className += ' TodoItem-complete';
    }
    return (
      <div className={className}>
        <p>{this.props.item.title}</p>
      </div>
    );
  }
}
export default TodoItem;