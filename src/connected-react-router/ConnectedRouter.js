/*
 * @Author: dfh
 * @Date: 2020-11-10 16:26:33
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 17:43:46
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/connected-react-router/ConnectedRouter.js
 */
import React, { Component } from 'react'
import { Router } from 'react-router'
import { ReactReduxContext } from 'react-redux'
import { LOCATION_CHANGE } from './types'

export default class ConnectedRouter extends Component {
    static contextType = ReactReduxContext

    componentDidMount() {
        //浏览器路径发生变化时此监听函数会执行，location:代表当前路径对象，action：代表当前动作，如：push ,pop...
        this.unlisten= this.props.history.listen((location, action) => {
            this.context.store.dispatch({
                type: LOCATION_CHANGE,
                payload: {
                    location,
                    action
                }
            })
        })
    }

    componentWillUnmount() {
        this.unlisten()
    }

    render() {
        const { history, children } = this.props
        return (
            <Router history={history}>
                {children}
            </Router>
        )
    }
}
