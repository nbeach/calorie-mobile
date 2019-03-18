import {createActionFactory, isAction} from "../../../src/store/action/action-util";

describe("ActionUtil", () => {

    describe(createActionFactory.name, () => {

        it("creates actions with the provided type", () => {
            interface MockAction {
                foo: string
            }

            const factory = createActionFactory<MockAction>("FAKE_ACTION");
            const action = factory({ foo: "bar" })

            expect(action.type).toEqual("FAKE_ACTION")
            expect(action.foo).toEqual("bar")
        });

    });

    describe(isAction.name, () => {

        interface MockAction {
            foo: string
        }

        it("returns true if the action was created by the provided factory", () => {
            const factory = createActionFactory<MockAction>("FAKE_ACTION");
            const action = factory({foo: "bar"})

            expect(isAction(factory, action)).toEqual(true)
        });

        it("returns false if the action was not created by the provided factory", () => {
            const creatingFactory = createActionFactory<MockAction>("MATCHING_ACTION");
            const nonMatchingFactory = createActionFactory<MockAction>("OTHER_ACTION");
            const action = creatingFactory({foo: "bar"})

            expect(isAction(nonMatchingFactory, action)).toEqual(false)
        });

    });


});
