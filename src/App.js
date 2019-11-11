import React, { Component } from 'react';
import './App.css';
import TodoItem from './components/TodoItem';
import TrafficLight from './components/TrafficLight';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todoItems: [
        {title: 'an sang', isComplete: true},
        {title: 'thay do', isComplete: true},
        {title: 'di lam', isComplete: false}
      ]
    }
  }

  onItemClicked(item) {
    return(event) => {
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

  render() {
    const { todoItems } = this.state;
    if(todoItems.length) {
      return (
        <div className="App">
          <TrafficLight />        
          { todoItems.length && todoItems.map((item, index) => 
              <TodoItem 
                key ={index} 
                item={item} 
                onClick={this.onItemClicked(item)} />
            )
          }
        </div>
      );
    }  
  }  
}

export default App;
