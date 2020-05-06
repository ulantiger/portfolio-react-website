import React, {useEffect} from 'react'
import Poster from '../../components/poster/poster.component'
import data from './data'
import DisplayBlock from '../../components/display-block/d-block.component'
import './ibm-sw.page.styles.scss'

const IBM_SW_PAGE = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Poster img='/image/cabinet-data-center.png' text='IBM Software'/>      
      <div className="SW_block">
        <ul>
          { data.map( card=>(
            <DisplayBlock key={card.id} elem={card} />
          ))
          }
        </ul>
      </div>
    </div>
  )
}

export default IBM_SW_PAGE
