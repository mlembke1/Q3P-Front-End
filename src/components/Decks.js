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

const decks = [
  {
    id: 0,
    title: 'Javascript for Toddlers',
    subject: 'Javascript',
    author: 'Nathan',
    public: 'T'
  },
  {
    id: 1,
    title: 'Javascript for the Elderly',
    subject: 'Javascript',
    author: 'Nathan',
    public: 'T'
  },
  {
    id: 2,
    title: 'Javascript for the Alien Races',
    subject: 'Javascript',
    author: 'Nathan',
    public: 'T'
  },
  {
    id: 3,
    title: 'React from the Viewpoint of Goats',
    subject: 'React',
    author: 'Nathan',
    public: 'T'
  }
]

export default ({ navigation }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <StatusBar barStyle="light-content" />
    <List containerStyle={styles.list}>
      {
        decks.map((deck, i) => <ListItem author={deck.author} id={deck.id} key={i} title={deck.title} subtitle={deck.subject} />)
      }
    </List>
    <Button onPress={() => navigation.navigate('Login')} title="Logout" />
  </ScrollView>
)

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
  }
})
