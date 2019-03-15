import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = { selectedUser: '' }
    this.handleChange = this.handleChange.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
  }

  handleChange = (event) => {
    this.setState({selectedUser: event.target.value})
  }

  handleLogin = (event) => {
    this.props.dispatch(setAuthedUser(this.state.selectedUser))
  }

  render() {
    const { users } = this.props

    return (
      <form onSubmit={this.handleLogin}>
        <lable>
          Select user:
          <select 
            value={this.state.value} 
            onChange={this.handleChange} 
            >
            {users.map((user) => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </lable>
        <button 
          type="button" 
          disabled={!this.state.selectedUser} 
          onClick={this.handleLogin}
        >Login</button>
      </form>
    )
  }
}

function mapStateToProps ({ users }) {
  const userIds = Object.keys(users).sort();
  return {
    users: userIds.map((id) => users[id])
  };
}

export default connect(mapStateToProps)(Login)