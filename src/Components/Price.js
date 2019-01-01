import React, {Component} from 'react';


class Price extends Component {

  render() {
    return (
      <section id="price">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">Цены на квартиры</h2>
              <hr className="my-4"/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ban in">
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <img src="img/sofa1.png"/>
                <h3 className="mb-3">1-комнатные</h3>
                <p className="text-muted mb-0">от 38,9 кв.м.</p>
                <span className="pr_bl fr">Цена от
                  <br/>
                  <strong>31 300 у.е.</strong>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <img src="img/sofa2.png"/>
                <h3 className="mb-3">2-комнатные</h3>
                <p className="text-muted mb-0">от 55,6 кв.м.</p>
                <span className="pr_bl">Цена от
                  <br/>
                  <strong>43 300 у.е.</strong>
                </span>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 text-center">
              <div className="service-box mt-5 mx-auto">
                <img src="img/sofa3.png"/>
                <h3 className="mb-3">3-комнатные</h3>
                <p className="text-muted mb-0">от 72,2 кв.м.</p>
                <span className="pr_bl">Цена от
                  <br/>
                  <strong>53 200 у.е.</strong>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

  )

  }
}

export default Price;
