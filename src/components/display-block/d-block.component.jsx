import React from 'react'
import './d-block.styles.scss'

const DisplayBlock = ({elem, width=277, height=277}) => {
  const styles={
    width,
    height
  }
  return(
        <li className='block-item' style={styles}>
          <img src={process.env.PUBLIC_URL + elem.img} alt=""/>
          <h3>{elem.header}</h3>
          <p>{elem.text}</p>
        </li>

  )
}



export default DisplayBlock
