import {createActionFactory} from "./action-util"

export interface AddItemAction {
    readonly name: string
    readonly calories: number
}

export const addItemAction = createActionFactory<AddItemAction>("ADD_ITEM_ACTION")

