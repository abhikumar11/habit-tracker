import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import reducers from './reducers/index'
import { BrowserRouter } from 'react-router-dom';
import history from './history';

const root = ReactDOM.createRoot(document.getElementById('root'));
const store = createStore(reducers, applyMiddleware(thunk));
root.render(

  <Provider store={store}>
    <BrowserRouter history={history}>
    <App />
    </BrowserRouter>
  </Provider>
);
