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
<<<<<<< HEAD

  state = {
    isLoggedIn: false
=======
  render() {
    return (
      <View>
        <WelcomePage />
        <Dashboard />
      </View>
    )
>>>>>>> Messed around with dashboard design and the such
  }

<<<<<<< HEAD
 render() {
   if (this.state.isLoggedIn)
     return <Dashboard
        onLogoutPress={() => this.setState({isLoggedIn: false})}
        />
   else
     return <WelcomePage
         onLoginPress={() => this.setState({isLoggedIn: true})}
       />
  }
}

=======
>>>>>>> Messed around with dashboard design and the such
AppRegistry.registerComponent('App', () => App);
