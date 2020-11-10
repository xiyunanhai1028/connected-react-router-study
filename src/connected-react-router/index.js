/*
 * @Author: dfh
 * @Date: 2020-11-10 16:25:10
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 16:43:40
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/connected-react-router/index.js
 */
import connectRouter from './connectRouter'
import routerMiddleware from './routerMiddleware'
import ConnectedRouter from './ConnectedRouter'
import push from './push'
export {
    connectRouter,//创建reducer函数，接收一个history参数
    routerMiddleware,//创建路由中间件函数，接收一个history参数
    ConnectedRouter,//一个路由容器
    push//用来返回一个跳转路径的action
}