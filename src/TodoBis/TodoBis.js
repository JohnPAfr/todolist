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
    this.handleModify = this.handleModify.bind(this)
    this.handleModifyInput = this.handleModifyInput.bind(this)
    this.handleSubAdd = this.handleSubAdd.bind(this)



  }

  renderTodoItems() {
    let list = this.state.todoList
    list = list.map(
      item =>
      <TodoItem
        key={item.id} 
        item={item} 
        handleModify={this.handleModify} 
        handleModifyInput={this.handleModifyInput} 
        handleDelete={this.handleDelete}
        handleSubAdd={this.handleSubAdd}
        />
      )

    return list
  }

  handleModify(item) {
    let list = [...this.state.todoList]

    if ('parent' in item) {
      let parent = list.find(obj => obj.id === item.parent)
      list[parent.id].subList[item.id].modify = !list[parent.id].subList[item.id].modify;
      
      this.setState({
        todoList: list
      })


    } else {
      list[item.id].modify = !list[item.id].modify;
      this.setState({
        todoList: list
      })
    }
  }

  handleModifyInput(input, item) {
    let list = [...this.state.todoList]
    if ('parent' in item) {
      let parent = list.find(obj => obj.id === item.parent)
      list[parent.id].subList[item.id].task = input;

      this.setState({
        todoList: list
      })


    } else {
      list[item.id].task = input;
      this.setState({
        todoList: list
      })
    }
  }

  handleAdding(input) {
    const item = {
      id: this.state.todoList.length,
      task: input,
      subList: [],
      checked: false,
      modify: false,
    }
    this.setState({
        todoList: [...this.state.todoList, item]
      })
  }

  handleSubAdd(item) {
    
    let list = [...this.state.todoList]
    const id = (item.id.subList === undefined) ? 0 : list[item.id].subList.length
    const newItem = {
      id: id,
      parent: item.id,
      task: '',
      checked: false,
      modify: false,
    }
    if (item.id.subList === undefined) 
      list[item.id].subList = [newItem]
    else
      list[item.id].subList.push(newItem)
    this.setState({
      todoList: list
    })
  }

  handleDelete(item) {
    let list = [...this.state.todoList]

    if ('parent' in item) {
      let parent = list.find(obj => obj.id === item.parent)
      parent.subList = parent.subList.filter(obj => obj.id !== item.id)
      let subList = [...parent.subList]

      for (var i = item.id; i < subList.length; i++) {
        subList[i].id -= 1
      }
      parent.subList = subList
      list[parent.id] = parent
      this.setState({
        todoList: list
      })


    } else {
      list = list.filter(obj => obj.id !== item.id)
      for (var j = item.id; j < list.length; j++) {
        list[j].id -= 1
      }
      this.setState({
        todoList: list
      })
    }
    
  }
  
  render() {
    return (
      <div className='App'>
        <AddBar handleAdding={this.handleAdding} />
        {this.renderTodoItems()}
      </div>
    );
  }
}

export default TodoBis;
