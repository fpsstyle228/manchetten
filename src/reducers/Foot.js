import Logo from '../logo.svg';

const initialState = {
  logo: Logo,
  phoneNumbers: ['+38 (098) 211 98 58', '+38 (066) 562 11 51']
}

const footReducer = function (state = initialState, action) {
  if (action.type === "LOAD_FOOT_INFORMATION") {
    return {
      ...state,
      logo: action.payload.logo,
      phoneNumbers: action.payload.phoneNumbers
  }
  }else if (action.type === "LOAD_DEFAULT_FOOT") {
      return {
        ...state
    }
  }
  return state;
}

export default footReducer;
