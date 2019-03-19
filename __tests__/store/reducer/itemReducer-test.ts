import {itemReducer} from "../../../src/store/reducer/itemReducer"
import {addItemAction} from "../../../src/store/action/AddItemAction"
import {createItemState} from "../../../test-util/factory/createItemState"
import {ItemState} from "../../../src/store/state/ItemState"
import {createActionFactory} from "../../../src/store/action/action-util"

describe(itemReducer.name, () => {

    describe(`on ${addItemAction.name}`, () => {

        it("adds the new item to the list", () => {
            const priorState: ReadonlyArray<ItemState> =  [
                createItemState({ name: "Beef", calories: 100 }),
            ]
            const newState = itemReducer(priorState, addItemAction({ name: "Chicken", calories: 200 }))

            expect(newState).toEqual([
                createItemState({ name: "Beef", calories: 100 }),
                createItemState({ name: "Chicken", calories: 200 }),
            ])

        })

    })

    it("returns prior state when action not handled", () => {
        const priorState: ReadonlyArray<ItemState> =  [createItemState({ name: "Beef", calories: 100 })]
        const actionFactory = createActionFactory("FAKE_ACTION")

        const newState = itemReducer(priorState, actionFactory({}))

        expect(newState).toEqual([createItemState({ name: "Beef", calories: 100 })])
    })

})
