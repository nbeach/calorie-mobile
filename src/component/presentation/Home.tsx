import React from "react"
import {View} from "react-native"
import {AddItemContainer} from "../container/AddItemContainer"
import {ItemListContainer} from "../container/ItemListContainer"


export const Home = () =>
    <View>
        <AddItemContainer/>
        <ItemListContainer/>
    </View>
