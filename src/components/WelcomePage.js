import React, { Component } from 'react'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  TextInput,
  Image
} from 'react-native'
import { Button } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'

class WelcomeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: 'lightgray'}}>
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
    )
  }
}

class LoginScreen extends Component {
  static navigationOptions = {
    title: 'Login',
  }
  render() {
    return (
      <ScrollView style={{backgroundColor: 'lightgray'}}>
        <View key="login-body" style={styles.loginContainer}>
          <TextInput style={styles.username} placeholder='Username' />
          <TextInput secureTextEntry style={styles.password} placeholder='Password' />
          <View style={styles.buttonContainer} />
          <Button
            fontWeight="bold"
            fontSize={20}
            backgroundColor="black"
            // onPress={() =>
            // onLogin().then(() =>
            // this.props.navigation.navigate("Dashboard")
            // }
            title="Submit"
          />
        </View>
      </ScrollView>
    )
  }
}

class SignupScreen extends Component {
  static navigationOptions = {
    title: 'Signup',
  }
  render() {
    return (
      <ScrollView style={styles.signupContainer}>
       <View key="login-body">
        <TextInput style={styles.username} placeholder='Username' />
        <TextInput style={styles.email} placeholder='Email' />
        <TextInput style={styles.password} placeholder='Password' />
        <TextInput style={styles.confirmPassword} placeholder='Confirm Password' />
        <Button
          fontWeight="bold"
          fontSize={20}
          backgroundColor="black"
          // onPress={this.props.onSignupPress}
          title="Submit"
        />
      </View>
    </ScrollView>
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
  }
})

const WelcomePage = StackNavigator({
  Welcome: { screen: WelcomeScreen },
  Login: {  screen: LoginScreen},
  Signup: { screen: SignupScreen },
})

export default WelcomePage

// AppRegistry.registerComponent('WelcomePage', () => WelcomePage)


// export default class WelcomePage extends Component {
//   render() {
//     return (
//       <ScrollView style={{backgroundColor: 'lightgray'}}>
//         <View key="login-body" style={styles.container}>
//           <View key="login-tab" style={styles.tabContainer}>
//             <Button
//               style={styles.loginTab}
//               title="Login"
//               fontWeight="bold"
//               fontSize={20}
//               backgroundColor="black"
//               onPress={() => this.props.navigation.navigate('Login')}>
//             </Button>
//             <Button
//               style={styles.signupTab}
//               title="Signup"
//               backgroundColor="gray"
//               fontWeight="bold"
//               fontSize={20}
//               backgroundColor="gray"
//               width={200}
//                 onPress={() => this.props.navigation.navigate('Signup')}>
//               </Button>
//           </View>
//           <Text style={styles.text}>Login</Text>
//           <TextInput style={styles.username} placeholder='Username' />
//           <TextInput style={styles.password} placeholder='Password' />
//           <View style={styles.buttonContainer} />
//           <Button
//             fontWeight="bold"
//             fontSize={20}
//             backgroundColor="black"
//             onPress={this.props.onLoginPress}
//             title="Submit"
//           />
//         </View>
//       </ScrollView>
//     )
//   }
// }
//
// const styles = StyleSheet.create({
//   loginTab: {
//     height: 50,
//     width: 167,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: 'black'
//   },
//   signupTab: {
//     height: 50,
//     width: 167,
//     justifyContent: 'center',
//     alignItems: 'center'
//   },
//   tabText: {
//     color: 'white',
//     fontSize: 20,
//     fontWeight: 'bold'
//   },
//   tabContainer: {
//     flex: 1,
//     flexDirection: 'row',
//     justifyContent: 'center',
//     backgroundColor: 'lightgray',
//     marginLeft: 0
//   },
//   container: {
//     backgroundColor: 'skyblue',
//     marginBottom: 180,
//     marginTop: 180,
//     marginLeft: 20,
//     marginRight: 20,
//     paddingBottom: 20
//   },
//   text: {
//     fontFamily: 'Arial',
//     fontWeight: 'bold',
//     fontSize: 30,
//     textAlign: 'center',
//     paddingTop: 20
//   },
//   username: {
//     backgroundColor: 'white',
//     fontSize: 20,
//     marginTop: 20,
//     marginLeft: 20,
//     marginRight: 20,
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 10
//   },
//   password: {
//     backgroundColor: 'white',
//     fontSize: 20,
//     marginTop: 20,
//     marginLeft: 20,
//     marginRight: 20,
//     paddingTop: 10,
//     paddingBottom: 10,
//     paddingLeft: 10
//   },
//   buttonContainer: {
//     margin: 10,
//     width: 20
//   }
// })
//
// AppRegistry.registerComponent('WelcomePage', () => WelcomePage);
