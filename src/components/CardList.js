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

const cards = [
  {
    id: 0,
    front: 'How much wood could a woodchuck chuck if a woodchuck could chuck wood?',
    back: 'Too much!',
    deck_id: 0
  }
]

export default ({ navigation, author }) => (
  <ScrollView contentContainerStyle={styles.container}>
    <View style={styles.authorView}>
      <View style={{ margin: 10 }}>
        <Text style={styles.topText}>
          Author: Nathan
        </Text>
      </View>
      <View style={{ margin: 10 }}>
        <Text style={styles.topText}>
          Created: 05/31/18
        </Text>
      </View>
    </View>
    <Button backgroundColor="#79B45D" borderRadius={100} style={styles.quiz} title="Quiz Mode" />
    <StatusBar barStyle="light-content" />
    <List containerStyle={styles.list}>
      {
        cards.map((card, i) => <ListItem id={card.id} key={i} title={card.front} subtitle={card.back} />)
      }
    </List>
  </ScrollView>
)

const width = Dimensions.get('window').width

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 0.5,
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
  authorView: {
    width: width + 5,
    marginTop: 0,
    marginBottom: 10,
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    borderWidth: 0.2,
    borderColor: 'black'
  },
  topText: {
    fontFamily: 'Arial',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black'
  },
  list: {
    width,
    marginTop: 0
  },
  quiz: {
    marginBottom: 10,
    marginTop: 5
  }
})
