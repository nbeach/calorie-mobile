import {combineReducers} from "redux"
import {itemReducer} from "./itemReducer"
import {addItemReducer} from "./addItemReducer"

export default combineReducers({
    items: itemReducer,
    addItem: addItemReducer,
})
