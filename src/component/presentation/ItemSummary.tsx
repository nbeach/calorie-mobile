import {ItemState} from "../../store/state/ItemState"
import {View} from "react-native"
import {TotalCalories} from "./TotalCalories"
import {ItemList} from "./ItemList"
import React from "react"

export interface ItemSummaryStateProps {
    readonly totalCalories: number,
    readonly items: ReadonlyArray<ItemState>
}

export interface ItemSummaryDispatchProps {
    readonly removeItem: (id: string) => void
}

export const ItemSummary = ({totalCalories, items, removeItem}: ItemSummaryStateProps & ItemSummaryDispatchProps) =>
    <View>
        <TotalCalories totalCalories={totalCalories}/>
        <ItemList items={items} removeItem={removeItem}/>
    </View>
