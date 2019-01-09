import ImageMoney from "../css/img/money.jpg";
import ImagePark from "../css/img/park.jpg";
import ImageTransport from "../css/img/transport.jpg";
import ImageHouse from '../css/img/house_infrastructure.jpg';
import ImageBlock from '../css/img/blok.jpg';

const initialState = {
  headline: '5 преимуществ ЖК «Манхеттен»',
  images: [
    {
      src: ImageMoney,
      sub: 'Доступная цена'
    },
    {
      src: ImagePark,
      sub: 'Соседство с парком'
    },
    {
      src: ImageTransport,
      sub: 'Транспортная доступность'
    },
    {
      src: ImageHouse,
      sub: 'Собственная инфраструктура'
    },
    {
      src: ImageBlock,
      sub: 'Качественный материал'
    }
  ]

}

const advantagesReducer = function (state = initialState, action) {
  if (action.type === "LOAD_ADVANTAGES_INFORMATION") {
    return {
      ...state,
      headline: action.payload.headline,
      images: action.payload.images
  }
  }else if (action.type === "LOAD_DEFAULT_ADVANTAGES") {
      return {
        ...state
    }
  }
  return state;
}

export default advantagesReducer;
