import React, { Component } from 'react'
import '../utils/App.css'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Dashboard from './Dashboard'
import AddQuestion from './AddQuestion'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NoMatch from './NoMatch'
import Question from './Question'
import Login from './Login'
import LoadingBar from 'react-redux-loading'
import Navigationbar from './Navigationbar'
import Leadboard from './Leadboard'

class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData())
  } 

  render() {
    const { loading } = this.props

    return (
      <Router> 
        <div className="App">
          <LoadingBar />
          <Navigationbar />
          {loading === true
            ? <Login />
            : <Switch>
                <Route exact path='/' component={Dashboard} />
                <Route exact path='/addquestion' component={AddQuestion} />
                <Route exact path='/leadboard' component={Leadboard} />
                <Route exact path='/questions/:id' component={Question} />
                <Route component={NoMatch} />
              </Switch>
          }
       </div>
      </Router> 
    );
  }
}

function mapStateToProps ({ authedUser }) {
  return {
    loading: authedUser ? false : true,
  }  
}

export default connect(mapStateToProps)(App)