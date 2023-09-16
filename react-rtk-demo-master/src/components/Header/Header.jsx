import React from 'react'
import {Link} from 'react-router-dom'
import './Header.scss'

import User from '../../images/user.png'
function Header() {
  return (
    <div className='header'>
    <Link to='/'>
      
      <div className='logo'>Movie App</div>
    </Link>
      <div className='user-image'>
        <img src ={User} alt='user-img' />
      </div>
    </div>
  )
}

export default Header
