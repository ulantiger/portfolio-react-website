import React from 'react'
import Button from '../button/button.component'

import './tbp.styles.scss'

const TBP = ({ rev, img, header, text }) => {
  return (
    <div className='tbp' style={rev? {flexDirection: 'row-reverse'}: null}>
      <div className="img">
        <img src={process.env.PUBLIC_URL + img} alt="text"/>
      </div>
      <div className="info">
        <h1>{header}</h1>
        <p>{text}</p>
        <Button margin='96px 0 0 0' width={256} height={56}>View More </Button>
      </div>
      
    </div>
  )
}

export default TBP
