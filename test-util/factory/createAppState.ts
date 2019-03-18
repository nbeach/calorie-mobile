import {AppState} from "../../src/store/state/AppState";
import {createItemState} from "./createItemState";

export const createAppState = (partial: Partial<AppState> = {}): AppState => {
    const defaults: AppState = {
        items: [],
        addItem: createItemState()
    }

    return {...defaults, ...partial}
}
