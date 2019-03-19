import React from "react"
import {StyleSheet, Text, View} from "react-native"
import {ItemState} from "../../store/state/ItemState"
import {border} from "../../util/StyleUtil"

export interface ItemListProps {
    readonly items: ReadonlyArray<ItemState>
}

export const ItemList = (props: ItemListProps) => {
    return <View style={styles.container}>
        {props.items.map(item => <Text key={item.name} style={styles.item}>{item.name}</Text>)}
    </View>
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },
    item: {
        padding: 10,
        width: "100%",
        textAlign: "center",
        fontSize: 18,
        ...border(1, "solid", "#AAAAAA"),
    },

})
