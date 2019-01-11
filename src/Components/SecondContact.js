import React, {Component} from 'react';

class SecondContact extends Component {

  render() {
    const numbers = this.props.data.phoneNumbers.map((num) => {
      return   <p className="text-black mb-4 phs">
          <a href="tel:+380503921260">
            {num}</a>
        </p>
    })
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto text-center ">
              <img src={this.props.data.img} alt="SecondContact" />
            </div>

            <div className="col-lg-4 mx-auto text-center ">
              <h2 className="section-heading">{this.props.data.headline}</h2>
              <hr className="my-4"/>
              <hr className="light my-4"/>
              <p className="text-black mb-4">{this.props.data.address}</p>
              {numbers}
            </div>
            <a className="btn btn-light btn-xl js-scroll-trigger grad" href="#services">Связаться с нами!</a>
          </div>

        </div>
      </section>

  )

  }
}

export default SecondContact;
