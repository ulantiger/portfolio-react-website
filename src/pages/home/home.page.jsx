import React, {useEffect} from 'react'
import Preservice from '../../components/home/preservice/preservice.component'
import OurService from '../../components/home/ourservices/our-services.component'
import AboutUs from '../../components/home/about-us/about-us.component'
import Accolades from '../../components/home/accolades/accolades.component'
import Question from '../../components/home/questions/question.component'
import './home.page.styles.scss'

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='homepage'>
      <Preservice />
      <OurService />
      <AboutUs />
      <Accolades />
      <Question />
    </div>
  )
}

export default HomePage
