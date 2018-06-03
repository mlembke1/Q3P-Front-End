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
      <ScrollView style={{backgroundColor: 'lightgray'}}>
        <View key="login-body" style={styles.container}>
          <View key="login-tab" style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <View style={styles.loginTab} backgroundColor="black">
              <Text style={styles.tabText}>Login</Text>
            </View>
            <View style={styles.signupTab} backgroundColor="gray">
              <Text style={styles.tabText}>Signup</Text>
            </View>
          </View>
          <Text style={styles.text}>Login</Text>
          <TextInput style={styles.username} placeholder='Username' />
          <TextInput style={styles.password} placeholder='Password' />
          <View style={styles.buttonContainer} />
          <Button
            fontWeight="bold"
            fontSize={20}
            backgroundColor="black"
            onPress={this.props.onLoginPress}
            title="Submit"
          />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  loginTab: {
    height: 40,
    width: 167,
    justifyContent: 'center',
    alignItems: 'center'
  },
  signupTab: {
    height: 40,
    width: 167,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold'
  },
  container: {
    backgroundColor: 'skyblue',
    marginBottom: 180,
    marginTop: 180,
    marginLeft: 20,
    marginRight: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    paddingTop: 20
  },
  username: {
    backgroundColor: 'white',
    fontSize: 20,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  password: {
    backgroundColor: 'white',
    fontSize: 20,
    marginTop: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    margin: 10,
    width: 20
  }
})

AppRegistry.registerComponent('WelcomePage', () => WelcomePage);
