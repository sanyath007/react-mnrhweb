import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from '../App'

const history = createBrowserHistory();

const router = (
  <BrowserRouter history={history}>
    <App />
  </BrowserRouter>
);

export default router;
