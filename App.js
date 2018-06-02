import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello software interview candidates.</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    alignContent: 'flex-start'
  }
})

AppRegistry.registerComponent('App', () => App);
