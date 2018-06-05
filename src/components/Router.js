import React from "react"
import { Platform, StatusBar } from "react-native"
import {
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from "react-navigation"
import { FontAwesome } from "react-native-vector-icons"
import Signup from "./Signup"
import Signin from "./Signin"
import Home from "./Home"
import Profile from "./Profile"
import Decks from "./Decks"
import Dashboard from "./Dashboard"

const headerStyle = {
  marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
}

export const SignedOut = createStackNavigator({
  // WelcomePage: {
  //   screen: WelcomePage,
  //   navigationOptions: {
  //     title: "Welcome",
  //     headerStyle
  //   }
  // },
  Signup: {
    screen: Dashboard,
    // navigationOptions: {
    //   title: "Sign Up",
    //   headerStyle
    // }
  },
  Signin: {
    screen: Signin,
    navigationOptions: {
      title: "Sign In",
      headerStyle
    }
  }
})

export const SignedIn = createBottomTabNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: "Home",
        // tabBarIcon: ({ tintColor }) => (
        //   <FontAwesome name="home" size={30} color={tintColor} />
        // )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "Profile",
        // tabBarIcon: ({ tintColor }) => (
        //   <FontAwesome name="user" size={30} color={tintColor} />
        // )
      }
    }
  },
  {
    tabBarOptions: {
      style: {
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
      }
    }
  }
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
