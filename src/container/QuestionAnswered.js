import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionAnswered extends Component {
  render() {
    const { question, authedUser } = this.props

    return (
      <div className='QuestionAnswered'>
        {authedUser}
        {question.optionOne.votes.length}
        {question.optionTwo.votes.length}
      </div>
    )
  }
}

function mapStateToProps ({ questions }, {qid}) {
  return {
    question: questions[qid]
  }
}

export default connect(mapStateToProps)(QuestionAnswered)