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
import { onSignOut } from "./Auth"
import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios'

export default class Dashboard extends Component {

  constructor(){
    super()
    this.state = {
      userDecks: [],
      publicDecks: [],
      currentUser: null
    }
  }

  componentDidMount(){
      this.fetchAllUserDecks()
      this.fetchAllPublicDecks()
      this.getCurrentUser()
  }

  getCurrentUser(){
    axios.get(`${REACT_APP_API_URL}/getCurrentUser`)
    .then(r => {
      this.setState({
        currentUser: r.data.currentUser
      })
    })
    .catch(() => console.log('Whoops, something went wrong getting the current user'))
  }

  fetchAllUserDecks(){
    axios.get(`${REACT_APP_API_URL}/getAllDecksForUser`)
      .then((r) => {
        this.setState({
          userDecks: r.data.userDecks
        })
      })
      .catch(err => console.log(err))
  }

  fetchAllPublicDecks(){
    axios.get(`${REACT_APP_API_URL}/getAllPublicDecks`)
      .then((r) => {
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
          <View style={styles.profile}>
            <Text style={styles.username}>{ this.state.currentUser }</Text>
            <View
              style={styles.imagePlaceholder}>
              <Text style={{ color: "white", fontSize: 28 }}>JD</Text>
            </View>
          </View>
<<<<<<< HEAD
          <TouchableHighlight onPress={() => this.props.navigation.navigate('Decks', { userDecks: this.state.userDecks })}>
=======
          <TouchableHighlight underlayColor="transparent" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Decks')}>
>>>>>>> social-branch
            <View style={[styles.card, { backgroundColor: '#b4645d' }]}>
              <Icon style={styles.cardIcon} name="folder-open" color="white" size={34} />
              <Text style={styles.cardTitle}>
                VIEW DECKS
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="transparent" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('CreateCard')}>
            <View style={[styles.card, { backgroundColor: '#b45da4' }]}>
              <Icon style={styles.cardIcon} name="plus-square" color="white" size={34} />
              <Text style={styles.cardTitle}>
                CREATE DECK
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="transparent" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Public', { publicDecks: this.state.publicDecks })}>
            <View style={[styles.card, { backgroundColor: '#995db4'}]}>
              <Icon style={styles.cardIcon} name="users" color="white" size={34} />
              <Text style={styles.cardTitle}>
                PUBLIC
              </Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight underlayColor="transparent" activeOpacity={0.5} onPress={() => this.props.navigation.navigate('Settings')}>
            <View style={[styles.card, { backgroundColor: '#5d96b4' }]}>
              <Icon style={styles.cardIcon} name="gear" color="white" size={34} />
              <Text style={styles.cardTitle}>
                SETTINGS
              </Text>
            </View>
          </TouchableHighlight>
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
  profile: {
    width: width-30,
    height: width/2,
    marginTop: 15,
    marginBottom: 15,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: .7
  },
  imagePlaceholder: {
    backgroundColor: "#bcbec1",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    borderRadius: 100,
    alignSelf: "center",
    marginBottom: 20
  },
  username: {
    fontSize: 22,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 15
  },
  card: {
    width: (width / 2) - 20,
    height: (width / 2) - 20,
    margin: 5,
    justifyContent: 'center',
    backgroundColor: 'white',
    shadowColor: 'black',
    shadowOffset: { width: 3, height: 3 },
    shadowRadius: 3,
    shadowOpacity: .7
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
    color: 'white',
    fontSize: 20
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
