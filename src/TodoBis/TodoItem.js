import React, { Component } from 'react';
import Item from './Item'
import './style.css'

class TodoBis extends Component {
    constructor(props) {
        super(props)

        this.renderSubList = this.renderSubList.bind(this)
        this.handleCallback = this.handleCallback.bind(this)

    }

    renderSubList() {
        let subList = this.props.item.subList
        if (subList === undefined)
            return
        subList = subList.map(
            item =>
            <Item key={item.id} item={item} />
            )
      
          return subList

    }

    handleCallback(item) {
        this.props.handleDelete(item)
    }
  
  render() {
      const {item} = this.props
      
    return (
      <div>
          <Item key={item.id} item={item} handleCallback={this.handleCallback} />
          {/*ITEM PRINCIPAL*/}

          <div className={(item.subList === undefined) ? '' : 'subList'}>
            {this.renderSubList()}
            {/*ITEM Secondaire*/}
          </div>
      </div>
    );
  }
}

export default TodoBis;