import React, {Component} from 'react';



class About extends Component {
  render() {
    return (
      <section id="okomp">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2 className="section-heading">{this.props.data.headline}</h2>
            <hr className="my-4"/>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <p className="o-komp">
            {this.props.data.text}
          </p>
        </div>
      </div>
    </section>
      )

  }
}

export default About;
