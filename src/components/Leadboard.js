import React, { Component } from 'react'
import { connect } from 'react-redux'
import Usercard from './Usercard'
import ListGroup from 'react-bootstrap/ListGroup'


class Leadboard extends Component {
  render() {
    const { userScore } = this.props
    console.log(userScore)

    return (
      <div className='Leadboard'>
        <ListGroup variant="flush">
          {userScore.map((user) => (
            <li key={user.id}>
              <Usercard user={user}/>
            </li>
          ))}
        </ListGroup>
      </div>
    )
  }
}

function mapStateToProps ({ users }) {
  const userScore = (Object.values(users)).sort((a, b) => {
    const userA = (Object.keys(a.answers)).length + a.questions.length
    const userB = (Object.keys(b.answers)).length + b.questions.length
    return userB >= userA
  })
  return {
    userScore: userScore
  }
}

export default connect(mapStateToProps)(Leadboard)