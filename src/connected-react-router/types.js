/*
 * @Author: dfh
 * @Date: 2020-11-10 16:28:33
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 16:32:13
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/connected-react-router/types.js
 */
//当路径改变时，向仓库派发一个动作
export const LOCATION_CHANGE='@@router/LOCATION_CHANGE'
//向仓库里面的路由中间件派发动作时用这个action type
export const CALL_HISTORY_METHOD='@@router/CALL_HISTORY_METHOD'