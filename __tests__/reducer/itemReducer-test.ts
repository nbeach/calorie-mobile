import {itemReducer} from "../../src/store/reducer/itemReducer";
import {addItemAction} from "../../src/store/action/AddItemAction";
import {createItemState} from "../../test-util/factory/createItemState";

describe(itemReducer.name, () => {

    describe(`on ${addItemAction.name}`, () => {

        it("adds the new item to the list", () => {

            const priorState =  [
                createItemState({ name: "Beef", calories: 100 })
            ]

            const actual = itemReducer(priorState, addItemAction({ name: "Chicken", calories: 200 }))

            expect(actual).toEqual([
                createItemState({ name: "Beef", calories: 100 }),
                createItemState({ name: "Chicken", calories: 200 })
            ])

        });

    });

});
