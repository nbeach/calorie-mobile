import React from "react"
import {View} from "react-native"
import {AddItemContainer} from "../container/AddItemContainer"
import {ItemSummaryContainer} from "../container/ItemSummaryContainer"


export const Home = () =>
    <View>
        <AddItemContainer/>
        <ItemSummaryContainer/>
    </View>
