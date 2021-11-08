import React from 'react'
import { Link } from 'react-router-dom'

import './Header.styles.css';


const Header = () => {
  return (
    <div className='header__container'>
      <li className="link__wrapper">
        <Link to="/"> All Posts </Link>
      </li>
      <li className="link__wrapper">
        <Link to="/post"> Create post </Link>
      </li>
    </div>
  )
}

export default Header;