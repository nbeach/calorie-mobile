import {createActionFactory} from "./action-util"

export interface RemoveItemAction {
    readonly id: string
}

export const removeItemAction = createActionFactory<RemoveItemAction>("REMOVE_ITEM_ACTION")

