import React, {Component} from 'react';

class Foot extends Component {

  render() {
    const numbers = this.props.data.phoneNumbers.map((num) => {
      return   <p className="text-black mb-4">
        <a href="tel:+380503921260">
          {num}</a>
      </p>
    })
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="kingplace-logo">
              <img src={this.props.data.logo} alt=""/>

            </div>
            <div className="top_nums bot_nums">
              <div className="bn">
                {numbers}
              </div>
            </div>
            <p>
              Жк Манхеттен 2018
            </p>
          </div>

        </div>
      </footer>

  )

  }
}

export default Foot;
