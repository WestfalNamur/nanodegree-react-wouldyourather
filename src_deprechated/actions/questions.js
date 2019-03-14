export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_USER_VOTE = 'ADD_USER_VOTE'

export function receiveQuestions (questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  }
}

export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  }
}

export function addUserVote(authedUser, questionId, option) {
  return {
    type: ADD_USER_VOTE,
    authedUser,
    questionId,
    option
  }
}