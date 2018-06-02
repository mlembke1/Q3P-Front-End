import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native'
import { Button } from 'react-native-elements'

export default class WelcomePage extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Page</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 80,
    alignContent: 'center',
    justifyContent: 'center'
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
})

AppRegistry.registerComponent('WelcomePage', () => WelcomePage);
