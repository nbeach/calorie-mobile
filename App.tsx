import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from "react-redux"
import {initializeStore} from "./src/store/store";
import {HomeContainer} from "./src/component/container/HomeContainer";

interface Props {}
export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={initializeStore()}>
        <View style={styles.container}>
          <HomeContainer></HomeContainer>
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});


