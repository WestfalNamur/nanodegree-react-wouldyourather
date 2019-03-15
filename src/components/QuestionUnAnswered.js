import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswer } from '../actions/shared'
import '../utils/App.css'

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
    const { question, author } = this.props

    return (
      <div className='center'>
        <div className='card-container'>
          <img src={author.avatarURL}/>
          <h5> {author.name} asks:</h5>
          <p>Would you rather </p>
          <div className='options'>
            <button className='button-answer' type="button" 
              onClick={this.handleOptionOne}>{question.optionOne.text}</button>
            <button className='button-answer' type="button" 
              onClick={this.handleOptionTwo}>{question.optionTwo.text}</button>
          </div>
          {this.state.answer !== ''
            ? <button className='submit' type="button" onClick={this.handleSubmitAnswer}>
                Submit: {question[this.state.answer].text}</button>
            : null }
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users }, {qid}) {
  const question = questions[qid]
  const author = users[question.author]

  return {
    question: question,
    author: author
  }
}

export default connect(mapStateToProps)(QuestionUnAnswered)