/*
 * @Author: dfh
 * @Date: 2020-11-10 16:26:14
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 17:14:41
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/connected-react-router/routerMiddleware.js
 */
import { CALL_HISTORY_METHOD } from './types'
export default function (history) {
    return ({ dispatch, getState }) => next => action => {
        if (action.type === CALL_HISTORY_METHOD) {
            const { method, path } = action.payload
            //路由里面靠的是hisotry:history.push('/)
            history[method](path)
        }else{
            next(action)
        }
    }
}