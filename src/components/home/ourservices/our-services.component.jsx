import React from 'react'
import {Link} from 'react-router-dom'
import ServiceCard from '../service-card/service-card.component'
import './our-services.styles.scss'

const OurService = () => {
  const local =[
    {
      id: 1,
      img: 'image/mg02.png',
      header: 'IBM Hardware',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/IBM_HW'
    },
    {
      id: 2,
      img: 'image/mg03.png',
      header: 'IBM Software',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/IBM_SW'
    },
    {
      id: 3,
      img: 'image/mg04.png',
      header: 'ESRI',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/'
    },
    {
      id: 4,
      img: 'image/mg05.png',
      header: 'AUTODESK',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      link: '/'
    }
  ]

  return (
    <div className='ourservice'>
      <h1>Our Services</h1>
      <div className="serviceList">
        { local.map( item=>(
          <Link to={item.link}>
            <ServiceCard  key={item.id}
            img={item.img}
            header={item.header}
            text = {item.text} />
          </Link>
          ))
        }
      </div>
    </div>
  )
}

export default OurService
