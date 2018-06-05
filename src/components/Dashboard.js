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
  StatusBar,
  TouchableHighlight
} from 'react-native'
import { Button, Card } from 'react-native-elements'
import { createStackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import SettingsModal from './SettingsModal'
import { onSignOut } from "./Auth"
import axios from 'axios'
import { REACT_APP_API_URL } from 'react-native-dotenv'

export default class Dashboard extends Component {

  constructor(){
    super()
    this.state = {
      userDecks: [],
      publicDecks: []
    }
  }

  componentDidMount(){
      this.fetchAllUserDecks()
      this.fetchAllPublicDecks()
  }

  fetchAllUserDecks(){
    axios.get(`${REACT_APP_API_URL}/getAllDecksForUser`)
    .then(r => {
      this.setState({
        userDecks: r.data.userDecks
      })
    })
    .catch(err => console.log(err))
  }

  fetchAllPublicDecks(){
    axios.get(`${REACT_APP_API_URL}/getAllPublicDecks`)
    .then(r => {
      this.setState({
        publicDecks: r.data.publicDecks
      })
    })
    .catch(err => console.log(err))
  }


  render(){
    return(
      <View style={styles.background}>
        <ScrollView contentContainerStyle={styles.container}>
          <StatusBar barStyle="light-content" />
        <TouchableHighlight onPress={() => this.props.navigation.navigate('Decks')}>
            <View style={[styles.card, { backgroundColor: '#b4645d' }]}>
              <Icon style={styles.cardIcon} name="folder-open" color="white" size={28} />
              <Text style={styles.cardTitle}>
                VIEW DECKS
              </Text>
            </View>
          </TouchableHighlight>
          <View style={[styles.card, { backgroundColor: '#b45da4' }]}>
            <Icon style={styles.cardIcon} name="plus-square" color="white" size={28} />
            <Text style={styles.cardTitle}>
              CREATE NEW DECK
            </Text>
          </View>
          <View style={[styles.card, { backgroundColor: '#995db4'}]}>
            <Icon style={styles.cardIcon} name="users" color="white" size={28} />
            <Text style={styles.cardTitle}>
              SOCIAL
            </Text>
          </View>
          <View style={[styles.card, { backgroundColor: '#5d96b4' }]}>
            <Icon style={styles.cardIcon} name="user-circle" color="white" size={28} />
            <Text style={styles.cardTitle}>
              PROFILE
            </Text>
          </View>
          <Button
            backgroundColor="#03A9F4"
            title="LOGOUT"
            onPress={() => {
                onSignOut().then(() => this.props.navigation.navigate("SignedOut"))
                axios.get(`${REACT_APP_API_URL}/logout`)
                .then(r => console.log(r))
                .then(err => console.log(err))
            }}
          />
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
  card: {
    width: (width / 2) - 20,
    height: (width / 2) - 20,
    margin: 5,
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    textAlign: 'center'
  },
  cardTitle: {
    textAlign: 'center',
    fontFamily: 'Arial-BoldMT',
    color: 'white'
  },
  cardIcon: {
    textAlign: 'center',
    marginBottom: 10
  },
  background: {
    width: '100%',
    height: '100%',
    backgroundColor: '#f2ede9'
  }
})

AppRegistry.registerComponent('Dashboard', () => Dashboard);
