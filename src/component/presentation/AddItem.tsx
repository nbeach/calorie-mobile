import React from 'react';
import {Platform, StyleSheet, Text, TextInput, Button, View} from 'react-native';

export interface AddItemProps {

}

export const AddItem = (props: AddItemProps) => {
    return <View>
        <Text>Item</Text><TextInput/>
        <Text>Calories</Text><TextInput/>

        <Button title="Add" onPress={() => {}}/>
    </View>
};
