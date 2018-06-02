import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  TextInput
} from 'react-native'
import { Button } from 'react-native-elements'

export default class WelcomePage extends Component {
  render() {
    return (
      <ScrollView style={styles.textContainer}>
        <Text
          style={styles.text}>
          Login
        </Text>
        <TextInput style={styles.usernameContainer} placeholder='Username' />
        <TextInput placeholder='Password' />
        <View style={styles.buttonContainer} />
        <Button
          onPress={this.props.onLoginPress}
          title="Submit"
        />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  textContainer: {
    marginTop: 200,
    padding: 20
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    textAlign: 'center'
  },
  usernameContainer: {
    marginTop: 30,
  },
  buttonContainer: {
    margin: 20
  }
})

AppRegistry.registerComponent('WelcomePage', () => WelcomePage);
