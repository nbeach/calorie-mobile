import {AppState} from "./AppState"

export const DEFAULT_STATE: AppState = {
    items: [
        {id: "00000000-0000-0000-0000-000000000000", name: "Carrots", calories: 1000},
        {id: "11111111-11111111-11111111-11111111", name: "Chicken", calories: 500},
    ],
    addItem: {
        name: "",
        calories: "",
    },
}

