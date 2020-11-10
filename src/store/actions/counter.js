/*
 * @Author: dfh
 * @Date: 2020-11-10 15:32:03
 * @LastEditors: dfh
 * @LastEditTime: 2020-11-10 17:12:42
 * @Modified By: dfh
 * @FilePath: /connected-react-router-study/src/store/actions/counter.js
 */
import { push } from '../../connected-react-router'
import * as Types from '../action-types'
export default {
    increament: () => {
        return { type: Types.INCREAMENT }
    },
    decreament: () => {
        return { type: Types.DECREAMENT }
    },
    goHome: () => {
        return push('/')
    }
}