import {ItemState} from "../../src/store/state/ItemState"

export const createItemState = (partial: Partial<ItemState> = {}): ItemState => {
    const defaults: ItemState = {
        id: "00000000-0000-0000-0000-000000000000",
        name: "",
        calories: -1,
    }

    return {...defaults, ...partial}
}
