import React from "react"
import {StyleSheet, View} from "react-native"
import {Provider} from "react-redux"
import {initializeStore} from "../store/store"
import {Home} from "./presentation/Home"

export const App = () =>
    <Provider store={initializeStore()}>
        <View style={styles.container}>
            <Home/>
        </View>
    </Provider>


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "stretch",
    },
})


