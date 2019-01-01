import React, {Component} from 'react';


class Rassr extends Component {

  render() {
    return (
      <section className="bg-primary" id="rassr">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto text-center credit">
              <h2 className="section-heading">Рассрочка от застройщика!</h2>
              <p className="text-faded mb-4">Первоначальный взнос от 10%, период рассрочки до 24 месяцев</p>
              <a className="btn btn-light btn-xl js-scroll-trigger" href="#services">Узнать подробнее!</a>
            </div>
          </div>
        </div>
      </section>

  )

  }
}

export default Rassr;
