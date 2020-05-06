import React from 'react'
import './question.styles.scss'
import Button from '../../button/button.component'

const Question = () => {
  return (
    <div className='question'>
      <h1 className="h1">Have any question?</h1>
      <p className="grey">Send us a message and will respond as soon as possible</p>
      <div className="elem">
        <p>Name</p>
        <input type="text" name="name"/>
      </div>
      <div className="elem">
        <p>Email</p>
        <input type="email" name="email"/>
      </div>
      <div className="elem">
        <p>Message</p>
        <input type="text" name="message"/>
      </div>
      <Button margin={'50px auto 0'} width={500} height={48}>SEND</Button>
    </div>
  )
}

export default Question
