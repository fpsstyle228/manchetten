import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

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
    const menuItemsMob = this.props.data.list.map((item) => {
    return  <MenuItem onClick={this.handleClose}>{item}</MenuItem>
    });
    const menuItems = this.props.data.list.map((item) => {
    return  <li>
        <a className={this.state.scrolling ?
             "scrolled-links-black" : "" } href="#">{item}</a>
      </li>
    })
    return (<div className="topNavMain">
      <div onScroll = {(ev)=> this.handleScroll(ev)}
         className= {this.state.scrolling ? "topNav nav-scrolled" : "topNav" }>
        <div className="contLogo">
          <img className="bars_nav" src={this.props.data.logo} alt=""/>
        </div>
        <div className="contNav-mobile">
          <Button aria-owns={anchorEl
              ? 'simple-menu'
              : undefined} aria-haspopup="true" onClick={this.handleClick}>
            <img className src={this.props.data.bars} alt=""/>
          </Button>
          <Menu id="simple-menu" anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={this.handleClose}>
            {menuItemsMob}
          </Menu>
        </div>
        <div className="contNav">
          <ul>
            {menuItems}
          </ul>
        </div>
      </div>
    </div>)

  }
}

export default TopNav;
