import {createActionFactory} from "./action-util"

export interface AddItemAction {
    readonly name: string
    readonly calories: string
}

export const addItemAction = createActionFactory<AddItemAction>("ADD_ITEM_ACTION")

