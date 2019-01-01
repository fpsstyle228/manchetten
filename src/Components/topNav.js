import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Logo from '../logo.svg';
import Bars from "../bars-solid.svg";

import AppBar from '@material-ui/core/AppBar';

class TopNav extends Component {
  constructor() {
    super();
    this.state = {
      scrolling: false
  };
  this.handleScroll = this.handleScroll.bind(this);
}
  state = {
    anchorEl: null
  };
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  };

  handleScroll(event) {
    if (window.scrollY === 0 && this.state.scrolling === true) {
      this.setState({scrolling: false});
    } else if (window.scrollY !== 0 && this.state.scrolling !== true) {
      this.setState({scrolling: true});
    }
  };
  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };
  render() {
    const {anchorEl} = this.state;
    return (<div className="topNavMain">
      <div onScroll = {(ev)=> this.handleScroll(ev)}
         className= {this.state.scrolling ? "topNav nav-scrolled" : "topNav" }>
        <div className="contLogo">
          <img className="bars_nav" src={Logo} alt=""/>
        </div>
        <div className="contNav-mobile">
          <Button aria-owns={anchorEl
              ? 'simple-menu'
              : undefined} aria-haspopup="true" onClick={this.handleClick}>
            <img className src={Bars} alt=""/>
          </Button>
          <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
            <MenuItem onClick={this.handleClose}>О Комплексе</MenuItem>
            <MenuItem onClick={this.handleClose}>Преимущества</MenuItem>
            <MenuItem onClick={this.handleClose}>Цены</MenuItem>
            <MenuItem onClick={this.handleClose}>Рассрочка</MenuItem>
            <MenuItem onClick={this.handleClose}>Планировки</MenuItem>
            <MenuItem onClick={this.handleClose}>Контакты</MenuItem>
          </Menu>
        </div>
        <div className="contNav">
          <ul>
            <li>
              <a className={this.state.scrolling ? "scrolled-links-black" : "" } href="#">О Комплексе</a>
            </li>
            <li>
              <a className={this.state.scrolling ? "scrolled-links-black" : "" } href="#">Преимущества</a>
            </li>
            <li>
              <a className={this.state.scrolling ? "scrolled-links-black" : "" } href="#">Цены</a>
            </li>
            <li>
              <a className={this.state.scrolling ? "scrolled-links-black" : "" } href="#">Рассрочка</a>
            </li>
            <li>
              <a className={this.state.scrolling ? "scrolled-links-black" : "" } href="#">Планировки</a>
            </li>
            <li>
              <a className={this.state.scrolling ? "scrolled-links-black" : "" } href="#">Контакты</a>
            </li>
          </ul>
        </div>
      </div>
    </div>)

  }
}

export default TopNav;
