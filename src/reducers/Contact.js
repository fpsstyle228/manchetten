import ManMap from '../css/img/manmap.jpg';

const initialState = {
  headline: 'Расположение',
  text: 'Комплекс расположен в сердце динамично развивающегося района на пересечении улиц Академика Филатова и Люстдорфской дороги. Уникальность идеи состоит в эффективном обустройстве эксклюзивного пространства, удачно сочетающего в себе идеальное месторасположение, просторную благоустроенную придомовую территорию и развитую инфраструктуру.',
  img: ManMap,
  textButton: 'Узнать подробнее!'
}

const contactReducer = function (state = initialState, action) {
  if (action.type === "LOAD_CONTACT_INFORMATION") {
    return {
      ...state,
      headline: action.payload.headline,
      text: action.payload.text,
      img: action.payload.img,
      textButton: action.payload.textButton
  }
  }else if (action.type === "LOAD_DEFAULT_CONTACT") {
      return {
        ...state
    }
  }
  return state;
}

export default contactReducer;
