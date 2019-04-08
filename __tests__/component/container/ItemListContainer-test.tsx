import React from "react"

import renderer, {ReactTestRenderer} from "react-test-renderer"
import {Provider} from "react-redux"
import {AppState} from "../../../src/store/state/AppState"
import {Store} from "redux"
import {ItemListContainer} from "../../../src/component/container/ItemListContainer"
import {instances} from "../../../test-util/SelectionUtil"
import {ItemListTestIds} from "../../../src/component/presentation/ItemList"
import {removeItemAction} from "../../../src/store/action/RemoveItemAction"
import {createAppState} from "../../../test-util/factory/createAppState"

describe(ItemListContainer.name, () => {
    let tree: ReactTestRenderer, store: Store<AppState>, state: AppState

    beforeEach(() => {
        state = createAppState({
            items: [
                {id: "00000000-0000-0000-0000-000000000000", name: "Chicken", calories: 100},
            ],
        })

        store = {
            getState: () => state,
            dispatch: jest.fn(),
            subscribe: jest.fn(),
            replaceReducer: jest.fn(),
        }

        tree = renderer.create(
            <Provider store={store}>
                <ItemListContainer state/>
            </Provider>,
        )
    })

    it("the add item button is pressed adds an item", () => {
        instances(ItemListTestIds.RemoveButton, tree)[0].props.onPress()
        expect(store.dispatch).toHaveBeenCalledWith(removeItemAction({ id: "00000000-0000-0000-0000-000000000000"}))
    })

})

