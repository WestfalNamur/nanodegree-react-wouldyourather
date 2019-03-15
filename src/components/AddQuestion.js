import React, { Component } from 'react'
import { connect } from 'react-redux'
import { handleAddQuestion } from '../actions/shared'

class AddQuestion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      optionOneText: '',
      optionTwoText: '',    
    }
    this.handleOptionOneInput = this.handleOptionOneInput.bind(this)
    this.handleOptionTwoInput = this.handleOptionTwoInput.bind(this)
    this.handleSubmitQuestion = this.handleSubmitQuestion.bind(this)
  }

  handleOptionOneInput(event) {
    this.setState({optionOneText: event.target.value})
  } 

  handleOptionTwoInput(event) {
    this.setState({optionTwoText: event.target.value})
  }

  handleSubmitQuestion(event) {
    event.preventDefault()
    this.props.dispatch(handleAddQuestion(this.state.optionOneText, 
                                          this.state.optionTwoText, 
                                          this.props.authedUser))
    this.setState({optionOneText: ''})
    this.setState({optionTwoText: ''})
  }

  render() {
    return (
      <div className='AddQuestion'>
        <form onSubmit={this.handleSubmitQuestion}>
          <h5>Would you rather: </h5>
          <div>
            <input type='text' value={this.state.optionOneText} onChange={this.handleOptionOneInput} />
          </div>
          <h5>or</h5>
          <div>
            <input type='text' value={this.state.optionTwoText} onChange={this.handleOptionTwoInput} />
          </div>
          {this.state.optionOneText.length > 0 && this.state.optionTwoText.length > 0 
            && <input type="submit"  value="Submit" />}
        </form>
      </div>
    )
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    authedUser: authedUser
  }
}

export default connect(mapStateToProps)(AddQuestion)

// handleAddQuestion(optionOneText, optionTwoText, author)