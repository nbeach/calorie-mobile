import React from "react"

import renderer, {ReactTestRenderer} from "react-test-renderer"
import {Provider} from "react-redux"
import {AppState} from "../../../src/store/state/AppState"
import {Store} from "redux"
import {instances} from "../../../test-util/SelectionUtil"
import {ItemListTestIds} from "../../../src/component/presentation/ItemList"
import {removeItemAction} from "../../../src/store/action/RemoveItemAction"
import {createAppState} from "../../../test-util/factory/createAppState"
import {ItemSummaryContainer} from "../../../src/component/container/ItemSummaryContainer";
import {createItemState} from "../../../test-util/factory/createItemState";
import {mockStore} from "../../../test-util/mockStore";

describe(ItemSummaryContainer.name, () => {
    let tree: ReactTestRenderer, store: Store<AppState>

    beforeEach(() => {

        store = mockStore(createAppState({
            items: [
                createItemState({id: "00000000-0000-0000-0000-000000000000", name: "Chicken", calories: 100}),
                createItemState({id: "11111111-1111-1111-1111-111111111111", name: "Beef", calories: 200}),
            ],
            totalCalories: 500,
        }))

        tree = renderer.create(
            <Provider store={store}>
                <ItemSummaryContainer state/>
            </Provider>,
        )
    })

    it("presentation has not changed", () => {
        expect(tree.toJSON()).toMatchSnapshot()
    })

    it("when the remove button is pressed removes the item", () => {
        instances(ItemListTestIds.RemoveButton, tree)[0].props.onPress()
        expect(store.dispatch).toHaveBeenCalledWith(removeItemAction({ id: "00000000-0000-0000-0000-000000000000"}))
    })

})

