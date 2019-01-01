import React, {Component} from 'react';
import './css/creative2.css';

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
    
  }

  render() {
    return (<div className="App">
      <Head/>
      <About/>
      <Advantages/>
      <Price/>
      <Credit/>
      <Plan/>
      <Contact/>
      <Record/>
      <SecondContact/>
      <Foot/>

    </div>);
  }
}

export default App;
