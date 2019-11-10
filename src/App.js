import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TrafficLight from './components/TrafficLight';

class App extends Component {
  constructor() {
    super();
    this.todoItems = [
      {title: 'an sang', isComplete: true},
      {title: 'thay do', isComplete: true},
      {title: 'di lam', isComplete: false}
    ];
  }
  render() {
    return (
      <div className="App">
        <TrafficLight />
        {
          this.todoItems.map((item, index) => <TodoItem key ={index} item={item} />)
        }
      </div>
    );
  }  
}

export default App;
