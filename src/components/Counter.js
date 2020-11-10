/*
 * @Author: dfh
 * @Date: 2020-11-10 15:12:31
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 15:40:29
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/components/Counter.js
 */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions/counter'

class Counter extends Component {
    render() {
        const { num } = this.props

        return (
            <div>
                <div>{num}</div>
                <button onClick={this.props.increament}>+</button>
                <button onClick={this.props.decreament}>-</button>
                <button onClick={this.props.goHome}>跳转到首页</button>
            </div>
        )
    }
}

export default connect(
    state => state.counter,
    actions
)(Counter)
