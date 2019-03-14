export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ADD_QUESTION = 'ADD_QUESTION'
export const ADD_QUESTION_VOTE = 'ADD_QUESTION_VOTE'

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

export function addQuestionVote(authedUser, qid, answer) {
  return {
    type: ADD_QUESTION_VOTE,
    authedUser,
    qid,
    answer
  }
}