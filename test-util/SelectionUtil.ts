import {ShallowWrapper} from "enzyme"
import {ReactTestRenderer} from "react-test-renderer";

export const nodes = (testId: string, wrapper: ShallowWrapper) => wrapper.findWhere(node => node.prop("testID") === testId)
export const node = (testId: string, wrapper: ShallowWrapper) => nodes(testId, wrapper).first()

export const instances = (testId: string, tree: ReactTestRenderer) => tree.root.findAll(thing => thing.props.testID === testId)
export const instance = (testId: string, tree: ReactTestRenderer) => tree.root.find(thing => thing.props.testID === testId)
