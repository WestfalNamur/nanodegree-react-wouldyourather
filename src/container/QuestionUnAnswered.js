import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionUnAnswered extends Component {
  render() {
    const { question } = this.props

    return (
      <div className='QuestionUnAnswered'>
        Would you rather {question.optionOne.text} 
        or {question.optionTwo.text}?

      </div>
    )
  }
}

function mapStateToProps ({ questions }, {qid}) {
  return {
    question: questions[qid]
  }
}

export default connect(mapStateToProps)(QuestionUnAnswered)