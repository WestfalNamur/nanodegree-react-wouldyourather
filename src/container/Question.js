import React, { Component } from 'react'
import { connect } from 'react-redux'

class Question extends Component {
  render() {
    const { userAnswerIds } = this.props
    const { pathname } = this.props.location
    const realivePath = pathname.split('/').pop()
    const answered = userAnswerIds.includes(realivePath)

    return (
      <div>
        { answered &&
          <p> already answered </p>
        }
        { !answered &&
          <p> not yet answered </p>
        }
      </div>
    )
  }
}

function mapStateToProps ({ questions, authedUser, users }) {
  return {
    userAnswerIds: Object.keys(users[authedUser].answers)
  }
}

export default connect(mapStateToProps)(Question)