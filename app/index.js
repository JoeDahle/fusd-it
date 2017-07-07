import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route } from 'react-router-dom';
import promise from 'redux-promise';

import reducers from './reducers';

import Directory from './containers/directory';

const createStoreWithMiddleWare = applyMiddleware(promise)(createStore);

ReactDom.render(
  <Provider store={createStoreWithMiddleWare(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/" component={Directory} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('app')
)
