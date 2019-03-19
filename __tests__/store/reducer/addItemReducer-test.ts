import {createItemState} from "../../../test-util/factory/createItemState"
import {addItemReducer} from "../../../src/store/reducer/addItemReducer"
import {addItemNameChangedAction} from "../../../src/store/action/AddItemNameChangedAction"
import {createActionFactory} from "../../../src/store/action/action-util"
import {addItemCaloriesChangedAction} from "../../../src/store/action/AddItemCaloriesChangedAction"
import {addItemAction} from "../../../src/store/action/AddItemAction"

describe(addItemReducer.name, () => {

    describe(`on ${addItemNameChangedAction.name}`, () => {

        it("updates the name of the item being added", () => {
            const priorState = createItemState({ calories: 100 })

            const newState = addItemReducer(priorState, addItemNameChangedAction({ name: "Chicken" }))

            expect(newState).toEqual(createItemState({ name: "Chicken", calories: 100 }))
        })

    })

    describe(`on ${addItemCaloriesChangedAction.name}`, () => {

        it("updates the name of the item being added", () => {
            const priorState = createItemState({ name: "Chicken" })

            const newState = addItemReducer(priorState, addItemCaloriesChangedAction({ calories: "100" }))

            expect(newState).toEqual(createItemState({ name: "Chicken", calories: 100 }))
        })

    })

    describe(`on ${addItemAction.name}`, () => {

        it("clears the newly added item from the form", () => {
            const priorState = createItemState({ name: "Beef", calories: 100 })

            const newState = addItemReducer(priorState, addItemAction({ name: "Chicken", calories: 200 }))

            expect(newState).toEqual(createItemState({ name: "", calories: 0 }))

        })

    })


    it("returns prior state when action not handled", () => {
        const priorState = createItemState({ name: "Beef", calories: 100 })
        const actionFactory = createActionFactory("FAKE_ACTION")

        const newState = addItemReducer(priorState, actionFactory({}))

        expect(newState).toEqual(createItemState({ name: "Beef", calories: 100 }))
    })

})
