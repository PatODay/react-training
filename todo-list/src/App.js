import React, { Component } from 'react';
import './App.css';
import ListItem from './ListItem.js';

class MyList extends Component {
  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList,
      newItem: ''
    }
  }

  clearList (e) {
    this.setState({
      toDoItemArray: []
    })
  }

  newItemChange(e) {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem(e) {
    e.preventDefault()
    let toDos = this.state.toDoItemArray;
    toDos.push(this.state.newItem);
    this.setState({
      toDoItemArray: toDos, newItem: ''
    })
  }

  render() {
    let todoItems = this.state.toDoItemArray.map( (item, index) => (
  <ListItem doThis={item} key={index} />
))
    return (
      <div>
        <h1>Todo list: </h1>
        <ul>
          {todoItems}
        </ul>
        <button onClick={(e) => this.clearList(e)}>Finished the list!</button>
        <form>
          <input type="text"
          placeholder="Type an item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
        />
        <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
      </div>
    );
  }
}

export default MyList;
