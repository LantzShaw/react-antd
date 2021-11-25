import { combineReducers } from 'redux'

import notifications from './notifications'
import products from './products'

export default combineReducers({
    notifications,
    products
})
