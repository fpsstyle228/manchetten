import ImgMan from '../css/img/man.jpg';

const initialState = {
  img: ImgMan,
  headline: 'Контакты',
  address: 'Одесса, Академика Филатова, 2',
  phoneNumbers: ['+38 (098) 211 98 58', '+38 (066) 562 11 51'],
  buttonText: 'Связаться с нами!'
}

const secondContactReducer = function (state = initialState, action) {
  if (action.type === "LOAD_SECOND_CONTACT_INFORMATION") {
    return {
      ...state,
      img: action.payload.img,
      headline: action.payload.headline,
      address: action.payload.address,
      phoneNumbers: action.payload.phoneNumbers,
      buttonText: action.payload.buttonText
  }
  }else if (action.type === "LOAD_DEFAULT_SECOND_CONTACT") {
      return {
        ...state
    }
  }
  return state;
}

export default secondContactReducer;
