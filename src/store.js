import {createStore} from "redux";
import combinedReducers from "./reducers/index";



const store = createStore(combinedReducers);

console.log(store.getState());
store.subscribe(() => {
  // console.log("Sub", store.getState());
});

export {store};
