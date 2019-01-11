import React, {Component} from 'react';


class Price extends Component {

  render() {
    const houses = this.props.data.houses.map((house) => {
      return <div className="col-lg-4 col-md-6 text-center">
        <div className="service-box mt-5 mx-auto">
          <img src= {house.img}  alt={house.bigText} />
          <h3 className="mb-3">{house.bigText}</h3>
          <p className="text-muted mb-0">{house.smallText}</p>
          <span className="pr_bl fr">Цена от
            <br/>
            <strong>{house.price}</strong>
          </span>
        </div>
      </div>
    })
    return (
      <section id="price">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 text-center">
              <h2 className="section-heading">{this.props.data.headline}</h2>
              <hr className="my-4"/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row ban in">
            {houses}
          </div>
        </div>
      </section>

  )

  }
}

export default Price;
