import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import store from './store.js';

import { authenticate } from '../src/actions/authActions';

// -- Styles --
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import "./styles/css/index.css";
import './styles/scss/index.scss';

if (!localStorage.getItem('token') && localStorage.getItem('user')) {
  authenticate(localStorage.user);
  
}

// TODO: globally set CSRF token from csrf_meta_tag?

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root") // eslint-disable-line no-undef
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
// serviceWorker.register();




