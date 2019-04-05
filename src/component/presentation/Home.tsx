import React from "react"
import {ItemList} from "./ItemList"
import {View} from "react-native"
import {AppState} from "../../store/state/AppState"
import {AddItemContainer} from "../container/AddItemContainer"

export type HomeStateProps = AppState

export const Home = (props: HomeStateProps) =>
    <View>
        <AddItemContainer/>
        <ItemList items={props.items} />
    </View>
