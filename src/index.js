import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import {applyMiddleware, createStore} from 'redux'

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(rootReducer,applyMiddleware(thunk))

root.render(
  <Provider store = {store}>
    <App/>
  </Provider>
);

