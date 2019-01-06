import React, {Component} from 'react';


class Record extends Component {

  render() {
    return (
      <section id="zapis">
        <h2 className="section-heading text-center">{this.props.data.headline}</h2>
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

          <button id="sendMessageButton" className="btn btn-light js-scroll-trigger grad" type="submit">{this.props.data.buttonText}</button>
        </div>

      </section>

  )

  }
}

export default Record;
