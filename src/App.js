import React, { Component } from 'react';

import './App.css';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import TrafficLight from './components/TrafficLight';
import FooterItem from './components/FooterItem';




const filterByStatus = (todoItems = [], status = '', id) => {
  switch (status) {
    case 'ACTIVE':
      return todoItems.filter(item => !item.isComplete);
    case 'COMPLETED':
      return todoItems.filter(item => item.isComplete);
    case 'REMOVE':
      return todoItems.filter(item => item.id !== id);
    default:
      return todoItems;
  }
}

const filterTodosRemain = (todoItems = []) => {
  return todoItems.filter(item => !item.isComplete)
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      newItem: '',
      isCheckedAll: false,
      status: 'ALL',
      todoEditingId: '',
      todoItems: [
        {title: 'danh rang', isComplete: true, id: 1},
        {title: 'rua mat', isComplete: false, id: 2},
        {title: 'di lam', isComplete: false, id: 3}
      ]
    }
    this.onKeyUp = this.onKeyUp.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  checkAll = () => {
    const { todoItems, isCheckedAll } = this.state
    const updatedListTodos = todoItems.map(item => ({ ...item, isComplete: !isCheckedAll }))
    this.setState(preState => ({
      isCheckedAll: !preState.isCheckedAll,
      todoItems: updatedListTodos
    }))
  }

  clearCompleted = () => {
    this.setState(preState => ({
      todoItems: filterTodosRemain(preState.todoItems)
    }))
  }

  onItemClicked(item) {
    return() => {
      console.log(item);
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      const index = todoItems.indexOf(item);
      this.setState({
        todoItems: [
          ...todoItems.slice(0, index),
          {
            ...item,
            isComplete: !isComplete
          },
          ...todoItems.slice(index + 1)
        ]
      })
    }
  }
  onCompletedItemClicked(item) {
    return() => {
      const isComplete = item.isComplete;
      const { todoItems } = this.state;
      if(isComplete) {
        const index = todoItems.indexOf(item);
        this.setState({
          todoItems: [
            ...todoItems.splice(0, index)
          ]
        })
      }      
    }
  }

  onKeyUp(event) {
    let text = event.target.value;
    if(event.keyCode === 13) { //enter key      
      if(!text) {return;}
      text = text.trim();
      if(!text) {return;}

      this.setState({
        newItem: '',
        todoItems: [
          {title: text, isComplete: false, id: new Date().valueOf()},
          ...this.state.todoItems
        ]
      });
    } else {
      this.setState({
        newItem: text
      });
    }    
  }

  onChange(event) {
    this.setState({
      newItem: event.target.value
    });
  }

  removeTodo = (id = '') => {
    this.setState(prevState => ({
      todoItems: filterByStatus(prevState.todoItems, 'REMOVE', id)
    }))
  }

  setStatusFilter = (status = '') => {
    this.setState(() => ({
      todoItems: filterByStatus(this.state.todoItems, status)
    }))
  }

  render() {
    const { todoItems, status, isCheckedAll, todoEditingId } = this.state;
    //filter
    
    if(todoItems.length) {
      return (
        <div className="App">
          <TrafficLight /> 
          <Header
            value={this.newItem} //anytime once value changed, need onChange method
            onChange={this.onChange}
            onKeyUp={this.onKeyUp}
          />

          <div>
            { todoItems.length && todoItems.map((item, index) => 
                <TodoItem 
                  key ={index} 
                  item={item} 
                  onClick={this.onItemClicked(item)} 
                  removeTodo={this.removeTodo} />
              )
            }
          </div>             
            <FooterItem 
              activeButton={status}
              setStatusFilter={this.setStatusFilter}
              clearCompleted={this.clearCompleted} //worked
              numOfTodosLeft={filterTodosRemain(todoItems).length}
              numOfTodos={todoItems.length} 
            />                      
        </div> 
      );
    }  
  }  
}

export default App;
