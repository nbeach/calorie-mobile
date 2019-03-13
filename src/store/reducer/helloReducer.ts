import {DEFAULT_STATE} from "../state/default-state";
import {Action} from "redux";
import {HelloState} from "../state/AppState";

export const helloReducer = (previousState: HelloState = DEFAULT_STATE.hello, action: Action) => {
    return previousState
}
