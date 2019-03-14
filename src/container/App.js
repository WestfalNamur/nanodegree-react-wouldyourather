import React, { Component } from 'react'
import '../utils/App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import AddQuestion from './AddQuestion'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  } 

  render() {
    const { loading } = this.props

    return (
      <div className="App">
        {loading === true
          ? null
          : <div>
              <Dashboard />
              <AddQuestion />
            </div>
        }
      </div>
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser ? false : true,
  }  
}

export default connect(mapStateToProps)(App)