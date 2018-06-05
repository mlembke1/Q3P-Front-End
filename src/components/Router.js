import React from "react"
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
  StatusBar
} from 'react-native'
import {
  createStackNavigator,
  createSwitchNavigator
} from "react-navigation"
import Icon from 'react-native-vector-icons/FontAwesome'
import Signup from "./Signup"
import Login from "./Login"
import Home from "./Home"
import Profile from "./Profile"
import Decks from "./Decks"
import Dashboard from "./Dashboard"
import WelcomePage from "./WelcomePage"
import CardList from "./CardList"

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
}

export const SignedOut = createStackNavigator({
  WelcomePage: {
    screen: WelcomePage,
    navigationOptions: {
      title: '<STUDY.ENV/>',
      headerStyle: {
        backgroundColor: '#79B45D',
        marginBottom: 0
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20,
        fontFamily: 'HelveticaNeue-UltraLight',
        letterSpacing: 10,
        fontWeight: '300'
      }
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "SIGN UP",
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
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "LOGIN",
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
  }
})

export const SignedIn = createStackNavigator(
  {
    Home: {
      screen: Dashboard,
      navigationOptions: {
        // tabBarLabel: "Home",
          title: 'My Dashboard',
          headerLeft: (
            <View>
              <Icon name="angle-left" color="white" size={28} style={{paddingLeft: 20}} />
            </View>
          ),
          headerRight: (
            <View>
              <Icon name="gear" color="white" size={28} style={{paddingRight: 20}} />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#79B45D',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 20
          }
        // }
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        // tabBarLabel: "Profile",
      }
    },
    Decks: {
      screen: Decks,
      navigationOptions: {
        // tabBarLabel: "Home",
          title: 'My Decks',
          headerLeft: (
            <View>
              <Icon name="bars" color="white" size={28} style={{paddingLeft: 20}} />
            </View>
          ),
          headerRight: (
            <View>
              <Icon name="gear" color="white" size={28} style={{paddingRight: 20}} />
            </View>
          ),
          headerStyle: {
            backgroundColor: '#79B45D',
          },
          headerTitleStyle: {
            color: 'white',
            fontSize: 20
          }
        // }
      }
    }
  }
  // {
  //   tabBarOptions: {
  //     style: {
  //       paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  //     }
  //   }
  // }
)

export const createRootNavigator = (signedIn = false) => {
  return createSwitchNavigator(
    {
      SignedIn: {
        screen: SignedIn
      },
      SignedOut: {
        screen: SignedOut
      }
    },
    {
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  )
}
