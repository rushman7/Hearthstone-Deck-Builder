import React from 'react';
import ReactDOM from 'react-dom';
import './scss/index.scss';
import App from './App';

import { BrowserRouter as Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { localState, saveState } from './persistance/index';

const localData = localState();

const store = createStore(
  rootReducer,
  localData,
  applyMiddleware(thunk, logger)
);

store.subscribe(() => {
  saveState(store.getState());
})

ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>, document.getElementById('root'));