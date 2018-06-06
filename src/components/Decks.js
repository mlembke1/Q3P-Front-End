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
import { Button, Card, List, ListItem } from 'react-native-elements'
import { StackNavigator } from 'react-navigation'
import Icon from 'react-native-vector-icons/FontAwesome'

export default class Decks extends Component {
  componentDidMount() {
  }

  onPress = () => {
    this.props.navigation.navigate('NewDeck', { fetchAllUserDecks: this.props.navigation.state.params.fetchAllUserDecks })
  }

  render(){
    return(
      <ScrollView contentContainerStyle={styles.container}>
        <StatusBar barStyle="light-content" />
        <Button title="Create New Deck" onPress={this.onPress} backgroundColor={'#79B45D'} style={styles.button} />
        <List containerStyle={styles.list}>
          {
            this.props.navigation.state.params.userDecks.map((deck, i) => <ListItem author={deck.author} id={deck.id} key={i} title={deck.title} subtitle={deck.subject} />)
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
