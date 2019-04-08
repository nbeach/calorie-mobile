import React from "react"

import renderer from "react-test-renderer"
import {AddItem, AddItemTestIds} from "../../../src/component/presentation/AddItem"
import {shallow, ShallowWrapper} from "enzyme"
import {node} from "../../../test-util/SelectionUtil"

describe(AddItem.name, () => {

    it("displays the item form", () => {
        const tree = renderer.create(<AddItem name={"Chicken"} calories={"500"} addItem={jest.fn()} itemNameChanged={jest.fn()} itemCaloriesChanged={jest.fn()} />).toJSON()
        expect(tree).toMatchSnapshot()
    })

    describe("when", () => {
        let wrapper: ShallowWrapper, addItem: jest.Mock, itemNameChanged: jest.Mock, itemCaloriesChanged: jest.Mock

        beforeEach(() => {
            addItem = jest.fn()
            itemNameChanged = jest.fn()
            itemCaloriesChanged = jest.fn()
            wrapper = shallow(<AddItem name={"Chicken"} calories={"500"} addItem={addItem} itemNameChanged={itemNameChanged} itemCaloriesChanged={itemCaloriesChanged} />)
        })

        it("the add item button is pressed adds an item", () => {
            node(AddItemTestIds.AddButton, wrapper).props().onPress(null as any)
            expect(addItem).toHaveBeenCalled()
        })

        it("name text changes updates the name text", () => {
            node(AddItemTestIds.NameField, wrapper).props().onChangeText("Soup")
            expect(itemNameChanged).toHaveBeenCalledWith("Soup")
        })

        it("calorie text changes updates the calorie text", () => {
            node(AddItemTestIds.CalorieField, wrapper).props().onChangeText("200")
            expect(itemCaloriesChanged).toHaveBeenCalledWith("200")
        })

    })

})
