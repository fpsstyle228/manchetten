import {createStore } from "redux";
import combinedReducers from "./reducers/index";
import { devToolsEnhancer  } from 'redux-devtools-extension';


const store = createStore(combinedReducers, devToolsEnhancer());

console.log(store.getState());
store.subscribe(() => {
  // console.log("Sub", store.getState());
});

export {store};
