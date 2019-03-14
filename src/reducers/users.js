import {
  RECEIVE_USERS,
  ADD_USER_QUESTIONS,
  ADD_USER_ANSWER 
} from '../actions/users'

export default function users (state = {}, action) {
  switch(action.type) {
    case RECEIVE_USERS :
      return {
        ...state,
        ...action.users
      }
    case ADD_USER_ANSWER :
      return {
        ...state,
        [action.authedUser]: {
          ...state[action.authedUser],
          answers: {
            ...state[action.authedUser].answers,
            [action.qid]: action.answer
          }
        }
      }
    case ADD_USER_QUESTIONS : 
      return {
        ...state,
        [action.question.author]: {
          ...state[action.question.author],
          questions: [...state[action.question.author].questions, action.question.id]
        }
      }        
    default :
      return state
  }
} 
