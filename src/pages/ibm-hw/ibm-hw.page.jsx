import React, {useEffect} from 'react'
import Poster from '../../components/poster/poster.component'
import TBP from '../../components/tbp/tbp.component'
import TextBlock from '../../components/text-block/text-block.component'
import DisplayBlock from '../../components/display-block/d-block.component'
import {data_hw_1, data_hw_2} from './data'
import './ibm-hw.page.styles.scss'

const IBM_HW_PAGE = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
    <div>
      <Poster img='/image/cabinet-data-center.png' text='IBM Hardware'/>      
      <TBP  rev={true} 
            img ='/image/airport-center-computing.png'
            header ='IBM Power Systems'
            text = 'IBM Power Systems are built to crush the most advanced data applications — from the mission-critical workloads you run today to the next generation of AI.'
            />
      <TextBlock  header='When data-intensive workloads are the bottom line'
                  text="If anything is certain about the future, it’s that there will be more complexity, more data to manage and greater pressure to deliver instantly. The hardware you buy should meet today’s expectations and prepare you for whatever comes next." 
                  />
      <div className="SW_block">
        <ul style={{justifyContent: 'space-around'}}>
        {data_hw_1.map( elem=>(
          <DisplayBlock key={elem.id} elem={elem} width={277} height={341}/>
        ))}
        </ul>
      </div>

      <TBP  img ='/image/bandwidth-close-up-connection.png'
            header='IBM Storage: Capture the power of your data'
            text="Choose from the industry's broadest portfolio of storage solutions to unify, manage, and protect your data across multicloud and AI environments"
            />
      <TextBlock  header='Accelerate workloads. Capitalize on hybrid cloud. Protect your data from all threats.'
                  text="Your business is driven by data, and harnessing the power of your data is critical to your competitive advantage. IBM has everything you need to gain continuous insight, meet real-time demands, and drive innovation and growth."
                  />
      <div className="SW_block">
        <ul style={{justifyContent: 'space-around'}}>
        {data_hw_2.slice(0,3).map( elem=>(
          <DisplayBlock key={elem.id} elem={elem} width={277} height={325}/>
        ))}
        </ul>
        <br />
        <ul style={{justifyContent: 'space-around'}}>
        {data_hw_2.slice(3,6).map( elem=>(
          <DisplayBlock key={elem.id} elem={elem} width={277} height={325}/>
        ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default IBM_HW_PAGE