import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  state = {
    toggle: false
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
  const questionIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const userAnswerIds = Object.keys(users[authedUser].answers)

  return {
    answeredIds: questionIds.filter(q => userAnswerIds.includes(q)),
    unAnsweredIds: questionIds.filter(q => !userAnswerIds.includes(q))
  }
}

export default connect(mapStateToProps)(Dashboard)