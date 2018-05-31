import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry
} from 'react-native';

import LandingPageHeader from './components/landing-page/header/header'

export default class App extends Component {
  render() {
    return (
      <View>
        <LandingPageHeader />
      </View>
    )
  }
}

AppRegistry.registerComponent('App', () => App);
