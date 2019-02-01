import React from 'react';
import { NavLink } from 'react-router-dom'

const Navigation = () => {
    return (
        <ul className='nav nav-more'>
            <li className='nav-item'><NavLink className="nav-link active" to='/'>Home</NavLink></li>
            <li className='nav-item'><NavLink className="nav-link" to='/todo'>Todo</NavLink></li>
            <li className='nav-item'><NavLink className="nav-link" to='/food'>Food</NavLink></li>
            <li className='nav-item'><NavLink className="nav-link" to='/css'>CSS</NavLink></li>
            <li className='nav-item'><NavLink className="nav-link" to='/algo'>Algorithm</NavLink></li>

        </ul>
    )
}

export default Navigation;