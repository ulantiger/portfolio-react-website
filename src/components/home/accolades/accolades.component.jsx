import React from 'react'
import './accolades.styles.scss'


const Accolades = () => {
  return (
    <div className="accolades">
      <h1 className="h1">Accolades</h1>
      <div className="content">
        <div className="img">
          <img src="image/IBM-reward.png" alt="IBM_REWARDS"/>
        </div>
        <div className="aboutIbm">
          <h2>IBM Software</h2>
          < br/>
          <h1>2014 IBM Best Value Added Distributor</h1>
        </div>
      </div>      
    </div>
  )
}

export default Accolades
