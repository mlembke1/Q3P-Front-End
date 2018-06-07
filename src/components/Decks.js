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
  TouchableOpacity
} from 'react-native'
import { Button, Card, List, ListItem } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'
import { REACT_APP_API_URL } from 'react-native-dotenv'
import axios from 'axios'

export default class Decks extends Component {

  constructor(props){
    super(props)
    this.state = {
      userDecks: []
    }
  }

  fetchAllUserDecks = () => {
    axios.get(`${REACT_APP_API_URL}/getAllDecksForUser`)
      .then((r) => {
        this.setState({
          userDecks: r.data.userDecks
        })
      })
      .catch(err => console.log(err))
  }

  componentDidMount() {
    this.fetchAllUserDecks()
  }

  onPress = () => {
    this.props.navigation.navigate('NewDeck')
  }

  render(){
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <Button title="Create New Deck" onPress={this.onPress} backgroundColor={'#79B45D'} style={styles.button} />
        <List containerStyle={styles.list}>
          {
            this.state.userDecks.map((deck, i) => <TouchableOpacity key={i} onPress={() => this.props.navigation.navigate('CardList', { deckId: deck.id} )}><ListItem author={deck.author} id={deck.id} title={deck.title} subtitle={deck.subject} /></TouchableOpacity>)
          }
        </List>
      </ScrollView>
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
  text: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 27,
    color: 'white',
    textAlign: 'center'
  },
  list : {
    width,
    marginTop: 0
  },
  button: {
    marginTop: 10,
    marginBottom: 10
  }
})
