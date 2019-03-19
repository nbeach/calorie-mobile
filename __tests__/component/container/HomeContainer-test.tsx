import React from "react"
import {ItemState} from "../../../src/store/state/ItemState"

import renderer from "react-test-renderer"
import {Provider} from "react-redux"
import {AppState} from "../../../src/store/state/AppState"
import {Store} from "redux"
import {HomeContainer} from "../../../src/component/container/HomeContainer"
import {Home} from "../../../src/component/presentation/Home"

describe(Home.name, () => {

    it("displays the items and allows adding items", () => {
        const items: ReadonlyArray<ItemState> = [
            {name: "Chicken", calories: 100},
        ]

        const addItem: ItemState = {name: "Beef", calories: 200}
        const state: AppState = {
            addItem,
            items,
        }

        const store: Store<AppState> = {
            getState: () => state,
            dispatch: jest.fn(),
            subscribe: jest.fn(),
            replaceReducer: jest.fn(),
        }

        const tree = renderer.create(
            <Provider store={store}>
                <HomeContainer items={items} addItem={addItem} />
            </Provider>,
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })

})

