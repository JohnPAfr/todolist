import React, { Component } from 'react';
import './style.css'

class Item extends Component {

    render() {
        const {item} = this.props
        const task = item.task
        return (
            <div onClick={() => this.props.handleCallback(this.props.item)} className='item-container'>
                <span>{task}</span>
            </div>
        )
    }
}

export default Item