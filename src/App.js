import React, { Component } from 'react'
import AddItem from './components/addItems/AddItem'
import TodoItems from './components/todoItem/TodoItems';

class App extends Component {

  state = {
    items: [
        {id:1, name: 'John Doe', age: 33},
        {id:2, name: 'Axel', age: 33}
    ]
}

deleteItem = (id)=>{
  let items = this.state.items

  let index = items.findIndex(item => item.id === id)
  items.splice(index,1);
  this.setState({items : items})
}

addItem = (item)=>{ 
  let items = this.state.items;
  items.push(item);
  this.setState({items:items})
}
  render() {
    
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={ this.deleteItem }/>
        <AddItem addItem={this.addItem}/>
      </div>
    )
  }
}

export default App;