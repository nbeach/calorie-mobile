import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux"
import {AppState} from "../../store/state/AppState"
import {AddItem, AddItemDispatchProps, AddItemStateProps} from "../presentation/AddItem"
import {addItemAction} from "../../store/action/AddItemAction"
import {addItemNameChangedAction} from "../../store/action/AddItemNameChangedAction"
import {addItemCaloriesChangedAction} from "../../store/action/AddItemCaloriesChangedAction";

export const mapStateToProps: MapStateToProps<AddItemStateProps, void, AppState> = (state) => ({
    ...state.addItem,
})

export const mapDispatchToProps: MapDispatchToPropsFunction<AddItemDispatchProps, void> = (dispatch) => ({
    addItem: (name: string, calories: number) => dispatch(addItemAction({name, calories})),
    itemNameChanged: (name: string) => dispatch(addItemNameChangedAction({name})),
    itemCaloriesChanged: (calories: string) => dispatch(addItemCaloriesChangedAction({calories})),
})

export const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem)
