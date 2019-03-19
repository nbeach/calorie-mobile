import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux"
import {AppState} from "../../store/state/AppState"
import {AddItem, AddItemDispatchProps, AddItemStateProps} from "../presentation/AddItem"
import {addItemAction} from "../../store/action/AddItemAction"
import {addItemNameChangedAction} from "../../store/action/AddItemNameChangedAction"

export const mapStateToProps: MapStateToProps<AddItemStateProps, AddItemStateProps, AppState> = (state) => ({
    ...state.addItem,
})


export const mapDispatchToProps: MapDispatchToPropsFunction<AddItemDispatchProps, AddItemStateProps> = (dispatch) => ({
    addItem: (name: string, calories: number) => dispatch(addItemAction({name, calories})),
    itemNameChanged: (name: string) => dispatch(addItemNameChangedAction({name})),
})

export const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem)
