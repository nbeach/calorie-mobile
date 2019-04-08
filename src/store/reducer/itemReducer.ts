import {DEFAULT_STATE} from "../state/default-state"
import {Action} from "redux"
import {isAction} from "../action/action-util"
import {addItemAction} from "../action/AddItemAction"
import {ItemState} from "../state/ItemState"
import uuid from "uuid/v4"
import {removeItemAction} from "../action/RemoveItemAction"

export const itemReducer = (previousState: ReadonlyArray<ItemState> = DEFAULT_STATE.items, action: Action): ReadonlyArray<ItemState> => {

    if (isAction(addItemAction, action)) {
        const {name, calories} = action
        return [
            ...previousState,
            {id: uuid(), name, calories: Number(calories)},
        ]
    }

    if (isAction(removeItemAction, action)) {
        return previousState.filter((itemState) => itemState.id !== action.id)
    }

    return previousState
}
