import React, { Component } from 'react'
import { connect } from 'react-redux'
import { NavLink, Link, withRouter } from 'react-router-dom'
import { setAuthedUser } from '../actions/authedUser'
import Button from 'react-bootstrap/Button'
import ButtonGroup from 'react-bootstrap/ButtonGroup'
import ButtonToolbar from 'react-bootstrap/ButtonGroup'

class NavigationBar extends Component {
  handleLogout = (event) => {
    event.preventDefault()
    this.props.dispatch(setAuthedUser(null))
  }

  render() {
    const { authedUser } = this.props

    return (
      <ButtonToolbar aria-label="Toolbar with button groups">
        <ButtonGroup className="mr-2" aria-label="First example" size="lg">
          <Link to="/home">
            <Button variant="secondary">Home</Button>
          </Link>
          <Link to="/addquestion">
            <Button variant="secondary">Add Question</Button>
          </Link>
          <Link to="/leadboard">
            <Button variant="secondary">Leadboard</Button>
          </Link>
        </ButtonGroup>
        {authedUser && 
          <ButtonGroup aria-label="Third group">
            <Button onClick={this.handleLogout.bind(this)} variant="secondary">Logout</Button>
          </ButtonGroup>}  
      </ButtonToolbar>
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
