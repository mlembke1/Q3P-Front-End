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
  constructor(){
    super()
    this.state = {
      decks: [],
      isLoggedIn: false
    }
  }

  componentDidMount(){
    this.fetchAllDecks()
  }

  fetchAllDecks(){
    fetch('https://mtn-study.herokuapp.com/getAllDecks')
    .then(r => r.json())
    .then(json => {
      this.setState({
        decks: [...this.state.decks, json]
      })
    })
  }

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

AppRegistry.registerComponent('App', () => App);
