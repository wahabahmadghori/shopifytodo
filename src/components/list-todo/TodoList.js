import React, { Component } from 'react'
import TodoItem from '../item-todo/TodoItem'
export default class TodoList extends Component {
    render() {
        return (
            <article>
                <h2>Hello from TodoList</h2>
                <TodoItem/>
            </article>
        )
    }
}
