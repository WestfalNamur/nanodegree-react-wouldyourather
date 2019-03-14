export const RECEIVE_USERS = 'RECEIVE_USERS' 
export const ADD_USER_QUESTIONS ='ADD_USER_QUESTIONS'
export const ADD_USER_ANSWER = 'ADD_USER_ANSWER'

export function receiveUsers (users) {
  return {
    type: RECEIVE_USERS,
    users,
  }
} 

export function addUserQuestion (question) {
  return {
    type: ADD_USER_QUESTIONS,
    question,
  }
}

export function addUserAnswer (authedUser, qid, answer) {
  return {
    type: ADD_USER_ANSWER,
    authedUser,
    qid,
    answer
  }
}