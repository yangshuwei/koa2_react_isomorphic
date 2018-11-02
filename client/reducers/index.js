/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 15:30:28 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-31 18:16:11
 */
import { combineReducers } from 'redux'
function list (state = {}, action) {
  switch (action.type) {
    case 'DAILY_LIST_SUCCESS':
      return {state,listData:action.listData}
    default:
      return state
  }
}

export default combineReducers({
  list
})