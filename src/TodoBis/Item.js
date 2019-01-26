import React, { Component } from 'react';
import './style.css'

class Item extends Component {

    render() {
        const {item} = this.props
        const task = item.task
        return (
            <div  className='item-container'>
                <span>{task}</span>
                <i className="far fa-trash-alt btn-delete" onClick={() => this.props.handleCallback(this.props.item)}></i>
            </div>
        )
    }
}

export default Item