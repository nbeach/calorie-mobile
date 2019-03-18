import React from 'react';
import {ItemList} from "./ItemList";
import {StyleSheet, View} from 'react-native';
import {AppState} from "../../store/state/AppState";
import {AddItemContainer} from "../container/AddItemContainer";

export interface HomeProps extends AppState{

}

export const Home = (props: HomeProps) => {
    return <View style={styles.container}>
        <AddItemContainer></AddItemContainer>
        <ItemList items={props.items}/>
    </View>
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        alignItems: 'stretch',
    },
});
