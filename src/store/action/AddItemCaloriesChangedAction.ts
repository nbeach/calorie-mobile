import {createActionFactory} from "./action-util"

export interface AddItemCaloriesChangedAction {
    readonly calories: string
}

export const addItemCaloriesChangedAction = createActionFactory<AddItemCaloriesChangedAction>("ADD_ITEM_CALORIES_CHANGED_ACTION")

