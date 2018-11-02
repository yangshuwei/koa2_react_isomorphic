/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 15:48:54 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-30 17:38:05
 */
import App from '../containers/App'
import dailyNew from '../components/List'
import { Router, Route, browserHistory } from 'react-router'
import React from 'react'

export default (
<Router history={browserHistory}>
  <Route path="/" component={App}></Route>
  <Route path="/dailyNew" component={dailyNew}></Route>
</Router>
)