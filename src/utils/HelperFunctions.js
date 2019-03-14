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