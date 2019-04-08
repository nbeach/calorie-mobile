import React from "react"
import {StyleSheet, Text, TextInput, TouchableOpacity, View} from "react-native"
import {border} from "../../util/StyleUtil"

export interface AddItemStateProps {
    readonly name: string
    readonly calories: string
}

export interface AddItemDispatchProps {
    readonly addItem: (name: string, calories: string) => void,
    readonly itemNameChanged: (name: string) => void
    readonly itemCaloriesChanged: (calories: string) => void
}

export const AddItem = ({addItem, itemNameChanged, itemCaloriesChanged, name, calories}: AddItemStateProps & AddItemDispatchProps) => {
    let calorieInput: TextInput | null

    return <View style={styles.container}>
        <TextInput
            value={name}
            testID={AddItemTestIds.NameField}
            style={styles.item}
            placeholder={"Item"}
            onChangeText={text => itemNameChanged(text)}
            onSubmitEditing={() => calorieInput!.focus()}/>
        <TextInput
            ref={input => calorieInput = input}
            value={calories}
            testID={AddItemTestIds.CalorieField}
            keyboardType="numeric"
            style={styles.calories}
            placeholder={"Cals"}
            onChangeText={text => itemCaloriesChanged(text)}
            onSubmitEditing={() => addItem(name, calories)}/>

        <TouchableOpacity
            testID={AddItemTestIds.AddButton}
            style={styles.button}
            onPress={() => addItem(name, calories)}>
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

export enum AddItemTestIds {
    NameField = "NameField",
    CalorieField = "CalorieField",
    AddButton = "AddButton",
}
