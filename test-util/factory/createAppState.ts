import {AppState} from "../../src/store/state/AppState"
import {createAddItemState} from "./createAddItemState"

export const createAppState = (partial: Partial<AppState> = {}): AppState => {
    const defaults: AppState = {
        items: [],
        addItem: createAddItemState(),
    }

    return {...defaults, ...partial}
}
