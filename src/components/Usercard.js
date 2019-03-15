import React from 'react'
import '../utils/App.css'

export default function Usercard(props) {
  const { user } = props
  const score = (user.questions.length + Object.keys(user.answers).length)


  return (
    <div className='usercard'>
      <div className='user-avatar'>
        <img className='avatar' alt='' src={user.avatarURL}/>
      </div>
      <div className='body'>
        <h5>{user.name}</h5>
        <p>
          Asked: {user.questions.length}, 
          created: {Object.keys(user.answers).length},
          total: {score}
        </p>
      </div>
    </div>
  )
}