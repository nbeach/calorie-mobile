import {ItemState} from "./ItemState"

export interface AppState {
    readonly items: ReadonlyArray<ItemState>,
    readonly addItem: ItemState
}

