import React, { Component } from 'react';
import AddBar from './AddBar'
import TodoItem from './TodoItem'
import './style.css'

class TodoBis extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoList: [
        {id:0, task:'tâche #1', subList: [
            {id:0, parent:0, task:'sous-tâche #1'},
            {id:1, parent:0, task:'sous-tâche #2'},
            {id:2, parent:0, task:'sous-tâche #3'},
        ]},
        {id:1, task:'tâche #2'},
        {id:2, task:'tâche #3'},
        {id:3, task:'tâche #4'},
      ],
    }

    this.renderTodoItems = this.renderTodoItems.bind(this)
    this.handleAdding = this.handleAdding.bind(this)
    this.handleDelete = this.handleDelete.bind(this)

  }

  renderTodoItems() {
    let list = this.state.todoList
    list = list.map(
      item =>
      <TodoItem key={item.id} item={item} handleDelete={this.handleDelete}/>
      )

    return list
  }

  handleAdding(input) {
    const item = {
      id: this.state.todoList.length,
      task: input,
      subList: undefined
    }
    this.setState({
        todoList: [...this.state.todoList, item]
      })
  }

  handleDelete(item) {
    let list = this.state.todoList
    if ('parent' in item) {
      let parent = list.filter(obj => obj.id === item.parent)
      parent = parent[0].subList.filter(obj => obj.id !== item.id)
      console.log(list)
      
    } else {
      list = list.filter(obj => obj.id !== item.id)
      this.setState({
        todoList: list
      }) 
    }
    
  }
  
  render() {
    return (
      <div>
        <AddBar handleAdding={this.handleAdding} />
        {this.renderTodoItems()}
      </div>
    );
  }
}

export default TodoBis;
