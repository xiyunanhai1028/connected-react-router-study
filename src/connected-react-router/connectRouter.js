/*
 * @Author: dfh
 * @Date: 2020-11-10 16:25:45
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 17:11:56
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/connected-react-router/connectRouter.js
 */
import { LOCATION_CHANGE } from './types'
export default function (history) {
    let initialState = { location: history.locaton, action: history.action }
    return function (state = initialState, action) {
        switch (action.type) {
            case LOCATION_CHANGE:
                return action.payload
            default:
                return state
        }
    }
}