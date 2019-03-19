import {ItemState} from "../../src/store/state/ItemState"

export const createItemState = (partial: Partial<ItemState> = {}): ItemState => {
    const defaults: ItemState = {
        name: "",
        calories: -1,
    }

    return {...defaults, ...partial}
}
