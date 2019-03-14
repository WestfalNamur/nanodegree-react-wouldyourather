import React, { Component } from 'react'
import '../utils/App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import { Route, Switch } from 'react-router-dom'
import NavigationBar from './NavigationBar'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import AddQuestion from './AddQuestion'
import Dashboard from './Dashboard'
import Question from './Question'
import NoMatch from './NoMatch'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  }

  render() {
    const { loading } = this.props

    return (
      <div className="App">
        <LoadingBar />
        <NavigationBar />
        <Route>
          {loading === true
            ? <Login />
            : <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/addquestion' component={AddQuestion} />
                <Route exact path='/questions/:id' component={Question} />
                <Route component={NoMatch} />
              </Switch>
          }
        </Route>
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