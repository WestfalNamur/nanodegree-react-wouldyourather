import React, { Component } from 'react'
import { connect } from 'react-redux'
//import QuestionAnswered from './QuestionAnswered'
//import QuestionUnanswered from './QuestionUnanswered'

class Question extends Component {
  render() {
    const { userAnswerIds } = this.props
    const { pathname } = this.props.location
    const realivePath = pathname.split('/').pop()
    const answered = userAnswerIds.includes(realivePath)

    return (
    <div >
        { answered &&
          <p> already answered </p>
        }
        { !answered &&
          // <QuestionUnanswered id={realivePath}/>
          <p> not yet answered </p>
        }
    </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  const user = authedUser ? authedUser : ''
  const questionsArray =  questions ? questions : []
  const usersArray = users ? users : []

  return {
    userAnswerIds: Object.keys(usersArray[user].answers)
  }
}

export default connect(mapStateToProps)(Question)