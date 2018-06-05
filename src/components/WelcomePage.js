import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  TextInput,
  Image,
  ImageBackground,
  TouchableHighlight
} from 'react-native'
import { Button } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'

export default ({ navigation }) => (
      <ImageBackground
        source={require('../../assets/background-image.jpg')}
        style={styles.backgroundImage} >
          <ScrollView >
           <View style={styles.container}>
            <TouchableHighlight>
              <Button
                style={styles.loginBtn}
                title="LOGIN"
                fontSize={22}
                borderRadius={100}
                backgroundColor="#79B45D"
                onPress={() => navigation.navigate('Login')}>
              </Button>
            </TouchableHighlight>
            <Button
              style={styles.signupBtn}
              fontSize={22}
              borderRadius={100}
              backgroundColor="#79B45D"
              onPress={() => navigation.navigate('Signup')}
              title="SIGN UP">
            </Button>
          </View>
        </ScrollView>
      </ImageBackground>
    )

// WELCOME SCREEN STYLES
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#00000098',
    width: 300,
    marginTop: 180,
    paddingBottom: 20,
    paddingTop: 20,
    borderRadius: 20,
  },
  loginBtn: {
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: "white",
  },
  signupBtn: {
    marginTop: 20,
    margin: 10,
    borderWidth: 1.5,
    borderRadius: 100,
    borderColor: "white",
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
