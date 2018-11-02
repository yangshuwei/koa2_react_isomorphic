/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 15:45:50 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-11-01 11:07:48
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';
const createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore)
export default function configureStore(initialState) {
const store = createStoreWithMiddleware(reducers,initialState)
    
    return store
}