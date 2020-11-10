/*
 * @Author: dfh
 * @Date: 2020-11-10 15:17:15
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 17:12:34
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/store/reducers/index.js
 */
import { combineReducers } from 'redux'
import { connectRouter } from '../../connected-react-router'
import history from '../history'
import counter from './counter'
const reducers = combineReducers({
    router: connectRouter(history),
    counter
})
export default reducers