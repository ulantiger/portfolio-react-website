import React from 'react'
import './button.styles.scss'

const Button = ({margin='0', width=100, height=30, onClick, children}) =>{

  const styles={
    width: width,
    height: height,
    margin: margin
  }
  return(
    <div  onClick={onClick}
          className='Button'
          style={styles}>
          {children}
    </div>
  )

}


export default Button