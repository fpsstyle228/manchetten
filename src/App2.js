import React, { Component } from 'react';
import './creative.css';

import ManMap from './css/img/manmap.jpg';


class  App2 extends Component {
  render(){
    return  (
      <div>
      <section id="contact">
      <div className="container">
      <div className="row">
      <div className="col-lg-4 mx-auto text-center rasp">
      <h2 className="section-heading">Расположение</h2>
      <hr className="my-4"/>

      <p className="text-black mb-4">Комплекс расположен в сердце динамично развивающегося района на пересечении улиц Академика Филатова и Люстдорфской дороги. Уникальность идеи состоит в эффективном обустройстве эксклюзивного пространства, удачно сочетающего в себе идеальное месторасположение, просторную благоустроенную придомовую территорию и развитую инфраструктуру.</p>
      <a className="btn btn-light btn-xl js-scroll-trigger grad" href="#services">Узнать подробнее!</a>
      </div>
      <div className="col-lg-8 mx-auto text-center ">
      <img src={ManMap} />
      </div>
      </div>
      </div>
      </section>
      <section id="zapis">
      <h2 className="section-heading text-center">Записаться на показ</h2>
      <hr className="my-4"/>
      <div className="flex cform">
      <div className="form-group">
      <input className="form-control" id="name" type="text" placeholder="Ваше имя *" required="" data-validation-required-message="Please enter your name."/>
      <p className="help-block text-danger"></p>
      </div>
      <div className="form-group">
      <input className="form-control" id="phone" type="tel" placeholder="Ваш телефон *" required="" data-validation-required-message="Please enter your phone number."/>
      <p className="helpblock text-danger"></p>
      </div>



      <button id="sendMessageButton" className="btn btn-light js-scroll-trigger grad" type="submit">Отправить</button>
      </div>

      </section>




      <section id="contact">
      <div className="container">
      <div className="row">
      <div className="col-lg-8 mx-auto text-center ">
      <img src="img/man.jpg"/>
      </div>

      <div className="col-lg-4 mx-auto text-center ">
      <h2 className="section-heading">Контакты</h2>
      <hr className="my-4"/>
      <hr className="light my-4"/>
      <p className="text-black mb-4">Одесса, Академика Филатова, 2</p>
      <p className="text-black mb-4 phs"><a href="tel:+380503921260"> +38 (098) 211 98 58</a></p>
      <p className="text-black mb-4 phs"><a href="tel:+380634868240"> +38 (066) 562 11 51</a></p>
      </div>
      <a className="btn btn-light btn-xl js-scroll-trigger grad" href="#services">Связаться с нами!</a>
      </div>

      </div>
      </section>

</div>
)
    }
  }
export default App2;
