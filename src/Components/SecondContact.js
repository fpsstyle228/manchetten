import React, {Component} from 'react';

import ImgMan from '../css/img/man.jpg';

class SecondContact extends Component {

  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center ">
              <img src={ImgMan}/>
            </div>

            <div className="col-lg-4 mx-auto text-center ">
              <h2 className="section-heading">Контакты</h2>
              <hr className="my-4"/>
              <hr className="light my-4"/>
              <p className="text-black mb-4">Одесса, Академика Филатова, 2</p>
              <p className="text-black mb-4 phs">
                <a href="tel:+380503921260">
                  +38 (098) 211 98 58</a>
              </p>
              <p className="text-black mb-4 phs">
                <a href="tel:+380634868240">
                  +38 (066) 562 11 51</a>
              </p>
            </div>
            <a className="btn btn-light btn-xl js-scroll-trigger grad" href="#services">Связаться с нами!</a>
          </div>

        </div>
      </section>

  )

  }
}

export default SecondContact;
