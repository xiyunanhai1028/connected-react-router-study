/*
 * @Author: dfh
 * @Date: 2020-11-10 15:17:20
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 15:19:30
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/store/reducers/counter.js
 */
import * as Types from '../action-types'
const initalState = { num: 0 }
export default function (state = initalState, action) {
    switch (action.type) {
        case Types.INCREAMENT:
            return { num: state.num + 1 }
        case Types.DECREAMENT:
            return { num: state.num - 1 }
        default:
            return state
    }
}