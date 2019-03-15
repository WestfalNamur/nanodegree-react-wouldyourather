import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswer } from '../actions/shared'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
        <Card style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title> {author.name} asks:</Card.Title>
            <Card.Text>Would you rather </Card.Text>
            <Button type="Button" onClick={this.handleOptionOne}>{question.optionOne.text}</Button>
            <Button type="Button" onClick={this.handleOptionTwo}>{question.optionTwo.text}</Button>
            <Button type="Button" onClick={this.handleSubmitAnswer}>Submit answer</Button>
          </Card.Body>
        </Card>
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