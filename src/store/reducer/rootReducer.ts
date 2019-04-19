import {Action, combineReducers, Reducer} from "redux"
import {itemReducer} from "./itemReducer"
import {addItemReducer} from "./addItemReducer"
import {AppState} from "../state/AppState"

type RootReducerDefinition<T> = {
    readonly [P in keyof T]: Reducer<T[P], Action>
}

export default combineReducers({
    items: itemReducer,
    addItem: addItemReducer,
} as RootReducerDefinition<AppState>)
