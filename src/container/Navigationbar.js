import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'

// https://tylermcginnis.com/react-router-programmatically-navigate/

class NavigationBar extends Component {
  handleLogout = (event) => {
    event.preventDefault()
    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    const { authedUser } = this.props

    return (
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addquestion'>AddQuestion</NavLink>
        {authedUser && 
          <div>
            <p>Hello: {authedUser.name}</p>
            <p onClick={this.handleLogout.bind(this)}>Logout</p>
          </div>}
      </div>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser ? users[authedUser] : ''
  }
}

export default withRouter(connect(mapStateToProps)(NavigationBar))