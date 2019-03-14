import { getInitialData, saveQuestion, saveQuestionAnswer } from '../utils/api'
import { receiveUsers, addUserQuestion, addUserAnswer } from './users'
import { receiveQuestions, addQuestion, addQuestionVote} from './questions'
import { setAuthedUser } from './authedUser'
import { showLoading, hideLoading } from 'react-redux-loading'

// tylermcginnis 
// sarahedo

export function handleInitialData () {
  return (dispatch) => {
    dispatch(showLoading())
    return getInitialData()
      .then(({ users, questions }) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        dispatch(setAuthedUser('tylermcginnis'))
        dispatch(hideLoading())
      })
  }
} 

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestion({ optionOneText, optionTwoText, author })
      .catch((e) => {
        alert('Error in handling handleAddQuestion: ', e)
      })
      .then((question) => {
        dispatch(addQuestion(question))
        dispatch(addUserQuestion(question))
        dispatch(hideLoading())
      })
  }
}

export function handleAnswer(authedUser, qid, answer) {
  return (dispatch) => {
    dispatch(showLoading())
    return saveQuestionAnswer({ authedUser, qid, answer })
      .catch((e) => {
        alert('Error in handling handleAddQuestion: ', e)
      })
      .then(() => {
        dispatch(addQuestionVote(authedUser, qid, answer))
        dispatch(addUserAnswer(authedUser, qid, answer))
        dispatch(hideLoading())
      })
  }
}