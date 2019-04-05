import React from "react"

import renderer from "react-test-renderer"
import {Provider} from "react-redux"
import {AppState} from "../../../src/store/state/AppState"
import {Store} from "redux"
import {HomeContainer} from "../../../src/component/container/HomeContainer"

describe(HomeContainer.name, () => {

    it("displays the items and allows adding items", () => {
        const state: AppState = {
            addItem:  {name: "Beef", calories: 200},
            items: [{name: "Chicken", calories: 100}],
        }

        const store: Store<AppState> = {
            getState: () => state,
            dispatch: jest.fn(),
            subscribe: jest.fn(),
            replaceReducer: jest.fn(),
        }

        const tree = renderer.create(
            <Provider store={store}>
                <HomeContainer state />
            </Provider>,
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })

})

