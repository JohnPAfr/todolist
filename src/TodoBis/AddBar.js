import React, { Component } from 'react';

class AddBar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleInput(e) {
        e.preventDefault()
        this.setState({
            input: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault()
        if (e.key !== 'Enter')
            return
        
        this.props.handleAdding(this.state.input)
    }

    render() {
        return (
            <div onKeyUp={(e) => this.handleSubmit(e)} className='addbar'>
                <input
                    type='text'
                    value={this.state.input}
                    placeholder='TODO'
                    onChange={(e) => this.handleInput(e)}
                />
            </div>
        )
    }
}

export default AddBar