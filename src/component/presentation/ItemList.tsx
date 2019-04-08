import React from "react"
import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {ItemState} from "../../store/state/ItemState"

export interface ItemListProps {
    readonly items: ReadonlyArray<ItemState>
}

export interface ItemListDispatchProps {
    readonly removeItem: (id: string) => void
}

export const ItemList = ({items, removeItem}: ItemListProps & ItemListDispatchProps) =>
    <View>
        {items.map(item =>
            <View key={item.id} style={styles.itemContainer}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.calories.toString()}</Text>
                <TouchableOpacity key={item.id}
                    testID={ItemListTestIds.RemoveButton}
                    onPress={() => removeItem(item.id)}>
                    <Text>X</Text>
                </TouchableOpacity>
            </View>,
        )}
    </View>

const styles = StyleSheet.create({
    itemContainer: {
        padding: 10,
        flexDirection: "row",
        justifyContent: "space-between",

        borderColor: "#AAAAAA",
        borderStyle: "solid",
        borderBottomWidth: 1,
    },
    item: {
        fontSize: 18,
    },
})

export enum ItemListTestIds {
    RemoveButton = "RemoveButton",
}
