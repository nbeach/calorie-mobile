import React from "react"
import {ItemList} from "../../../src/component/presentation/ItemList"
import {ItemState} from "../../../src/store/state/ItemState"
import {shallow, ShallowWrapper} from "enzyme"

describe(ItemList.name, () => {
    let tree: ShallowWrapper, removeItem: jest.Mock, items: ReadonlyArray<ItemState>

    beforeEach(() => {
        items = [
            {id: "00000000-0000-0000-0000-000000000000", name: "chicken", calories: 100},
            {id: "11111111-1111-1111-1111-111111111111", name: "beef", calories: 200},
        ]

        removeItem = jest.fn()

        tree = shallow(<ItemList items={items} removeItem={removeItem}/>)
    })

    it("displays items", () => {
        expect(tree).toMatchSnapshot()
    })

})

