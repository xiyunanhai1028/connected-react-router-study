/*
 * @Author: dfh
 * @Date: 2020-11-10 15:10:13
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 17:12:10
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/index.js
 */
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter as Router, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import Counter from './components/Counter'
import { Provider } from 'react-redux'
import { ConnectedRouter } from './connected-react-router'
import history from './store/history'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <>
                <Link to='/'>Home</Link>
                <Link to='/counter'>Counter</Link>
                <hr />
                <Route path='/' exact component={Home} />
                <Route path='/counter' component={Counter} />
            </>
        </ConnectedRouter>
    </Provider>, document.getElementById('root'))