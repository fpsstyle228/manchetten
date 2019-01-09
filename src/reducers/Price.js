const initialState = {
  headline:'Цены на квартиры',
  houses: [
    {
      img: './img/sofa1.png',
      bigText: '1-комнатные',
      smallText: 'от 38,9 кв.м.',
      price: '31 300 у.е.'
    },
    {
      img: './img/sofa2.png',
      bigText: '2-комнатные',
      smallText: 'от 55,6 кв.м.',
      price: '43 300 у.е.'
    },
    {
      img: './img/sofa3.png',
      bigText: '3-комнатные',
      smallText: 'от 72,2 кв.м.',
      price: '53 200 у.е.'
    }
  ]
}

const priceReducer = function (state = initialState, action) {
  if (action.type === "LOAD_PRICE_INFORMATION") {
    return {
      ...state,
      headline: action.payload.headline,
      houses: action.payload.houses
  }
  }else if (action.type === "LOAD_DEFAULT_PRICE") {
      return {
        ...state
    }
  }
  return state;
}

export default priceReducer;
