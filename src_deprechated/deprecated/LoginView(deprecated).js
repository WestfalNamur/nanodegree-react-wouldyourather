import React, { Component } from 'react'
import { connect } from 'react-redux'
import LoginUsercard from './LoginUsercard'

class LoginView extends Component {
  render() {
    const { userIds, usersArray, dispatch } = this.props

    return (
      <div className='Login-View'>
        {userIds.map((id) => (
          <li key={id}>
            <LoginUsercard id={id}/>
          </li>
        ))}
      </div>
    )
  }
}

function mapStateTopRops ({ users }) {
  return {
    userIds: users ? Object.keys(users) : []
  }  
}

export default connect(mapStateTopRops)(LoginView)