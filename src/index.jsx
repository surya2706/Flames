import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Form from './components/form';
import './index.css';
import { store } from './store';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <Form />
  </Provider>,
  document.getElementById('root')
);
