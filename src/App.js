import React, {Component} from 'react';
import './css/creative2.css';
import {connect} from "react-redux";

import Head from "./Components/Head";
import About from "./Components/About";
import Advantages from "./Components/Advantages";
import Price from "./Components/Price";
import Credit from "./Components/Credit";
import Plan from "./Components/Plan";
import Contact from "./Components/Contact";
import Record from "./Components/Record";
import SecondContact from "./Components/SecondContact";
import Foot from "./Components/Foot";

class App extends Component {
  constructor() {
    super();

  };
  render() {

    return (<div className="App">
      <Head data={this.props.Head} top={this.props.topNav}/>
      <About data={this.props.About}/>
      <Advantages data={this.props.Advantages}/>
      <Price data={this.props.Price}/>
      <Credit data={this.props.Credit}/>
      <Plan data={this.props.Plan}/>
      <Contact data={this.props.Contact}/>
      <Record data={this.props.Record}/>
      <SecondContact data={this.props.SecondContact}/>
      <Foot data={this.props.Foot}/>

    </div>);
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(App);
