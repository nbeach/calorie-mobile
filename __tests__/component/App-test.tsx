import React from 'react';
import renderer from 'react-test-renderer';
import {App} from "../../src/component/App";

describe(App.name, () => {

    it("displays the app", () => {
        const tree = renderer.create(<App/>).toJSON();
        expect(tree).toMatchSnapshot();
    })

});

