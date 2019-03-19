import React from "react"
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import {border} from "../../util/StyleUtil"

export interface AddItemStateProps {
    readonly name: string
    readonly calories: number
}

export interface AddItemDispatchProps {
    readonly addItem: (name: string, calories: number) => void
}

export const AddItem = ({addItem, name, calories}: AddItemStateProps & AddItemDispatchProps) => {
    return <View style={styles.container}>
        <TextInput style={styles.item} placeholder={"Item"}/>
        <TextInput keyboardType="numeric" style={styles.calories} placeholder={"Cals"}/>

        <TouchableOpacity style={styles.button} onPress={() => addItem(name, calories)}>
            <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
    </View>
}


const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        backgroundColor: "#e4ebee",
    },
    item: {
        width: "60%",
        borderColor: "#AAAAAA",
        borderBottomWidth: 1,
        borderStyle: "solid",
        fontSize: 18,
    },
    calories: {
        width: "15%",
        borderColor: "#AAAAAA",
        borderBottomWidth: 1,
        borderStyle: "solid",
        fontSize: 18,
    },
    button: {
        width: "15%",
        fontSize: 18,
        alignItems: "center",
        backgroundColor: "#1b5fff",
        justifyContent: "center",
        ...border(1, "solid", "#EEEEEE"),
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 18,
        fontWeight: "bold",
    },
})

