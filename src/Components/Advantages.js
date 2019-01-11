import React, {Component} from 'react';


class Advantages extends Component {
  render() {
    const AdventagesImages = this.props.data.images.map((img) => {
      return <div className="flexy">
        <span>
          { img.sub }
        </span>
        <div className="img_cover"><img src={img.src} alt={ img.sub} /></div>
      </div>
    })

    return (
      <div className="cover comptop">
        <section className="bg-primary" id="preim">
          <div className="container">
            <div className="row">
              <div className="mx-auto text-center preim">
                <h2 className="section-heading text-white">{this.props.data.headline}</h2>
                <div className="flex compare comparerr">
                  {AdventagesImages}

                </div>

                <blockquote></blockquote>

              </div>
            </div>
          </div>
        </section>
      </div>
      )

  }
}

export default Advantages;
