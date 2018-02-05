import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SrcScreen from './src/SrcScreen';
import { Provider } from 'react-redux';
import configureStore from './src/configureStore';


const store = configureStore()

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
      <View style={styles.container}>
        <SrcScreen />
      </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})