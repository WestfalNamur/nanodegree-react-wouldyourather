import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class LoginUsercard extends Component {
  render() {
    const { user, id, dispatch } = this.props
    const authedUser = 'tylermcginnis'

    function handleSetAuthedUser(e) {
      e.preventDefault()
      dispatch(setAuthedUser({ authedUser }))
    }

    return (
      <div className='user-login-card'>
        <p onClick={handleSetAuthedUser}>
          {user.name}
        </p>
      </div>
    )
  }
}

function mapStateToProps ({ users }, { id }) {
  return {
    user: users ? users[id] : []
  }
}

export default connect(mapStateToProps)(LoginUsercard)