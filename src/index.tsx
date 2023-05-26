import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
import reportWebVitals from './reportWebVitals';
import './assets/scss/style.scss'
import { BrowserRouter, unstable_HistoryRouter as History } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { history } from './util/settings/config';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
    <History history={history}>
      <App />
    </History>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
