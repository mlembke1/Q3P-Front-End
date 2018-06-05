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
  ImageBackground
} from 'react-native'
import { Button } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: '<STUDY.ENV/>',
    headerStyle: {
      backgroundColor: '#79B45D'
    },
    headerTitleStyle: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'HelveticaNeue-UltraLight',
      letterSpacing: 10,
      fontWeight: '300'
    }
  }
  render() {
    return (
      <ImageBackground
        source={require('../../assets/background-image.jpg')}
        style={styles.backgroundImage} >
          <ScrollView >
           <View style={styles.welcomeContainer}>
            <Button
              style={styles.loginBtn}
              title="Login"
              fontWeight="bold"
              fontSize={20}
              backgroundColor="black"
              onPress={() => this.props.navigation.navigate('Login')}>
            </Button>
            <Button
              style={styles.signupBtn}
              fontWeight="bold"
              fontSize={20}
              backgroundColor="black"
              onPress={() => this.props.navigation.navigate('Signup')}
              title="Signup">
            </Button>
          </View>
        </ScrollView>
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  // WELCOME SCREEN STYLES
  welcomeContainer: {
    backgroundColor: 'skyblue',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 180,
    paddingBottom: 20,
    paddingTop: 20
  },
  loginBtn: {
    margin: 10
  },
  signupBtn: {
    margin: 10
  },
  // LOGIN SCREEN STYLES
  loginContainer: {
    backgroundColor: 'skyblue',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 50,
    paddingBottom: 20
  },
  // SIGNUP SCREEN STYLES
  signupContainer: {
    backgroundColor: 'skyblue',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 240,
    paddingBottom: 20
  },
  email: {
    backgroundColor: 'white',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  confirmPassword: {
    backgroundColor: 'white',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  // LOGIN AND SIGNUP SCREEN STYLES
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
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  password: {
    backgroundColor: 'white',
    fontSize: 20,
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10
  },
  buttonContainer: {
    margin: 10,
    width: 20
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor:'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  }
})

// const WelcomePage = createStackNavigator({
//   Welcome: { screen: WelcomeScreen },
//   Login: {  screen: LoginScreen},
//   Signup: { screen: SignupScreen },
// })

export default WelcomePage
