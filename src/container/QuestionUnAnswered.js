import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswer } from '../actions/shared'

class QuestionUnAnswered extends Component {
  constructor(props) {
    super(props)
    this.state = { answer: '' }
    this.handleOptionOne = this.handleOptionOne.bind(this)
    this.handleOptionTwo = this.handleOptionTwo.bind(this)
    this.handleSubmitAnswer = this.handleSubmitAnswer.bind(this)

  }

  handleOptionOne(event) {
    this.setState({ answer: 'optionOne' })
  }

  handleOptionTwo(event) {
    this.setState({ answer: 'optionTwo' })
  }

  handleSubmitAnswer(event) {
    if (this.state.answer === '') {
      alert("Choose a option")
    } else {
      console.log(this.props.authedUser, this.props.qid, this.state.answer)
        this.props.dispatch(handleAnswer(this.props.authedUser,
                                         this.props.qid,
                                         this.state.answer))
        this.setState({ answer: '' })}
  }

  render() {
    const { question } = this.props

    return (
      <div className='QuestionUnAnswered'>
        <p>Would you rather:</p>
          <button type="button" onClick={this.handleOptionOne}>{question.optionOne.text}</button>
          <button type="button" onClick={this.handleOptionTwo}>{question.optionTwo.text}</button>
          <button type="button" onClick={this.handleSubmitAnswer}>Submit answer</button>
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