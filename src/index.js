import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from "redux";
import {Provider} from "react-redux";
import rootReducer from "./reducers/rootReducer"
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
, document.getElementById("root"))
serviceWorker.unregister();
