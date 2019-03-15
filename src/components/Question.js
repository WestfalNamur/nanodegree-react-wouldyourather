import React, { Component } from 'react'
import { connect } from 'react-redux'
import QuestionAnswered from './QuestionAnswered'
import QuestionUnAnswered from './QuestionUnAnswered'

class Question extends Component {
  render() {
    const { userAnswerIds, authedUser, questionIds } = this.props
    const { pathname } = this.props.location
    const realivePath = pathname.split('/').pop()
    const answered = userAnswerIds.includes(realivePath)

    return (
      <div className='Question'>
        {questionIds.includes(realivePath)
          ? <div>
              { answered &&
                <QuestionAnswered qid={realivePath} />
              }
              { !answered &&
                <QuestionUnAnswered qid={realivePath} authedUser={authedUser} />
              }
            </div>
          : <h1>Question does not exist</h1>
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  return {
    userAnswerIds: Object.keys(users[authedUser].answers),
    questionIds: Object.keys(questions),
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(Question)