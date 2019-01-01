import React, {Component} from 'react';
import Slider from "react-slick";

import Img10 from '../css/img/10.png';
import Img20 from '../css/img/20.png';
import Img30 from '../css/img/30.png';
import Img40 from '../css/img/40.png';
import Img50 from '../css/img/50.png';

class Plan extends Component {

  render() {
    var settings = {
      infinite: true,
      autoplay: true,
      swipe: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <section id="plan" className="bg-dark text-white plan" style={{
          backgroundepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
        <div className="container text-center">
          <h2 className="mb-4">Планировки квартир</h2>
          <hr className="my-4"/>
          <div className="container">
            <Slider {...settings}>
              <div>
                <div className="slidess"><img src={Img10}/></div>
              </div>
              <div>
                <div className="slidess"><img src={Img20}/></div>
              </div>
              <div>
                <div className="slidess"><img src={Img30}/></div>
              </div>
              <div>
                <div className="slidess"><img src={Img40}/></div>
              </div>
              <div>
                <div className="slidess"><img src={Img50}/></div>
              </div>
            </Slider>
            <a className="btn btn-light btn-xl sr-button">Забронировать!</a>
          </div>
        </div>
      </section>

  )

  }
}

export default Plan;
