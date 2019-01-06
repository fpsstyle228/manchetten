import React, {Component} from 'react';
import Slider from "react-slick";

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
    const slides = this.props.data.images.map((img) => {
      return <div>
        <div className="slidess"><img src={img}/></div>
      </div>
    })
    return (
      <section id="plan" className="bg-dark text-white plan" style={{
          backgroundepeat: "no-repeat",
          backgroundSize: "cover"
        }}>
        <div className="container text-center">
          <h2 className="mb-4">{this.props.data.headline}</h2>
          <hr className="my-4"/>
          <div className="container">
            <Slider {...settings}>
              {slides}
            </Slider>
            <a className="btn btn-light btn-xl sr-button">{this.props.data.buttonText}</a>
          </div>
        </div>
      </section>

  )

  }
}

export default Plan;
