import React from 'react'
import './preservice.styles.scss'
import Button from '../../button/button.component'

const Preservice = () => {
  return (
    <div className='preservice' style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/image/Asset-1100.png)`}}>
        <h1 id="text">
          Build and develop strong IBM Hardware & Software Business Partners as well as be a recognized Esri Partner and Autodesk Value Added Reseller in Indonesia
        </h1>
        <Button margin={'80px 0'} width={256} height={56} >Contact Us</Button>
    </div>
  )
}

export default Preservice
