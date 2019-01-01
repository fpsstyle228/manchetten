import React, {Component} from 'react';

import ManMap from '../css/img/manmap.jpg';


class Contact extends Component {

  render() {
    return (
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
              <img src={ManMap}/>
            </div>
          </div>
        </div>
      </section>

  )

  }
}

export default Contact;
