import React from 'react'
import './Footer.scss'
import {FaGithubSquare ,FaLinkedin} from 'react-icons/fa'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='footer'>
      <div>AmalRaj</div>
      <div  className='footer-icons'>
      <Link target='blank' to='https://github.com/amalfrost'>
      <div className='icon'><FaGithubSquare/></div>
      </Link>
      <Link target='blank' to='https://www.linkedin.com/in/amal-rj/'>
      <div className='icon'><FaLinkedin/></div>
      </Link>
      </div>
    </div>
  )
}

export default Footer
