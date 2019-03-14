import React, { Component } from 'react'
//import { connect } from 'react-redux'
import { handleSaveQuestion } from './actions/shared'

class AddQuestion extends Component {
  state = {
    optionOneText: 'drink tea',
    optionTwoText: 'drink coffee'
  }

  hanldeAddQuestion = event => {
    const { dispatch } =  this.props
    const { optionOneText, optionTwoText } =  this.state
    dispatch(handleSaveQuestion(optionOneText, optionTwoText))
  }

  render() {
    return (
      <div>
        AddQuestion
      </div>
    )
  }
}

export default AddQuestion