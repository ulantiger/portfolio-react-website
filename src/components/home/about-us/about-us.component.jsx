import React from 'react'
import './about-us.styles.scss'

const AboutUs = () =>(
  <div className="aboutus">
    <h1>About Us</h1>
    <div className='content' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/mg01.png)`}}>
      <div className="text">
      <p>PT. Sinergi Wahana Gemilang (SWG) is an IBM Software Value Added Distributor (VAD), Esri Partner and Autodesk Gold Partner in Indonesia.
          SWG has been awarded as Best IBM Software Value Added Distributor by IBM in Indonesia for 2012 and 2014 business performance, including IBM Top Innovation Distributor Award in 2016.SWG has also been awarded as Autodesk Largest Growth VAD in ASEAN (FY15).</p>

      <p>Be the leading Value Added Distributor in Indonesia that Business Partners and Customers can rely on by providing Excellence Execution while also be at the Forefront of Technology Advancements.</p>

      <p className='nospace'>Our Services</p>
        <ol>
          <li>IBM Software Value Added Distributor (VAD) in Indonesia.</li>
          <li>Esri Partner in Indonesia.</li>
          <li>Autodesk Gold Partner in Indonesia</li>
        </ol>
        <div className="logos">
          <img src="image/IBM_logo.png" alt="IBM_LOGO"/>
          <img src="image/ESRI_logo.png" alt="ESRI_LOGO"/>
          <img src="image/Autodesk_logo.png" alt="Autodesk_LOGO"/>
        </div>
    </div>

    </div>
  </div>

)

export default AboutUs