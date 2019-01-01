import React, {Component} from 'react';

import Logo from '../logo.svg';

class Foot extends Component {

  render() {
    return (
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="kingplace-logo">
              <img src={Logo} alt=""/>

            </div>
            <div className="top_nums bot_nums">
              <div className="bn">
                <p className="text-black mb-4">
                  <a href="tel:+380503921260">
                    +38 (098) 211 98 58</a>
                </p>
                <p className="text-black mb-4">
                  <a href="tel:+380634868240">
                    +38 (066) 562 11 51</a>
                </p>
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
