import React, { Component } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./App.css";
// import reducer from "./store/reducer";
import reducerA from "./store/reducerA";
import reducerB from "./store/reducerB";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

const rootReducer = combineReducers({
  rA: reducerA,
  rB: reducerB
});

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
