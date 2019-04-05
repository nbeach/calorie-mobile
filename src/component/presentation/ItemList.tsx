import React from "react"
import {StyleSheet, Text, View} from "react-native"
import {ItemState} from "../../store/state/ItemState"

export interface ItemListProps {
    readonly items: ReadonlyArray<ItemState>
}

export const ItemList = (props: ItemListProps) =>
    <View>
        {props.items.map(item =>
            <View key={item.name} style={styles.itemContainer}>
                <Text style={styles.item}>{item.name}</Text>
                <Text style={styles.item}>{item.calories.toString()}</Text>
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
