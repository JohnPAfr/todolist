import React, { Component } from 'react';
import './style.css'

class Item extends Component {
    constructor(props) {
        super(props)
        this.handleCallback = this.handleCallback.bind(this)
    }

    handleCallback() {
        const handleCallback = this.props.handleCallback
        const item = this.props.item
        console.log(item)
        handleCallback(item)
    }

    render() {
        const {item} = this.props
        const task = item.task
        console.log(item)
        return (
            <div onClick={() => this.handleCallback(item)} className='item-container'>
                <span>{task}</span>
            </div>
        )
    }
}

export default Item