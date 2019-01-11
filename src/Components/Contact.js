import React, {Component} from 'react';


class Contact extends Component {

  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 mx-auto text-center rasp">
              <h2 className="section-heading">{this.props.data.headline}</h2>
              <hr className="my-4"/>

              <p className="text-black mb-4">{this.props.data.text}</p>
              <a className="btn btn-light btn-xl js-scroll-trigger grad" href="#services">{this.props.data.textButton}</a>
            </div>
            <div className="col-lg-8 mx-auto text-center ">
              <img src={this.props.data.img} alt= 'Contact'/>
            </div>
          </div>
        </div>
      </section>

  )

  }
}

export default Contact;
