import React from "react"

import renderer from "react-test-renderer"
import {AddItem} from "../../../src/component/presentation/AddItem"

describe(AddItem.name, () => {

    it("displays the item form", () => {
        const tree = renderer.create(<AddItem name={"Chicken"} calories={500} addItem={jest.fn()} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

})


