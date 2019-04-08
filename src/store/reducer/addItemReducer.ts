import {DEFAULT_STATE} from "../state/default-state"
import {Action} from "redux"
import {isAction} from "../action/action-util"
import {addItemNameChangedAction} from "../action/AddItemNameChangedAction"
import {addItemCaloriesChangedAction} from "../action/AddItemCaloriesChangedAction"
import {addItemAction} from "../action/AddItemAction"
import {AddItemState} from "../state/AddItemState"

export const addItemReducer = (previousState: AddItemState = DEFAULT_STATE.addItem, action: Action): AddItemState => {

    if (isAction(addItemNameChangedAction, action)) {
        return {
            ...previousState,
            name: action.name,
        }
    }

    if (isAction(addItemCaloriesChangedAction, action)) {
        return {
            ...previousState,
            calories: action.calories,
        }
    }


    if (isAction(addItemAction, action)) {
        return {
            ...previousState,
            name: "",
            calories: "",
        }
    }

    return previousState
}
