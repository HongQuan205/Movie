import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {Provider} from 'react-redux'
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import {applyMiddleware, compose, createStore} from 'redux'

const enhanced = compose(
  applyMiddleware(thunk)
)

const root = ReactDOM.createRoot(document.getElementById('root'))
const store = createStore(rootReducer,enhanced)


root.render(
  <Provider store = {store}>
    <App/>
  </Provider>
);

