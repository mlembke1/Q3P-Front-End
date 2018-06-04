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

<<<<<<< HEAD
export default class SettingsModal extends Component {
  static navigationOptions = {
    title: 'Settings',
    headerLeft: (
      <View>
      </View>
    ),
    headerRight: (
      <View>
        <Button
          buttonStyle={{ backgroundColor: '#79B45D' }}
          onPress={() => this.props.navigation.goBack()}
          title="Close"
        />
      </View>
    ),
    headerStyle: {
      backgroundColor: '#79B45D',
    },
    headerTitleStyle: {
      color: '#ffffff',
      fontSize: 20
    }
  }
  render() {
    return (
      <View style={styles.background}>
        <ScrollView contentContainerStyle={styles.container}>
          <StatusBar barStyle="light-content" />
            <Button
              color="black"
              fontFamily="Arial"
              backgroundColor="white"
              style={styles.button}
              title="Report a Problem" />
            <Button
              color="black"
              fontFamily="Arial"
              backgroundColor="white"
              style={styles.button}
              title="Rate on App Store" />
            <Button
              color="black"
              fontFamily="Arial"
              backgroundColor="white"
              style={styles.button}
              title="Logout" />
            <Text style={{ marginTop: 10 }}>
              Version 1.0.0
            </Text>
        </ScrollView>
      </View>
    )
  }
}

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 5,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  button: {
    width,
    marginTop: 5
  },
  logoutText: {
    color: '#000'
  },
  card: {
    width: (width / 2) - 20,
    height: (width / 2) - 20,
    margin: 5,
    justifyContent: 'center',
    backgroundColor: '#ffffff'
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    color: '#000000',
    textAlign: 'center'
  },
  cardTitle: {
    textAlign: 'center',
    fontFamily: 'Arial-BoldMT'
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2ede9'
  }
})

AppRegistry.registerComponent('Settings', () => SettingsModal)
=======
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
>>>>>>> 435fef41d9acf062d953e14b89aa234853beff09
