import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAnswer } from '../actions/shared'

class Question extends Component {
  state = {
    selectedOption: '',
  }

  handleChange = (e) => {
    this.setState({selectedOption: e.target.value})
  }

  handleSubmit = (e) => {
    e.preventDefault()

    const { dispatch, question } = this.props
    const { selectedOption } = this.state

    dispatch(handleAnswer({
      questionId: question.id,
      answer: selectedOption
    }))
  }

  render() {
    const { question } = this.props

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select 
            value={this.state.value} 
            onChange={this.handleChange}
          >
            <option
              value={question.optionOne.text}
            >{question.optionOne.text}</option>
            <option
              value={question.optionTwo.text}
            >{question.optionTwo.text}</option>
          </select>
          <button 
            type="button" 
            disabled={!this.state.selectedOption} 
            onClick={this.handleSubmit.bind(this)}
          >Submit</button>
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ questions }, { id }) {
  return {
    question: questions[id]
  }
}

export default connect(mapStateToProps)(Question)