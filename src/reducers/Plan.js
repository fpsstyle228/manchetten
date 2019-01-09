import Img10 from '../css/img/10.png';
import Img20 from '../css/img/20.png';
import Img30 from '../css/img/30.png';
import Img40 from '../css/img/40.png';
import Img50 from '../css/img/50.png';

const initialState = {
  headline: 'Планировки квартир',
  images: [Img10, Img20, Img30, Img40, Img50],
  buttonText: 'Забронировать!'
}

const planReducer = function (state = initialState, action) {
  if (action.type === "LOAD_PLAN_INFORMATION") {
    return {
      ...state,
      headline: action.payload.headline,
      images: action.payload.images,
      buttonText: action.payload.buttonText

  }
  }else if (action.type === "LOAD_DEFAULT_PLAN") {
      return {
        ...state
    }
  }
  return state;
}

export default planReducer;
