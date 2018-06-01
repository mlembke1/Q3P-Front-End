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
      <View>
        <Text>Hello software interview candidates.</Text>
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
