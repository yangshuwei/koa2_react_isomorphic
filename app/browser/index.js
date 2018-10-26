/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 15:51:47 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-26 18:04:42
 */
import React from 'react'
import ReactDOM from 'react-dom'
import routes from '../client/routers'
import { Provider } from 'react-redux'
import configureStore from '../../client/store/'

const store = configureStore(window.__REDUX_STATE__)
ReactDOM.render(
  <Provider store={store}>
    {routes}
  </Provider>,
  document.querySelector('.react-container')
)
