import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native'
import { Button } from 'react-native-elements'
import WelcomePage from './src/components/WelcomePage'
import Dashboard from './src/components/Dashboard'


export default class App extends Component {
  render() {
    return (
      <View>
        <WelcomePage />
        <Dashboard />
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
