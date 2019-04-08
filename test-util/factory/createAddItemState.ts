import {AddItemState} from "../../src/store/state/AddItemState";

export const createAddItemState = (partial: Partial<AddItemState> = {}): AddItemState => {
    const defaults: AddItemState = {
        name: "",
        calories: "",
    }

    return {...defaults, ...partial}
}
