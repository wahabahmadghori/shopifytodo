import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit} = this.props
        return (
            <form onSubmit={handleSubmit}>
            <div className="card card-body my-3">
                <div className="input-group">
                    <div className="input-group-prepend">
                        <div className="input-group-text bg-primary text-center text-white">
                            <i className="fas fa-book"></i>
                        </div>
                    </div>
                    <input className="form-control text-capitalize" value={item}
                     placeholder="add todo item" onChange={handleChange}/>
                     <button className="btn btn-block btn-primary text-uppercase mt-3" type="submit">
                            add item
                     </button>
                </div>
            </div>
            </form>
           
        )
    }
}
