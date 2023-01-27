import React, {Component} from 'react';
import {configureStore} from '@reduxjs/toolkit';
import combineReducers from './store/reducers/index';
import {Provider} from 'react-redux';
import Router from './Router';
import thunk from 'redux-thunk';

const store = configureStore({
  reducer: combineReducers,
  middleware: [thunk],
});

export default class SeriesApp extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}
