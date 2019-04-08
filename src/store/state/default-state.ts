import {AppState} from "./AppState"

export const DEFAULT_STATE: AppState = {
    items: [
        {name: "Carrots", calories: 1000},
        {name: "Chicken", calories: 500},
    ],
    addItem: {
        name: "",
        calories: "",
    },
}

