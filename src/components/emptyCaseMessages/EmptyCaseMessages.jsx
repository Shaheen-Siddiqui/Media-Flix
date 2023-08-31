import React from 'react';
import './EmptyCaseMessages.css'

const EmptyCaseMessages = ({message, buttonMessage}) => {
  return (
    <center className='message-container'>
      <h1>Looks like you haven't {message} yet </h1>
      <button>{buttonMessage}</button>
    </center>
  )
}

export default EmptyCaseMessages
