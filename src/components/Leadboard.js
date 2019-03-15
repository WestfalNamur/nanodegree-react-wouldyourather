import React, { Component } from 'react'
import { connect } from 'react-redux'
import Usercard from './Usercard'

class Leadboard extends Component {
  render() {
    const { userScore } = this.props
    console.log(userScore)

    return (
      <div className='Leadboard'>
        <ul>
          {userScore.map((user) => (
            <li key={user.id}>
              <Usercard user={user}/>
            </li>
          ))}
        </ul>
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