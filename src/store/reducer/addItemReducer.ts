import {DEFAULT_STATE} from "../state/default-state"
import {Action} from "redux"
import {ItemState} from "../state/ItemState"
import {isAction} from "../action/action-util"
import {addItemNameChangedAction} from "../action/AddItemNameChangedAction"
import {addItemCaloriesChangedAction} from "../action/AddItemCaloriesChangedAction"
import {addItemAction} from "../action/AddItemAction"

export const addItemReducer = (previousState: ItemState = DEFAULT_STATE.addItem, action: Action): ItemState => {

    if (isAction(addItemNameChangedAction, action)) {
        return {
            ...previousState,
            name: action.name,
        }
    }

    if (isAction(addItemCaloriesChangedAction, action)) {
        return {
            ...previousState,
            calories: Number(action.calories),
        }
    }


    if (isAction(addItemAction, action)) {
        return {
            ...previousState,
            name: "",
            calories: 0,
        }
    }

    return previousState
}
