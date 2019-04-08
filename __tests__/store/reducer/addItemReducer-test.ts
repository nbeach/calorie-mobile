import {addItemReducer} from "../../../src/store/reducer/addItemReducer"
import {addItemNameChangedAction} from "../../../src/store/action/AddItemNameChangedAction"
import {createActionFactory} from "../../../src/store/action/action-util"
import {addItemCaloriesChangedAction} from "../../../src/store/action/AddItemCaloriesChangedAction"
import {addItemAction} from "../../../src/store/action/AddItemAction"
import {createAddItemState} from "../../../test-util/factory/createAddItemState";

describe(addItemReducer.name, () => {

    describe(`on ${addItemNameChangedAction.name}`, () => {

        it("updates the name of the item being added", () => {
            const priorState = createAddItemState({ calories: "100" })

            const newState = addItemReducer(priorState, addItemNameChangedAction({ name: "Chicken" }))

            expect(newState).toEqual(createAddItemState({ name: "Chicken", calories: "100" }))
        })

    })

    describe(`on ${addItemCaloriesChangedAction.name}`, () => {

        it("updates the name of the item being added", () => {
            const priorState = createAddItemState({ name: "Chicken" })

            const newState = addItemReducer(priorState, addItemCaloriesChangedAction({ calories: "100" }))

            expect(newState).toEqual(createAddItemState({ name: "Chicken", calories: "100" }))
        })

    })

    describe(`on ${addItemAction.name}`, () => {

        it("clears the newly added item from the form", () => {
            const priorState = createAddItemState({ name: "Beef", calories: "100" })

            const newState = addItemReducer(priorState, addItemAction({ name: "Chicken", calories: 200 }))

            expect(newState).toEqual(createAddItemState({ name: "", calories: "" }))

        })

    })


    it("returns prior state when action not handled", () => {
        const priorState = createAddItemState({ name: "Beef", calories: "100" })
        const actionFactory = createActionFactory("FAKE_ACTION")

        const newState = addItemReducer(priorState, actionFactory({}))

        expect(newState).toEqual(createAddItemState({ name: "Beef", calories: "100" }))
    })

})
