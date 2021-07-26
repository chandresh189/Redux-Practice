import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Feed from './components/Feed';
import { Provider } from 'react-redux';
import store from './store'

// store.subscribe(render);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Feed />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);