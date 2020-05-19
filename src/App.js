import React, { Component }  from 'react';
import './App.css';
import uuid from 'uuid'
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoInput from './components/input-todo/TodoInput';
import TodoList from './components/list-todo/TodoList';
import TodoItem from './components/item-todo/TodoItem';

export default class App extends Component {
  state={
    items:[],
    id:uuid(),
    item:'',
    editItem:false
  }
  handleChange=(e)=>{
    this.setState({
      item:e.target.value
    })
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    const newItem={
      id:this.state.id,
      title:this.state.item
    }

    const updateItems = [...this.state.items,newItem]
    this.setState({
      item:'',
      id:uuid(),
      items:updateItems,
      editItem:false
    })
  }
  clearList=()=>{
    this.setState({
      items:[]
    })
  }
  handleEdit=(id)=>{
    const filteredItem = this.state.items.filter((item=>item.id!==id))
    const selectedItem = this.state.items.find((item)=>item.id==id)
    this.setState({
      item:selectedItem.title,
      id:id,
      items:filteredItem,
      editItem:true
    })
  }
  handDelete=(id)=>{
    const filteredItem = this.state.items.filter((item=>item.id!==id))
    this.setState({
      items:filteredItem
    })
  }
  render() {
    return (
      <div class="container">
        
        <div class="row">
          <div class="col-10 mx-auto col-md-8 mt-4">
              <h3 class="text-center text-capitalize">Todo Input</h3>
              <TodoInput item={this.state.item}
              handleChange={this.handleChange}
              
              editItem={this.state.editItem}
              handleSubmit={this.handleSubmit}
              />
              <TodoList items={this.state.items}
              handleEdit={this.handleEdit}
              handleDelete={this.handDelete}
              clearList={this.clearList}/>
          </div>
        </div>
        
      </div>
      
    )
  }
}

