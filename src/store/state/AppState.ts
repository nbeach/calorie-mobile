import {ItemState} from "./ItemState";

export interface AppState {
    items: ItemState[],
    addItem: ItemState
}

