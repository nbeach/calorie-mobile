import {AppState} from "./AppState";

export const DEFAULT_STATE: AppState = {
    items: [{ name: "Something", calories: 1000}],
    addItem: {
        name: "",
        calories: 0
    }
}

