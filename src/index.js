import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from "react-redux";
import App from "./App";
import {createStore} from "redux";



function reducer (state = {
    value: 0,
    even: false
}, action){
    switch (action.type) {
        case "plus" :
            return {value: state.value + 1}
        case "minus":
            return {value: state.value - 1}
        case "reset":
            return {value: state.value = 0}
        case "amount":
            return {value: state.value + action.payload}
        default:
            return {value: state.value}
    }
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
