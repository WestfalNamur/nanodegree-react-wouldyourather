import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  state = {
    toggle: true
  }

  render() {
    const { answeredIds, unAnsweredIds } = this.props
    const { toggle } = this.state

    return (
      <div>
        <h1>Dashboard</h1>
        {toggle 
          ? answeredIds &&
            <ul>
               {answeredIds.map((id) => (
                  <li key={id}>
                    <div>Id: {id}</div>
                  </li>
                ))}
            </ul>
          : unAnsweredIds &&
            <ul>
               {unAnsweredIds.map((id) => (
                  <li key={id}>
                    <div>Id: {id}</div>
                  </li>
                ))}
            </ul>
          }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  const user = authedUser ? authedUser : ''
  const questionsArray =  questions ? questions : []
  const usersArray = users ? users : []

  const questionIds = Object.keys(questionsArray)
    .sort((a,b) => questionsArray[b].timestamp - questionsArray[a].timestamp)
  const userAnswerIds = Object.keys(usersArray[user].answers)
  const answeredIds = questionIds.filter(q => userAnswerIds.includes(q))
  const unAnsweredIds = questionIds.filter(q => !userAnswerIds.includes(q))

  return {
    answeredIds: answeredIds,
    unAnsweredIds: unAnsweredIds
  }
}

export default connect(mapStateToProps)(Dashboard)