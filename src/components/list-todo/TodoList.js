import React, { Component } from 'react'
import TodoItem from '../item-todo/TodoItem'
export default class TodoList extends Component {
    render() {
        const {items,handleEdit,handleDelete,clearList} = this.props
        return (
            <>
            <ul className="list-group my-2">
                <h2 className="text-capitalize text-center">ToDo list</h2>
                {items.map((item)=>{return <TodoItem key={item.id}
                 title={item.title}
                handleDelete={()=>handleDelete(item.id)}
                handleEdit={()=>handleEdit(item.id)}></TodoItem>})}
            </ul>
            <button className="btn btn-danger btn-block text-capitalize" onClick={clearList}>Clear list</button>
            </>
        )
    }
}
