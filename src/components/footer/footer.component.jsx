import React from 'react'
import './footer.styles.scss'
import {Link} from 'react-router-dom'
import {Facebook, YouTube} from '@material-ui/icons'

const Footer = () => {
  return (
    <div className="footer">
      <div className="details">
        <div className="footer_card">
          <p className="card_header">Office</p>
          <p>Jakarta Office</p>
          <p>The H Tower 11th floor unit D</p>
          <p>Jalan HR. Rasuna Said Kav. 20 Blok X-10</p>
          <p>Kuningan, Jakarta 12940, Indonesia</p>
          <p>Phone: +62-21-295-33348, 295-33358, 295-33368</p>
          <p>Fax: +62-21-295-33367</p>
          <br/>
          <p>Surabaya Branch</p>
          <p>Graha SA Office Building Suite 618</p>
          <p>Jl. Raya Gubeng no. 19-21 Surabaya 60281, Indonesia</p>
          <p>Phone/Fax: +62-31-5052815</p>
        </div>
        <div className="footer_card">
          <p className="card_header">Customer Services</p>
          <p>IBM Hardware</p>
          <p>Lorem ipsum</p>
          <br/>
          <p>IBM Software</p>
          <p>saptarina@swgemilang.com</p>
          <br/>
          <p>Esri</p>
          <p>Tio.Chrissanti@swgemilang.com</p>
          <p>Ridha.Ayu@swgemilang.com</p>
          <br/>
          <p>Autodesk</p>
          <p>Ridha.Ayu@swgemilang.com</p>
        </div>
        <div className="footer_card">
          <p className="card_header">Social Media</p>
          <div className="icons">
            <Link to='#' className='link'><Facebook className='sIcons' style={{  background: '#3B5998'}} /></Link>
            <Link to='#' className='link'><YouTube className='sIcons' style={{  background: '#E02F2F'}} /></Link>
          </div>
        </div>
      </div>
      <div className="copyright">© 2018 PT Sinergi Wahana Gemilang. All Rights Reserved.</div>
      
    </div>
  )
}

export default Footer
