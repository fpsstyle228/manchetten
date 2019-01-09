const initialState = {
  primaryText: 'Наш новый проект на площади Толбухина!',
  buttonText: 'Оставить заявку',
  phoneNumbers: ['(098) 211 98 58', '(066) 562 11 51']
}

const headReducer = function (state = initialState, action) {
  if (action.type === "LOAD_HEAD_INFORMATION") {
    return {
      ...state,
      primaryText: action.payload.primaryText,
      buttonText: action.payload.buttonText,
      phoneNumbers: action.payload.phoneNumbers

  }
}else if (action.type === "LOAD_DEFAULT_HEADER") {
    return {
      ...state
  }
}
  return state;
}

export default headReducer;
