import {AppState} from "./AppState";

export const DEFAULT_STATE: AppState = {
    items: [
        { name: "Carrots", calories: 1000},
        { name: "Chicken", calories: 1000},
        { name: "Beef", calories: 1000},
        { name: "Dinner", calories: 1000},
    ],
    addItem: {
        name: "",
        calories: 0
    }
}

