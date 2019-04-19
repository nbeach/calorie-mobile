import {ItemListDispatchProps} from "../presentation/ItemList"
import {connect, MapDispatchToPropsFunction, MapStateToProps} from "react-redux"
import {AppState} from "../../store/state/AppState"
import {removeItemAction} from "../../store/action/RemoveItemAction"
import {ItemSummary, ItemSummaryStateProps} from "../presentation/ItemSummary"

export const mapStateToProps: MapStateToProps<ItemSummaryStateProps, void, AppState> = ({totalCalories, items}) => ({ items, totalCalories })

export const mapDispatchToProps: MapDispatchToPropsFunction<ItemListDispatchProps, void> = (dispatch) => ({
    removeItem: (id: string) => dispatch(removeItemAction({ id })),
})

export const ItemSummaryContainer = connect(mapStateToProps, mapDispatchToProps)(ItemSummary)
