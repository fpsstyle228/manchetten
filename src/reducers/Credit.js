const initialState = {
  headline: 'Рассрочка от застройщика!',
  text: 'Первоначальный взнос от 10%, период рассрочки до 24 месяцев',
  textButton: 'Узнать подробнее!'
}

const creditReducer = function (state = initialState, action) {
  if (action.type === "LOAD_CREDIT_INFORMATION") {
    return {
      ...state,
      headline: action.payload.headline,
      text: action.payload.text,
      textButton: action.payload.textButton
  }
  }else if (action.type === "LOAD_DEFAULT_CREDIT") {
      return {
        ...state
    }
  }
  return state;
}

export default creditReducer;
