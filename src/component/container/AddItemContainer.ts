import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux";
import {AppState} from "../../store/state/AppState";
import {AddItem, AddItemDispatchProps, AddItemStateProps} from "../presentation/AddItem";
import {addItemAction} from "../../store/action/AddItemAction";

export const mapStateToProps: MapStateToProps<AddItemStateProps, AddItemStateProps, AppState> = (state) => ({
    ...state.items[0]
})


export const mapDispatchToProps: MapDispatchToPropsFunction<AddItemDispatchProps, AddItemStateProps> = (dispatch) => ({
    addItem: (name: string, calories: number) => dispatch(addItemAction({ name, calories }))
})

export const AddItemContainer = connect(mapStateToProps, mapDispatchToProps)(AddItem)
