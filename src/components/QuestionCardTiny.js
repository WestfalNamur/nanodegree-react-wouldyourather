import React, { Component } from 'react'
import { connect } from 'react-redux'
import Card from 'react-bootstrap/Card'

class QuestionCardTiny extends Component {
  render() {
    const { question, author } = this.props

    return (
      <div>
        <Card border="primary" className="text-center p-3" style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Title>
              {author.name} asked:
            </Card.Title>
            <Card.Text> 
              Would you rather {question.optionOne.text} or ...
            </Card.Text>
          </Card.Body>
        </Card>
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