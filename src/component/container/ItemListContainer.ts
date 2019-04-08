import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux"
import {AppState} from "../../store/state/AppState"
import {ItemList, ItemListDispatchProps, ItemListProps} from "../presentation/ItemList"
import {removeItemAction} from "../../store/action/RemoveItemAction"

export const mapStateToProps: MapStateToProps<ItemListProps, void, AppState> = (state) => ({
    items: state.items,
})

export const mapDispatchToProps: MapDispatchToPropsFunction<ItemListDispatchProps, void> = (dispatch) => ({
    removeItem: (id: string) => dispatch(removeItemAction({ id })),
})

export const ItemListContainer = connect(mapStateToProps, mapDispatchToProps)(ItemList)
