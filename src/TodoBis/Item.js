import React, { Component } from 'react';
import './style.css'

class Item extends Component {

    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
        this.handleInput = this.handleInput.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(e) {
        e.preventDefault()
        if (e.key !== 'Enter')
            return
        this.props.handleModifyInput(this.state.input, this.props.item)
        this.props.handleModify(this.props.item)
    }

    handleInput(e) {
        e.preventDefault()
        this.setState({
            input: e.target.value
        })
    }

    render() {
        const {item} = this.props
        const task = item.task
        const checked = item.checked
        const modify = item.modify

        let plus = <i className="fas fa-plus btn-plus" onClick={() => this.props.handleSubAdd(item)} />
        if ('parent' in item)
            plus = <div></div>;

        let viewStyle = {}
        let editStyle = {}

        if (modify)
            viewStyle.display = 'none'
        else
            editStyle.display = 'none'

        const renderItem = () =>(
            <div>
                <div style={viewStyle}> 
                    <input type='checkbox' checked={checked} onChange={() => console.log('ok')}/>
                    <span>{task}</span>
                    <i className="fas fa-pen btn-pen" onClick={() => this.props.handleModify(item)} />
                    {plus}
                    <i className="far fa-trash-alt btn-delete" onClick={() => this.props.handleCallback(item)} />
                </div>
                <input 
                    type='text' 
                    style={editStyle} 
                    onKeyUp={(e) => this.handleSubmit(e)}
                    onChange={(e) => this.handleInput(e)}
                />
            </div>
        )

        return (
            <div  className='item-container'>
                {renderItem()}
            </div>
        )
    }
}

export default Item
