import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {item,handleChange,handleSubmit,editItem} = this.props
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
                     <button 
                     disabled={item?false:true}
                     className={editItem?"btn btn-block btn-success text-uppercase mt-3":
                     "btn btn-block btn-primary text-uppercase mt-3"}
                     type="submit">
                            {editItem?'Edit Item':'Add Item'}
                     </button>
                </div>
            </div>
            </form>
           
        )
    }
}
