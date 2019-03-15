import React from 'react';
import {ItemList} from "./ItemList";
import {StyleSheet, Text, View} from 'react-native';
import {AppState} from "../../store/state/AppState";
import {AddItemContainer} from "../container/AddItemContainer";

export interface HomeProps extends AppState{

}

export const Home = (props: HomeProps) => {
    return <View style={styles.container}>
        <ItemList items={props.items}/>
        <AddItemContainer></AddItemContainer>
    </View>
};


const styles = StyleSheet.create({
    container: {
    },
});
