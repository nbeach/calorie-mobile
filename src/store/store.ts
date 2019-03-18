import {createStore} from "redux";
import rootReducer from "./reducer/rootReducer";

export function initializeStore () {
    return createStore(rootReducer)
}

