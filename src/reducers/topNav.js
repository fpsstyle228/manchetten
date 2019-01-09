import Logo from '../logo.svg';
import Bars from "../bars-solid.svg";

const initialState = {
  list: ['О Комплексе', 'Преимущества','Цены','Рассрочка','Планировки','Контакты'],
  logo: Logo,
  bars: Bars
}

const topNavReducer = function (state = initialState, action) {
  if (action.type === "LOAD_TOPNAV_INFORMATION") {
    return {
      ...state,
      list: action.payload.list,
      logo: action.payload.logo,
      bars: action.payload.bars
  }
}else if (action.type === "LOAD_DEFAULT_TOPNAV") {
    return {
      ...state
  }
}
  return state;
}

export default topNavReducer;
