import React, { Component } from 'react'
import '../utils/App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import AddQuestion from './AddQuestion'
import { Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'
import Question from './Question'

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
          : <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/addquestion' component={AddQuestion} />
              <Route exact path='/questions/:id' component={Question} />
              <Route component={NoMatch} />
            </Switch>
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