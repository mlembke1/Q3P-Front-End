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

export default class Dashboard extends Component {
  render() {
    return (
      <ScrollView style={styles.container}>
        <Text
          style={styles.text}>
          Welcome
        </Text>
        <View style={styles.buttonContainer} />
        <Button
          onPress={this.props.onLogoutPress}
          title="Logout"
         />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 200,
    padding: 20
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    textAlign: 'center'
  },
  buttonContainer: {
    margin: 20
  }
})

AppRegistry.registerComponent('Dashboard', () => Dashboard);
