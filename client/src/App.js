import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import Router from './Router'
import reducers from './reducers'
import './App.css';

class App extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(reduxThunk))

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
