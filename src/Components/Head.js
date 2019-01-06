import React, {Component} from 'react';
import TopNav from "./topNav";

class Head extends Component {

  render() {
    // console.log(this.props.data.phoneNumbers);
    const nums = this.props.data.phoneNumbers.map( (num) => {
      return <span>{ num }<br/></span>
    })
    return (
      <header className="masthead text-center text-white d-flex">
        <TopNav data = {this.props.top} />
        <div className="cover">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 mx-auto">

                <h2 className="mobileBannerTop">

                {this.props.data.primaryText}
                </h2>

                <div className=" head_btn">

                  <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">{this.props.data.buttonText}<i style={{
        margin: "0 0 0 10px"
      }} className="fa fa-phone"></i>
                  </a>
                </div>
              </div>
              <div className="col-lg-8 mx-auto otdel prodazh">
                <div className="op">
                  <div className="b-op">
                    <p className="text-faded mb-5">
                      Телефоны Отдела продаж

                    </p>
                      {nums}
                  </div>
                </div>
              </div>

            </div>

            <div className="rel vid">

              <i className="fa fa-play first"></i>
            </div>
          </div>
        </div>
      </header>

  )

  }
}

export default Head;
