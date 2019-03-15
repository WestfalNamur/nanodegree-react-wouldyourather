import React, { Component } from 'react'
import { connect } from 'react-redux'

class QuestionCardTiny extends Component {
  render() {
    const { question, author } = this.props
    console.log(author.avatarURL)

    return (
        <div className="card">
          <div className='card-container'>
            <img className='avatar' src={author.avatarURL}/>
            <h5>{author.name} asked:</h5>
            <p>Would you rather {question.optionOne.text} or ... </p>
          </div>
        </div>
    )
  }
}

function mapStateToProps ({ questions, users }, { qid }) {
  const question = questions[qid]
  const author = users[question.author]

  return {
    question: question,
    author: author
  }
}

export default connect(mapStateToProps)(QuestionCardTiny)

