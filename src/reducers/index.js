import { combineReducers } from 'redux';

import Header from "./Header";
import About from "./About";
import Advantages from "./Advantages";
import Contact from "./Contact";
import Credit from "./Credit";
import Foot from "./Foot";
import Plan from "./Plan";
import Price from "./Price";
import Record from "./Record";
import SecondContact from "./SecondContact";
import TopNav from "./topNav";

export default combineReducers({
  Header,
  About,
  Advantages,
  Contact,
  Credit,
  Foot,
  Plan,
  Price,
  Record,
  SecondContact,
  TopNav
})
