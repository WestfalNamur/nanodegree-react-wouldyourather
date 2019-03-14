import { getInitialData, saveQuestion } from '../utils/api'
import { receiveUsers, addQuestionUser } from './users'
import { receiveQuestions, addQuestion } from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser('sarahedo'))
        dispatch(hideLoading())
      })
  }
} 

/*
export function handleSaveQuestion(optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState();

    dispatch(showLoading());
    return _saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => {
        dispatch(addQuestion(question));
        dispatch(addQuestionUsers(question));
      })
      .then(() => dispatch(hideLoading()));
  };
}
*/

export function handleSaveQuestion (optionOneText, optionTwoText) {
  return (dispatch, getState) => {
    const { authedUser } = getState()
    dispatch(showLoading())
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author: authedUser
    })
      .then(question => {
        dispatch(addQuestion(question))
        dispatch(addQuestionUser(question))
      })
      .then(() => dispatch(hideLoading()))
  }
}