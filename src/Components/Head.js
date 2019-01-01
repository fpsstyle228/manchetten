import React, {Component} from 'react';

import TopNav from "./topNav";

class Head extends Component {

  render() {
    return (
      <header className="masthead text-center text-white d-flex">
        <TopNav />
        <div className="cover">
          <div className="container">
            <div className="row">

              <div className="col-lg-4 mx-auto">

                <h2 className="mobileBannerTop">

                  Наш новый проект на площади Толбухина!
                </h2>

                <div className=" head_btn">

                  <a className="btn btn-primary btn-xl js-scroll-trigger" href="#about">Оставить заявку<i style={{
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
                    <span>(098) 211 98 58</span><br/>
                    <span>(066) 562 11 51</span>
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
