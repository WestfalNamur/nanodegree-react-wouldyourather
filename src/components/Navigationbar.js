import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import '../utils/App.css'

class NavigationBar extends Component {
 constructor(props) {
    super(props)
    this.handleLogout = this.handleLogout.bind(this)
  }

  handleLogout = (event) => {
    event.preventDefault()
    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    const { authedUser } = this.props

    return (
      <nav className="topnav">
        <NavLink className='nav-link' to='/' >Home </NavLink>
        <NavLink className='nav-link' to='/addquestion' >Add Question </NavLink>
        <NavLink className='nav-link' to='/leadboard' >Leadboard </NavLink>
        {authedUser && 
          <p className='authedUSer-info' href="#" > Signed in as: {authedUser.name} </p>}
        {authedUser && 
          <button variant="outline-primary" onClick={this.handleLogout}
          >Logout</button>}
      </nav>

    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser ? users[authedUser] : ''
  }
}

export default withRouter(connect(mapStateToProps)(NavigationBar))