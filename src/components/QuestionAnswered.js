import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../utils/App.css'

class QuestionAnswered extends Component {
  render() {
    const { question, author, authedUser, userAnswer } = this.props
    const optionOne = question.optionOne.votes.length 
    const optionTwo = question.optionTwo.votes.length
    const ratioOne = (optionTwo / (optionOne + optionTwo)) * 100
    const ratioTwo = 100 - ratioOne

    return (
      <div className='center'>
        <div className='card-container'>
          <img src={author.avatarURL} alt=''/>
          <h5>{author.name} asks:</h5>
          <h6>Would you rather {question.optionOne.text} or {question.optionTwo.text}?</h6>
          <p> Results: "{question.optionOne.text}" got {optionOne} votes
              while "{question.optionTwo.text}" got {optionTwo} votes.
          </p>
          <p>Giving a ratio of: {ratioOne}% to {ratioTwo}%</p>
          <p>You voted: {userAnswer}.</p>
        </div>
      </div>
    )
  }
}

function mapStateToProps ({ questions, users, authedUser }, {qid}) {
  const question = questions[qid]
  const author = users[question.author]
  const userAnswer = question[users[authedUser].answers[qid]].text

  return {
    question: question,
    author: author,
    userAnswer: userAnswer
  }
}

export default connect(mapStateToProps)(QuestionAnswered)