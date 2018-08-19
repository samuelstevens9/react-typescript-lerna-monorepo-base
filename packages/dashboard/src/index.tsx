import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import { FetchActions } from './actions/index';
import { loadFromServer } from './reducers/index';
import { IStoreState } from './types/index';


const store = createStore<IStoreState, FetchActions, any, any>(loadFromServer, {
}, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename="/c">
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
registerServiceWorker();
