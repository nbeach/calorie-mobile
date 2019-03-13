import React from 'react';
import {AddItem} from "./AddItem";
import {ItemList} from "./ItemList";
import {Platform, StyleSheet, Text, View} from 'react-native';
import {AppState} from "../../store/state/AppState";

export interface HomeProps extends AppState{

}

export const Home = (props: HomeProps) => {
    return <View>
        <Text>{props.hello.message}</Text>
        <AddItem></AddItem>
        <ItemList/>
    </View>
};
