import React from 'react'
import './text-block.styles.scss'

const TextBlock = ({header, text}) => {
  return (
    <div className='text-block'>
      <h2>{header}</h2>
      <p>{text}</p>
    </div>
  )
}

export default TextBlock
