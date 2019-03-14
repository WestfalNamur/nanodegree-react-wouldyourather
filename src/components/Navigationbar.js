import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Button from 'react-bootstrap/Button'

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
      <Navbar bg="dark" variant="dark" fixed="bottom">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/addquestion">Add Question</Nav.Link>
          <Nav.Link href="/leadboard">Leadboard</Nav.Link>
          {authedUser && 
            <Navbar.Text>
              Signed in as: <a href="#login">{authedUser.name}</a>
            </Navbar.Text>}
          {authedUser && 
            <Button 
              variant="outline-primary" 
              onClick={this.handleLogout}
            >Logout</Button>}
        </Nav>
      </Navbar>
    )
  }
}

function mapStateToProps ({ authedUser, users }) {
  return {
    authedUser: authedUser ? users[authedUser] : ''
  }
}

export default withRouter(connect(mapStateToProps)(NavigationBar))


/*
      <div>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/addquestion'>AddQuestion</NavLink>
        {authedUser && 
          <div>
            <p>Hello: {authedUser.name}</p>
            <p onClick={this.handleLogout.bind(this)}>Logout</p>
          </div>}
      </div>
*/
