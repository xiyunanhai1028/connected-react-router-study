/*
 * @Author: dfh
 * @Date: 2020-11-10 15:16:55
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 17:12:19
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/store/index.js
 */
import { createStore, applyMiddleware } from 'redux'
import { routerMiddleware } from '../connected-react-router'
import history from './history'
import reducers from './reducers'
const store = createStore(reducers, applyMiddleware(routerMiddleware(history)))
window.store=store
export default store