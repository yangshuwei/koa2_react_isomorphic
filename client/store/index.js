/*
 * @Author: yangshuwei 
 * @Date: 2018-10-18 15:45:50 
 * @Last Modified by: yangshuwei
 * @Last Modified time: 2018-10-26 18:07:29
 */
import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'
const createStoreWithMiddleware = applyMiddleware(
    thunk
  )(createStore)
export default function configureStore(initialState) {
const store = createStoreWithMiddleware(rootReducer, initialState,
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f)
    
    return store
}