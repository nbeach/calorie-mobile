import React from 'react';
import {AddItem} from "./AddItem";
import {ItemList} from "./ItemList";
import {Platform, StyleSheet, Text, View} from 'react-native';

export interface HomeProps {

}

export const Home = (props: HomeProps) => {
    return <View>
        <AddItem></AddItem>
        <ItemList/>
    </View>
};
