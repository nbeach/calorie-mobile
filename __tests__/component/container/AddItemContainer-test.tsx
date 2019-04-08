import {AppState} from "../../../src/store/state/AppState"
import {Store} from "redux"
import renderer, {ReactTestRenderer} from "react-test-renderer"
import {Provider} from "react-redux"
import React from "react"
import {AddItemContainer} from "../../../src/component/container/AddItemContainer"
import {AddItemTestIds} from "../../../src/component/presentation/AddItem"
import {instance} from "../../../test-util/SelectionUtil"
import {addItemAction} from "../../../src/store/action/AddItemAction"
import {addItemNameChangedAction} from "../../../src/store/action/AddItemNameChangedAction"
import {addItemCaloriesChangedAction} from "../../../src/store/action/AddItemCaloriesChangedAction"
import {createAppState} from "../../../test-util/factory/createAppState"

describe(AddItemContainer.name, () => {

    it("displays the items and allows adding items", () => {
        const state = createAppState({
            addItem: {name: "Beef", calories: "200"},
        })

        const store: Store<AppState> = {
            getState: () => state,
            dispatch: jest.fn(),
            subscribe: jest.fn(),
            replaceReducer: jest.fn(),
        }

        const tree = renderer.create(
            <Provider store={store}>
                <AddItemContainer state/>
            </Provider>,
        ).toJSON()

        expect(tree).toMatchSnapshot()
    })

    describe("when", () => {
        let tree: ReactTestRenderer, store: Store<AppState>, state: AppState

        beforeEach(() => {
            state = createAppState({
                addItem: {name: "Beef", calories: "200"},
            })

            store = {
                getState: () => state,
                dispatch: jest.fn(),
                subscribe: jest.fn(),
                replaceReducer: jest.fn(),
            }

            tree = renderer.create(
                <Provider store={store}>
                    <AddItemContainer state/>
                </Provider>,
            )
        })

        it("the add item button is pressed adds an item", () => {
            instance(AddItemTestIds.AddButton, tree).props.onPress()
            expect(store.dispatch).toHaveBeenCalledWith(addItemAction({name: "Beef", calories: "200"}))
        })

        it("name text changes updates the name text", () => {
            instance(AddItemTestIds.NameField, tree).props.onChangeText("Soup")
            expect(store.dispatch).toHaveBeenCalledWith(addItemNameChangedAction({name: "Soup"}))
        })

        it("calorie text changes updates the calorie text", () => {
            instance(AddItemTestIds.CalorieField, tree).props.onChangeText("200")
            expect(store.dispatch).toHaveBeenCalledWith(addItemCaloriesChangedAction({calories: "200"}))
        })

        it("name field is submitted focuses on the calorie field", () => {
            const calorieField = instance(AddItemTestIds.CalorieField, tree).instance
            calorieField.focus = jest.fn()

            instance(AddItemTestIds.NameField, tree).props.onSubmitEditing(null as any)

            expect(calorieField.focus).toHaveBeenCalled()
        })

        it("calorie field is submitted adds an item", () => {
            instance(AddItemTestIds.CalorieField, tree).props.onSubmitEditing(null as any)

            expect(store.dispatch).toHaveBeenCalledWith(addItemAction({name: "Beef", calories: "200"}))
        })

    })

})

