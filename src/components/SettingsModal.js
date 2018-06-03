import React, { Component } from 'react'
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
import { Button, Card } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class SettingsModal extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button
          onPress={() => this.props.navigation.goBack()}
          title="Dismiss"
        />
      </View>
    )
  }
}
