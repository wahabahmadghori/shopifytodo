import React, { Component } from 'react'

export default class TodoItem extends Component {
    render() {
        const {title, handleDelete, handleEdit} = this.props
        return (
            <li className="list-group-item d-flex justify-content-between my-3">
                <h6 className="text-capitalize mx-2">{title}</h6>
                <div>
                    <span className="text-success mx-2"><i className="fas fa-pen" onClick={handleEdit}></i></span>
                    <span className="text-danger mx-2"><i className="fas fa-trash" onClick={handleDelete}></i></span>
                </div>
            </li>
        )
    }
}
