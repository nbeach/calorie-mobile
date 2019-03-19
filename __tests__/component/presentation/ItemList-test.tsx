import React from "react"
import {ItemList} from "../../../src/component/presentation/ItemList"
import {ItemState} from "../../../src/store/state/ItemState"

import renderer from "react-test-renderer"

describe(ItemList.name, () => {

    it("displays items", () => {
        const items: ReadonlyArray<ItemState> = [
            {name: "chicken", calories: 100},
        ]

        const tree = renderer.create(<ItemList items={items}/>).toJSON()
        expect(tree).toMatchSnapshot()
    })

})

