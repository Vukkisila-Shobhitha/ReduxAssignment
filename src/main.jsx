import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createStore } from 'redux';
import { Provider } from 'react-redux';

// reducer function
const reducer = (state = { counter: 0 }, action) => {
  switch (action.type) {
    case 'INCR':
      return {
        counter: state.counter + 1
      }
      case 'DECR':
      return {
        counter: state.counter - 1
      }
      case 'RESET':
      return {
        counter: 0
      }
  }
}

// create a redux store
const store = createStore(reducer);

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
