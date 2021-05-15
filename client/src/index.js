import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reducer from './Redux/reducers';
import { Provider } from 'react-redux';
import configureStore from './Store/store';

const store = configureStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
