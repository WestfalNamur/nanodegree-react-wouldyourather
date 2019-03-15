import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={toggle: false}
    this.handleToggleAnswers = this.handleToggleAnswers.bind(this)
  }

  handleToggleAnswers() {
    this.setState(state => ({
     toggle: !state.toggle 
    }))
  }

  render() {
    const { answeredIds, unAnsweredIds } = this.props
    const { toggle, handleToggleAnswers } = this.state

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
        <button onClick={this.handleToggleAnswers}>
          {toggle ? 'Show unanswered question' : 'Show answered question'}
        </button>
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