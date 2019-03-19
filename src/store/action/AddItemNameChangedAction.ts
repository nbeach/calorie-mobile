import {createActionFactory} from "./action-util"

export interface AddItemNameChangedAction {
    readonly name: string
}

export const addItemNameChangedAction = createActionFactory<AddItemNameChangedAction>("ADD_ITEM_NAME_CHANGED_ACTION")

