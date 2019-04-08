import {ItemState} from "./ItemState"
import {AddItemState} from "./AddItemState"

export interface AppState {
    readonly items: ReadonlyArray<ItemState>,
    readonly addItem: AddItemState
}

