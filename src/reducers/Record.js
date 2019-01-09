const initialState = {
  headline: 'Записаться на показ',
  buttonText: 'Отправить'
}

const recordReducer = function (state = initialState, action) {
  if (action.type === "LOAD_RECORD_INFORMATION") {
    return {
      ...state,
      headline: action.payload.headline,
      buttonText: action.payload.buttonText

  }
  }else if (action.type === "LOAD_DEFAULT_RECORD") {
      return {
        ...state
    }
  }
  return state;
}

export default recordReducer;
