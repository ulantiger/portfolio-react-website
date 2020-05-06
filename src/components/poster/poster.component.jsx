import React from 'react'
import './poster.styles.scss'

const Poster = ({img, text}) => {
  return (
    <div className="poster">
      <img src={process.env.PUBLIC_URL + img} alt={text}/>
      <h1>{text}</h1>
    </div>
  )
}

export default Poster
