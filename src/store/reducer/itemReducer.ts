import {DEFAULT_STATE} from "../state/default-state"
import {Action} from "redux"
import {isAction} from "../action/action-util"
import {addItemAction} from "../action/AddItemAction"
import {ItemState} from "../state/ItemState"

export const itemReducer = (previousState: ReadonlyArray<ItemState> = DEFAULT_STATE.items, action: Action): ReadonlyArray<ItemState> => {

    if (isAction(addItemAction, action)) {
        const {name, calories} = action
        return [...previousState, {name, calories}]
    }

    return previousState
}
