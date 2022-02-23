import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import{Provider} from "react-redux"
import {BrowserRouter as Router} from 'react-router-dom';
import GlobalStyle from './data/GlobaleStyle';
import store from "./store/store"

ReactDOM.render(
  
  <Router>
    <GlobalStyle/>
    <Provider store={store}>
    <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);


