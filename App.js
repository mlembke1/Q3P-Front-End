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
        Hello software interview candidates.
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
