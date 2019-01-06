import {createStore} from "redux";
import Logo from './logo.svg';
import Bars from "./bars-solid.svg";
import ImageMoney from "./css/img/money.jpg";
import ImagePark from "./css/img/park.jpg";
import ImageTransport from "./css/img/transport.jpg";
import ImageHouse from './css/img/house_infrastructure.jpg';
import ImageBlock from './css/img/blok.jpg';
import Img10 from './css/img/10.png';
import Img20 from './css/img/20.png';
import Img30 from './css/img/30.png';
import Img40 from './css/img/40.png';
import Img50 from './css/img/50.png';
import ManMap from './css/img/manmap.jpg';
import ImgMan from './css/img/man.jpg';

function reducer(state = [], action) {
  if (action.type === "ADD_TEXT") {
    return [
      ...state,
      action.payload
    ]
  }
  return state;
}
const initialState = {
  topNav: {
    list: ['О Комплексе', 'Преимущества','Цены','Рассрочка','Планировки','Контакты'],
    logo: Logo,
    bars: Bars
  },
  Head: {
    primaryText: 'Наш новый проект на площади Толбухина!',
    buttonText: 'Оставить заявку',
    phoneNumbers: ['(098) 211 98 58', '(066) 562 11 51']
  },
  About: {
    headline: 'О комплексе',
    text: 'Новый жилой комплекс «Манхеттен» расположен на персечении улиц Академика Филатова и Лютдорфской дорогию Комплекс состоит из пяти секцтй по 22 этажа каждая. Жк «Манхеттен» - идеально сочетает в себе современную архитектуру, экологические материалы и новейшие технологии строительства. Планировки квартир создают максимально комфортное жилое пространство без лишних нефункциональных площадей. Это позволяет не переплачивать за неиспользуемые квардратные метры. Мы предлагаем квартиры на любой вкус - от уютной однокомнатной до просторной трехкомнатной с выходои на личную террасу. Благоустройство комплекса предусматривает озеленение территории с устройством газонов и высадкой новых деревьев, устройство пешеходных аллей и дорожек. Здесь есть все для активного и здорового образа жизни.'
  },
  Advantages: {
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

  },
  Price: {
    headline:'Цены на квартиры',
    houses: [
      {
        img: 'img/sofa1.png',
        bigText: '1-комнатные',
        smallText: 'от 38,9 кв.м.',
        price: '31 300 у.е.'
      },
      {
        img: 'img/sofa2.png',
        bigText: '2-комнатные',
        smallText: 'от 55,6 кв.м.',
        price: '43 300 у.е.'
      },
      {
        img: 'img/sofa3.png',
        bigText: '3-комнатные',
        smallText: 'от 72,2 кв.м.',
        price: '53 200 у.е.'
      }
    ]
  },
  Credit: {
    headline: 'Рассрочка от застройщика!',
    text: 'Первоначальный взнос от 10%, период рассрочки до 24 месяцев',
    textButton: 'Узнать подробнее!'
  },
  Plan: {
    headline: 'Планировки квартир',
    images: [Img10, Img20, Img30, Img40, Img50],
    buttonText: 'Забронировать!'
  },
  Contact: {
    headline: 'Расположение',
    text: 'Комплекс расположен в сердце динамично развивающегося района на пересечении улиц Академика Филатова и Люстдорфской дороги. Уникальность идеи состоит в эффективном обустройстве эксклюзивного пространства, удачно сочетающего в себе идеальное месторасположение, просторную благоустроенную придомовую территорию и развитую инфраструктуру.',
    img: ManMap,
    textButton: 'Узнать подробнее!'
  },
  Record: {
    headline: 'Записаться на показ',
    buttonText: 'Отправить'
  },
  SecondContact: {
    img: ImgMan,
    headline: 'Контакты',
    address: 'Одесса, Академика Филатова, 2',
    phoneNumbers: ['+38 (098) 211 98 58', '+38 (066) 562 11 51'],
    buttonText: 'Связаться с нами!'
  },
  Foot: {
    logo: Logo,
    phoneNumbers: ['+38 (098) 211 98 58', '+38 (066) 562 11 51']
  }
}
const store = createStore(reducer,initialState);
console.log(store.getState());

store.subscribe(() => {
  console.log("Sub", store.getState());
});

export {store};
