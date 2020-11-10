/*
 * @Author: dfh
 * @Date: 2020-11-10 16:27:58
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 16:40:27
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/connected-react-router/push.js
 */
import { CALL_HISTORY_METHOD } from './types'
export default function (path) {
    return {
        type:CALL_HISTORY_METHOD,
        payload:{
            method:'push',
            path
        }
    }
}