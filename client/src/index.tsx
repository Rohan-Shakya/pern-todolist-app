import React from 'react';
import ReactDOM from 'react-dom';
// Component
import App from './App';
// Redux: Store and Provider
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
