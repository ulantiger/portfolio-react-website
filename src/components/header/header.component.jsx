import React from 'react'
import {Link} from 'react-router-dom'
import './header.styles.scss'

const Header = () => {
  return (
    <header>
      <div className="content">
        <div className="logo">
          <Link to='/'>
            <img src={process.env.PUBLIC_URL + '/image/main-logo.png'} alt="Company logo"/>
          </Link>
        </div>
        <nav>
          <ul>
            <li><Link className ='navLink' to='/'>Home</Link></li>
            <li><Link className ='navLink' to='/IBM_HW/'>IBM Hardware</Link></li>
            <li><Link className ='navLink' to='/IBM_SW/'>IBM Software</Link></li>
            <li>ESRI</li>
            <li>Autodesk</li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header