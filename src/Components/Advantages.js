import React, {Component} from 'react';

import ImageMoney from "../css/img/money.jpg";
import ImagePark from "../css/img/park.jpg";
import ImageTransport from "../css/img/transport.jpg";
import ImageHouse from '../css/img/house_infrastructure.jpg';
import ImageBlock from '../css/img/blok.jpg';


class Advantages extends Component {
  constructor() {
    super();
}
  render() {
    return (
      <div className="cover comptop">
        <section className="bg-primary" id="preim">
          <div className="container">
            <div className="row">
              <div className="mx-auto text-center preim">
                <h2 className="section-heading text-white">5 преимуществ ЖК «Манхеттен»</h2>
                <div className="flex compare comparerr">
                  <div className="flexy">
                    <span>
                      Доступная цена
                    </span>
                    <div className="img_cover"><img src={ImageMoney}/></div>
                  </div>
                  <div className="flexy">
                    <span>Соседство с парком</span>
                    <div className="img_cover"><img src={ImagePark}/></div>
                  </div>
                  <div className="flexy">
                    <span>Транспортная доступность</span>
                    <div className="img_cover"><img src={ImageTransport}/></div>
                  </div>
                  <div className="flexy">
                    <span>Собственная инфраструктура</span>
                    <div className="img_cover"><img src={ImageHouse}/></div>
                  </div>
                  <div className="flexy">
                    <span>Качественный материал</span>
                    <div className="img_cover"><img src={ImageBlock}/></div>
                  </div>

                </div>

                <blockquote></blockquote>

              </div>
            </div>
          </div>
        </section>
      </div>
      )

  }
}

export default Advantages;
