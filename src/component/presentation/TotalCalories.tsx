import React from "react"
import {Text, View} from "react-native"

export interface TotalCaloriesStateProps {
    readonly totalCalories: number
}

export const TotalCalories = ({totalCalories}: TotalCaloriesStateProps) =>
    <View>
        <Text>{totalCalories.toString()}</Text>
    </View>
