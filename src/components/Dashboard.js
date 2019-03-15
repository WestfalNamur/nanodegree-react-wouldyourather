import React, { Component } from 'react'
import { connect } from 'react-redux'
import '../utils/App.css'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import QuestionCardTiny from './QuestionCardTiny'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state ={toggle: false}
    this.handleToggleAnswers = this.handleToggleAnswers.bind(this)
  }

  handleToggleAnswers() {
    this.setState(state => ({
     toggle: !state.toggle 
    }))
  }

  render() {
    const { answeredIds, unAnsweredIds } = this.props
    const { toggle, handleToggleAnswers } = this.state

    return (
      <div className='center'>
        <Button variant='outline-primary' onClick={this.handleToggleAnswers}>
          {toggle ? 'Show unanswered question' : 'Show answered question'}
        </Button>
        {toggle 
          ? answeredIds &&
            <ListGroup variant="flush">
               {answeredIds.map((id) => (
                  <Link to={`/questions/${id}`}>
                    <ListGroup.Item className='center' key={id}>
                      <QuestionCardTiny qid={id}/>
                    </ListGroup.Item>
                  </Link>
                ))}
            </ListGroup>
          : unAnsweredIds &&
            <ListGroup variant="flush">
               {unAnsweredIds.map((id) => (
                  <Link to={`/questions/${id}`}>
                    <ListGroup.Item className='center' key={id}>
                      <QuestionCardTiny qid={id}/>
                    </ListGroup.Item>
                  </Link>
                ))}
            </ListGroup>
          }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  const questionIds = Object.keys(questions)
    .sort((a,b) => questions[b].timestamp - questions[a].timestamp)
  const userAnswerIds = Object.keys(users[authedUser].answers)

  return {
    answeredIds: questionIds.filter(q => userAnswerIds.includes(q)),
    unAnsweredIds: questionIds.filter(q => !userAnswerIds.includes(q))
  }
}

export default connect(mapStateToProps)(Dashboard)